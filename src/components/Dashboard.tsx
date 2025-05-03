
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import RecordingSection from "@/components/RecordingSection";
import UploadSection from "@/components/UploadSection";
import { Button } from "@/components/ui/button";
import { BarChart, Calendar, Clock, PlayCircle, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  return (
    <div className="container px-4 py-8 md:py-12 space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex</h1>
          <p className="text-muted-foreground mt-2">
            Monitor your communication skills and get AI-powered insights to improve your speaking.
          </p>
        </div>
        <Button className="sm:self-start flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Recording
        </Button>
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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Analyses</h2>
          <Button variant="outline" size="sm" className="text-xs" asChild>
            <Link to="/analysis">View all</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="analysis-card hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-base">
                      {["Project Pitch", "Team Update", "Product Demo"][item - 1]}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {["Presentation", "Meeting", "Demo"][item - 1]}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {["3d", "1w", "2w"][item - 1]} ago
                  </div>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
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
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" size="sm" asChild className="text-xs">
                    <Link to={`/analysis/${item}`} className="flex items-center gap-1">
                      <PlayCircle className="h-3 w-3" /> View Analysis
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Upcoming Practice Sessions</h2>
          <Button variant="outline" size="sm" className="text-xs">Schedule Session</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2].map((item) => (
            <Card key={item}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">
                    {["Interview Prep", "Sales Pitch"][item - 1]}
                  </CardTitle>
                  <Badge className={item === 1 ? "bg-blue-500" : "bg-green-500"}>
                    {["Scheduled", "Confirmed"][item - 1]}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{["Tomorrow, 3:00 PM", "May 10, 10:00 AM"][item - 1]}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{["30 min", "45 min"][item - 1]}</span>
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
