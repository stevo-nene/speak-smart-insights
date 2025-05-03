
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import RecordingSection from "@/components/RecordingSection";
import UploadSection from "@/components/UploadSection";
import { BarChart } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container px-4 py-8 md:py-12 space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground mt-2">
          Monitor your communication skills and get AI-powered insights to improve your speaking.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Recordings</CardTitle>
            <CardDescription>Total videos analyzed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">7</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Progress</CardTitle>
            <CardDescription>Overall improvement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">+12%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Latest Score</CardTitle>
            <CardDescription>From your most recent recording</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-brand">84/100</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <RecordingSection />
        <UploadSection />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Analyses</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="analysis-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">
                    {["Project Pitch", "Team Update", "Product Demo"][item - 1]}
                  </CardTitle>
                  <div className="text-sm font-medium text-muted-foreground">
                    {["3d", "1w", "2w"][item - 1]} ago
                  </div>
                </div>
                <CardDescription>
                  {["2:34", "5:21", "3:45"][item - 1]} minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Content</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{[82, 76, 89][item - 1]}%</span>
                      <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                        <div 
                          className="h-full bg-analysis-content" 
                          style={{ width: `${[82, 76, 89][item - 1]}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Voice</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{[68, 81, 72][item - 1]}%</span>
                      <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                        <div 
                          className="h-full bg-analysis-voice" 
                          style={{ width: `${[68, 81, 72][item - 1]}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Body Language</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{[75, 65, 85][item - 1]}%</span>
                      <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                        <div 
                          className="h-full bg-analysis-body" 
                          style={{ width: `${[75, 65, 85][item - 1]}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
