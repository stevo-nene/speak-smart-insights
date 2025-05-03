
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BarChart, Mic, User } from "lucide-react";

const AnalysisResults = () => {
  const mockData = {
    videoTitle: "Project Pitch Presentation",
    date: "May 2, 2025",
    duration: "4:27",
    overallScore: 84,
    contentAnalysis: {
      score: 82,
      structure: 85,
      clarity: 78,
      engagement: 82,
      transcript: "Today I'd like to present our new product strategy for Q3. Our team has been working for the past month on developing a comprehensive approach that addresses the key challenges we identified in Q2...",
      keyInsights: [
        "Good introduction with clear objectives",
        "Effective use of data to support main points",
        "Could improve transition between sections",
        "Technical explanation was sometimes too complex"
      ]
    },
    voiceAnalysis: {
      score: 79,
      pace: {
        score: 72,
        wpm: 168,
        recommendation: "Consider slowing down by 10-15% for better clarity"
      },
      tone: {
        score: 85,
        insight: "Good variation, engaging delivery"
      },
      fillers: {
        score: 68,
        count: 14,
        examples: ["um", "like", "you know"]
      },
      volume: {
        score: 88,
        insight: "Good projection, minimal fluctuation"
      }
    },
    bodyLanguageAnalysis: {
      score: 75,
      posture: {
        score: 82,
        insight: "Good upright posture maintained throughout"
      },
      gestures: {
        score: 65,
        insight: "Limited hand movement, could be more expressive"
      },
      eyeContact: {
        score: 70,
        insight: "Tendency to look down when explaining technical details"
      },
      facialExpressions: {
        score: 84,
        insight: "Good emotional connection, engaged expression"
      }
    }
  };

  return (
    <div className="container px-4 py-8 md:py-12 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{mockData.videoTitle}</h1>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{mockData.date}</span>
          <span>{mockData.duration}</span>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Overall Score</p>
              <div className="text-4xl font-bold text-brand">{mockData.overallScore}/100</div>
            </div>
            <div className="h-24 w-24 rounded-full border-4 border-brand flex items-center justify-center">
              <span className="text-2xl font-bold">{mockData.overallScore}%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="content">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="content" className="data-[state=active]:bg-analysis-content data-[state=active]:text-white">
            Content Analysis
          </TabsTrigger>
          <TabsTrigger value="voice" className="data-[state=active]:bg-analysis-voice data-[state=active]:text-white">
            Voice Analysis
          </TabsTrigger>
          <TabsTrigger value="body" className="data-[state=active]:bg-analysis-body data-[state=active]:text-white">
            Body Language
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Content Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Structure</span>
                      <span className="text-sm font-medium">{mockData.contentAnalysis.structure}%</span>
                    </div>
                    <Progress value={mockData.contentAnalysis.structure} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Clarity</span>
                      <span className="text-sm font-medium">{mockData.contentAnalysis.clarity}%</span>
                    </div>
                    <Progress value={mockData.contentAnalysis.clarity} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Engagement</span>
                      <span className="text-sm font-medium">{mockData.contentAnalysis.engagement}%</span>
                    </div>
                    <Progress value={mockData.contentAnalysis.engagement} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mockData.contentAnalysis.keyInsights.map((insight, index) => (
                    <li key={index} className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-analysis-content/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-analysis-content">{index + 1}</span>
                      </div>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Transcript</CardTitle>
                <CardDescription>AI-generated transcript of your presentation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm whitespace-pre-line">
                  {mockData.contentAnalysis.transcript}
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="voice">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Speaking Pace</CardTitle>
                <CardDescription>{mockData.voiceAnalysis.pace.wpm} words per minute</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Optimal Pace</span>
                      <span className="text-sm font-medium">{mockData.voiceAnalysis.pace.score}%</span>
                    </div>
                    <Progress value={mockData.voiceAnalysis.pace.score} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {mockData.voiceAnalysis.pace.recommendation}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vocal Tone</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Expressiveness</span>
                      <span className="text-sm font-medium">{mockData.voiceAnalysis.tone.score}%</span>
                    </div>
                    <Progress value={mockData.voiceAnalysis.tone.score} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {mockData.voiceAnalysis.tone.insight}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Filler Words</CardTitle>
                <CardDescription>Detected {mockData.voiceAnalysis.fillers.count} filler words</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Minimizing Fillers</span>
                      <span className="text-sm font-medium">{mockData.voiceAnalysis.fillers.score}%</span>
                    </div>
                    <Progress value={mockData.voiceAnalysis.fillers.score} className="h-2" />
                  </div>
                  <div>
                    <p className="text-sm mb-2">Common fillers used:</p>
                    <div className="flex flex-wrap gap-2">
                      {mockData.voiceAnalysis.fillers.examples.map((word, i) => (
                        <span key={i} className="px-2 py-1 bg-analysis-voice/10 text-analysis-voice rounded text-sm">
                          "{word}"
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Volume Projection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Consistency</span>
                      <span className="text-sm font-medium">{mockData.voiceAnalysis.volume.score}%</span>
                    </div>
                    <Progress value={mockData.voiceAnalysis.volume.score} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {mockData.voiceAnalysis.volume.insight}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="body">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Posture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Body Positioning</span>
                      <span className="text-sm font-medium">{mockData.bodyLanguageAnalysis.posture.score}%</span>
                    </div>
                    <Progress value={mockData.bodyLanguageAnalysis.posture.score} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {mockData.bodyLanguageAnalysis.posture.insight}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gestures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Hand Movement</span>
                      <span className="text-sm font-medium">{mockData.bodyLanguageAnalysis.gestures.score}%</span>
                    </div>
                    <Progress value={mockData.bodyLanguageAnalysis.gestures.score} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {mockData.bodyLanguageAnalysis.gestures.insight}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eye Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Consistency</span>
                      <span className="text-sm font-medium">{mockData.bodyLanguageAnalysis.eyeContact.score}%</span>
                    </div>
                    <Progress value={mockData.bodyLanguageAnalysis.eyeContact.score} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {mockData.bodyLanguageAnalysis.eyeContact.insight}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Facial Expressions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Engagement</span>
                      <span className="text-sm font-medium">{mockData.bodyLanguageAnalysis.facialExpressions.score}%</span>
                    </div>
                    <Progress value={mockData.bodyLanguageAnalysis.facialExpressions.score} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {mockData.bodyLanguageAnalysis.facialExpressions.insight}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalysisResults;
