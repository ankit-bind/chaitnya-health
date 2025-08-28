import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Bot,
  MessageCircle,
  Mic,
  Languages,
  Brain,
  Shield,
  Zap,
  Users,
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Send,
  Sparkles,
  Clock,
  CheckCircle
} from "lucide-react";

export default function AICompanion() {
  const [selectedAgent, setSelectedAgent] = useState("vani");
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const agents = [
    {
      id: "vani",
      name: "Vani",
      subtitle: "वाणी - मानसिक स्��ास्थ्य सहायक",
      description: "AI-powered voice companion for emotional support and mental wellness guidance in Hindi and English",
      features: ["Voice Conversations", "Emotional Support", "Crisis Intervention", "Multilingual"],
      color: "from-wisdom to-primary",
      icon: Volume2
    },
    {
      id: "saathi",
      name: "Saathi",
      subtitle: "साथी - Your Digital Friend",
      description: "Text-based AI companion for continuous support, daily check-ins, and personalized wellness plans",
      features: ["24/7 Chat Support", "Personalized Plans", "Mood Tracking", "Goal Setting"],
      color: "from-trust to-growth",
      icon: MessageCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-calm/15 to-healing/25">
      {/* Navigation Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-wisdom via-primary to-growth rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <a href="/" className="text-2xl font-bold bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                  Chaitnya Health
                </a>
                <p className="text-xs text-muted-foreground -mt-1">AI Companion Platform</p>
              </div>
            </div>
            
            <Button variant="ghost" asChild>
              <a href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
              🤖 AI-Powered Mental Health
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Your AI{" "}
              <span className="bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                Companions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced AI companions designed to provide personalized mental health support, available 24/7 in multiple languages.
            </p>
          </div>

          {/* AI Agents Selection */}
          <div className="grid lg:grid-cols-2 gap-8">
            {agents.map((agent) => {
              const IconComponent = agent.icon;
              return (
                <Card 
                  key={agent.id}
                  className={`border-2 bg-white/90 backdrop-blur-sm cursor-pointer transition-all hover:shadow-xl ${
                    selectedAgent === agent.id 
                      ? 'border-primary shadow-lg scale-[1.02]' 
                      : 'border-border/50 hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedAgent(agent.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className={`w-16 h-16 bg-gradient-to-br ${agent.color}/20 rounded-xl flex items-center justify-center`}>
                          <IconComponent className={`h-8 w-8 bg-gradient-to-r ${agent.color} bg-clip-text text-transparent`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{agent.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{agent.subtitle}</p>
                        </div>
                      </div>
                      {selectedAgent === agent.id && (
                        <Badge className="bg-primary/10 text-primary border-primary/30">
                          Selected
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-base mt-4">
                      {agent.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {agent.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-success" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        className={`w-full bg-gradient-to-r ${agent.color}`}
                        onClick={() => setChatOpen(true)}
                      >
                        Start Conversation with {agent.name}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Features Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">AI Companion Capabilities</h2>
              <p className="text-muted-foreground">Advanced features powered by cutting-edge AI technology</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-wisdom" />
                  </div>
                  <CardTitle>Emotional Intelligence</CardTitle>
                  <CardDescription>
                    Advanced emotion recognition and empathetic responses tailored to individual needs
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-trust/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-trust/20 to-growth/20 rounded-lg flex items-center justify-center mb-4">
                    <Languages className="h-6 w-6 text-trust" />
                  </div>
                  <CardTitle>Multilingual Support</CardTitle>
                  <CardDescription>
                    Fluent in Hindi, English, and other regional languages with cultural sensitivity
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-support/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-support/20 to-calm/20 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-support" />
                  </div>
                  <CardTitle>24/7 Availability</CardTitle>
                  <CardDescription>
                    Always available for support, crisis intervention, and emotional guidance
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-growth/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-growth/20 to-healing/20 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-growth" />
                  </div>
                  <CardTitle>Privacy First</CardTitle>
                  <CardDescription>
                    End-to-end encryption with complete anonymity and HIPAA compliance
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-wisdom/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-wisdom" />
                  </div>
                  <CardTitle>Instant Response</CardTitle>
                  <CardDescription>
                    Real-time processing with immediate support and intervention capabilities
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-calm/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-calm/20 to-healing/20 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-calm" />
                  </div>
                  <CardTitle>Personalized Care</CardTitle>
                  <CardDescription>
                    Adaptive learning to provide increasingly personalized mental health support
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">How AI Companions Work</h2>
              <p className="text-muted-foreground">Simple steps to get started with your AI mental health companion</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-wisdom to-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold">Choose Your Companion</h3>
                <p className="text-muted-foreground">Select Vani for voice support or Saathi for text-based conversations</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-trust to-growth rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold">Start Conversation</h3>
                <p className="text-muted-foreground">Begin your mental health journey with personalized AI support</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-support to-calm rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold">Continuous Support</h3>
                <p className="text-muted-foreground">Receive ongoing guidance, check-ins, and personalized wellness plans</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-wisdom/10 to-primary/10 rounded-2xl p-8 text-center border border-wisdom/30">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Meet Your AI Companion?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the future of mental health support with our AI companions. Available 24/7, multilingual, and designed with your privacy in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-wisdom to-primary" size="lg">
                Start with Vani (Voice)
              </Button>
              <Button variant="outline" size="lg">
                Try Saathi (Text)
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Chat Modal - placeholder */}
      {chatOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Chat with {selectedAgent === "vani" ? "Vani" : "Saathi"}</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setChatOpen(false)}>
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm">
                    {selectedAgent === "vani" 
                      ? "नमस्ते! मैं वाणी हूं। मैं आपकी मानसिक स्वास्थ्य में कैसे मदद कर सकती हूं?"
                      : "Hi! I'm Saathi, your digital companion. How can I support your mental wellness today?"
                    }
                  </p>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
