
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Upload } from "lucide-react";

const UploadSection = () => {
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type.startsWith('video/')) {
        setFile(droppedFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a video file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulate file upload
    setTimeout(() => {
      toast({
        title: "Upload successful",
        description: "Your video has been uploaded for analysis.",
      });
      setIsUploading(false);
      setFile(null);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle>Upload a video</CardTitle>
        <CardDescription>
          Upload an existing recording for analysis
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            isDragging ? "border-primary bg-secondary/50" : "border-muted"
          } transition-colors`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!file ? (
            <>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Upload className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="mb-2 text-sm font-medium">
                Drag and drop your video here or click to browse
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                Support for MP4, WebM, and MOV formats up to 500MB
              </p>
              <div>
                <label htmlFor="video-upload">
                  <Button variant="outline" className="cursor-pointer" tabIndex={-1}>
                    Select File
                  </Button>
                  <input
                    id="video-upload"
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <div className="h-10 w-10 shrink-0 rounded-full bg-secondary flex items-center justify-center">
                  <Upload className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleUpload} 
                disabled={isUploading} 
                className="w-full"
              >
                {isUploading ? "Uploading..." : "Begin Analysis"}
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadSection;
