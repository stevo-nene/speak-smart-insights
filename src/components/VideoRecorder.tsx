
import { useEffect, useRef } from "react";

interface VideoRecorderProps {
  recording: boolean;
  previewMode: boolean;
  isPlaying: boolean;
}

const VideoRecorder = ({ recording, previewMode, isPlaying }: VideoRecorderProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);

  useEffect(() => {
    if (recording) {
      startRecording();
    } else if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      stopRecording();
    }

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [recording]);

  useEffect(() => {
    if (previewMode) {
      if (isPlaying && videoRef.current) {
        videoRef.current.play();
      } else if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, previewMode]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });
      
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      chunksRef.current = [];
      mediaRecorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "video/webm" });
        if (videoRef.current) {
          videoRef.current.srcObject = null;
          videoRef.current.src = URL.createObjectURL(blob);
        }
      };
      
      mediaRecorder.start();
    } catch (error) {
      console.error("Error accessing media devices", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    }
  };

  return (
    <div className="aspect-video relative bg-muted rounded-lg overflow-hidden border">
      {!recording && !previewMode ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-2">
            <Mic className="h-6 w-6" />
          </div>
          <p>Ready to record</p>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted={recording}
            playsInline
          />
          {recording && (
            <div className="absolute top-4 right-4">
              <div className="px-2 py-1 bg-red-500 text-white text-xs rounded-md recording-pulse">
                REC
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// We need to import this at the top for the component to work
import { Mic } from "lucide-react";

export default VideoRecorder;
