
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProgressTracker = () => {
  const mockData = [
    {
      date: "Apr 5",
      content: 65,
      voice: 58,
      body: 72,
      overall: 64,
    },
    {
      date: "Apr 12",
      content: 68,
      voice: 64,
      body: 75,
      overall: 69,
    },
    {
      date: "Apr 19",
      content: 75,
      voice: 70,
      body: 73,
      overall: 73,
    },
    {
      date: "Apr 26",
      content: 78,
      voice: 72,
      body: 78,
      overall: 76,
    },
    {
      date: "May 3",
      content: 82,
      voice: 79,
      body: 75,
      overall: 79,
    },
  ];

  const insightData = [
    {
      title: "Most Improved",
      metric: "Voice Modulation",
      change: "+36%",
      description: "Your vocal variety and tone modulation have improved significantly",
    },
    {
      title: "Key Strength",
      metric: "Content Structure",
      score: "82/100",
      description: "You excel at organizing your presentations with clear structure",
    },
    {
      title: "Focus Area",
      metric: "Gestures",
      score: "65/100",
      description: "Try incorporating more natural gestures to emphasize key points",
    }
  ];

  return (
    <div className="container px-4 py-8 md:py-12 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Your Progress</h1>
        <p className="text-muted-foreground mt-2">
          Track your communication skills improvement over time
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {insightData.map((insight, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">{insight.title}</CardTitle>
              <div className="text-2xl font-bold">{insight.metric}</div>
              {insight.change && (
                <CardDescription className="text-green-500 font-medium text-lg">
                  {insight.change}
                </CardDescription>
              )}
              {insight.score && (
                <CardDescription className="font-medium text-lg">
                  {insight.score}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Progress Over Time</CardTitle>
          <CardDescription>
            Your skills development tracked across recent presentations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={mockData}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    border: "none",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="overall"
                  name="Overall"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 7 }}
                />
                <Line
                  type="monotone"
                  dataKey="content"
                  name="Content"
                  stroke="#1EAEDB"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="voice"
                  name="Voice"
                  stroke="#F97316"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="body"
                  name="Body Language"
                  stroke="#D946EF"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="recommendations">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="strengths">Your Strengths</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recommendations" className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Personalized Improvement Plan</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-analysis-voice">Voice Technique</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-analysis-voice/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-analysis-voice">1</span>
                    </div>
                    <span>Practice pausing for 2 seconds after key points to let information sink in</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-analysis-voice/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-analysis-voice">2</span>
                    </div>
                    <span>Consider recording yourself reading a passage and focus on varying your pitch</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-analysis-body">Body Language</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-analysis-body/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-analysis-body">1</span>
                    </div>
                    <span>Practice gesturing naturally to emphasize 2-3 key points in each presentation</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-analysis-body/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-analysis-body">2</span>
                    </div>
                    <span>Work on maintaining eye contact with different parts of your audience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="strengths" className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Your Communication Strengths</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-analysis-content">Content Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">You consistently create well-structured presentations with clear beginning, middle, and end sections.</p>
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium mb-1">Continue to build on:</div>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Your strong opening statements that grab attention</li>
                    <li>Clear transitions between topics</li>
                    <li>Concise summaries at the end</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-brand">Audience Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">You excel at keeping your audience interested through relevant examples and clear explanations.</p>
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium mb-1">Continue to build on:</div>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Relatable examples that clarify complex ideas</li>
                    <li>Storytelling techniques that maintain interest</li>
                    <li>Contextualizing information for different audience members</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressTracker;
