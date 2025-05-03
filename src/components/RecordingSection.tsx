
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Play, Pause } from "lucide-react";
import VideoRecorder from "@/components/VideoRecorder";

const RecordingSection = () => {
  const [recording, setRecording] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartRecording = () => {
    setRecording(true);
  };

  const handleStopRecording = () => {
    setRecording(false);
    setPreviewMode(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDiscard = () => {
    setPreviewMode(false);
    setIsPlaying(false);
  };

  const handleSaveRecording = () => {
    // Save recording logic would go here
    setPreviewMode(false);
    setIsPlaying(false);
    // Show success message
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <CardTitle>Record a new video</CardTitle>
        <CardDescription>
          Capture yourself presenting and get instant AI feedback
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <VideoRecorder 
          recording={recording} 
          previewMode={previewMode} 
          isPlaying={isPlaying}
        />
        
        <div className="flex flex-wrap gap-2 mt-4 justify-between">
          {!recording && !previewMode ? (
            <Button onClick={handleStartRecording} className="flex items-center gap-2">
              <Mic className="h-4 w-4" />
              Start Recording
            </Button>
          ) : recording ? (
            <Button variant="destructive" onClick={handleStopRecording} className="flex items-center gap-2">
              <MicOff className="h-4 w-4" />
              Stop Recording
            </Button>
          ) : (
            <>
              <Button variant="outline" onClick={handlePlayPause} className="flex items-center gap-2">
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    Play
                  </>
                )}
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleDiscard}>
                  Discard
                </Button>
                <Button onClick={handleSaveRecording} className="flex items-center gap-2">
                  Analyze Recording
                </Button>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecordingSection;
