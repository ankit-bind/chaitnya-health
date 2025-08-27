import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Brain,
  Users,
  MessageCircle,
  Calendar,
  Shield,
  ChevronRight,
  Menu,
  X,
  Building2,
  GraduationCap,
  BarChart3,
  Languages,
  Volume2,
  Stethoscope,
  Globe,
  TrendingUp,
  Award,
  Target,
  Mic,
  MicOff,
  Send,
  Bot,
  Waveform,
  Play,
  Pause,
  Type,
  VolumeX,
  Phone,
  Clock
} from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVaniOpen, setIsVaniOpen] = useState(false);
  const [isTextAgentOpen, setIsTextAgentOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVaniSpeaking, setIsVaniSpeaking] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [transcript, setTranscript] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "नमस्ते! मैं वाणी हूं। मैं आपकी मानसिक स्वास्थ्य में कैसे मदद कर सकती हूं?" }
  ]);
  const [vaniMessages, setVaniMessages] = useState([
    { role: "assistant", content: "Hi! I'm Vani, your voice companion. You can talk to me about anything that's on your mind." }
  ]);

  // Speech Recognition Setup
  const [recognition, setRecognition] = useState(null);
  const [speechSynthesis, setSpeechSynthesis] = useState(null);

  // Initialize Speech APIs
  const initializeSpeechAPIs = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();

      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'hi-IN'; // Hindi by default, can switch to en-US

      recognitionInstance.onstart = () => {
        setIsRecording(true);
        setTranscript("");
      };

      recognitionInstance.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            finalTranscript += result[0].transcript;
          } else {
            interimTranscript += result[0].transcript;
          }
        }

        setTranscript(finalTranscript + interimTranscript);

        if (finalTranscript) {
          handleVoiceInput(finalTranscript);
        }
      };

      recognitionInstance.onend = () => {
        setIsRecording(false);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
      };

      setRecognition(recognitionInstance);
    }

    // Initialize Speech Synthesis
    if ('speechSynthesis' in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }
  };

  // Handle voice input and generate AI response
  const handleVoiceInput = async (spokenText) => {
    // Add user message
    const userMessage = { role: "user", content: spokenText };
    setVaniMessages(prev => [...prev, userMessage]);

    // Generate AI response (simulated - replace with actual AI API)
    const aiResponse = generateVaniResponse(spokenText);
    const assistantMessage = { role: "assistant", content: aiResponse };

    setVaniMessages(prev => [...prev, assistantMessage]);

    // Speak the response
    speakText(aiResponse);
  };

  // Generate Vani's response (replace with actual AI integration)
  const generateVaniResponse = (userInput) => {
    const responses = [
      "मैं समझ सकती हूं कि यह कठिन समय है। आपकी भावनाएं बिल्कुल valid हैं। मैं यहां आपकी सुनने के लिए हूं।",
      "That sounds really challenging. It's completely normal to feel overwhelmed sometimes. Would you like to talk about what's been weighing on your mind?",
      "आपका mental health बहुत important है। क्या आप मुझे बता सकते हैं कि आप कैसा महसूस कर रहे हैं?",
      "I hear you, and I want you to know that your feelings are valid. Taking care of your mental health is a brave step. How can I support you today?",
      "चलिए एक गहरी सांस लेते हैं। आप safe हैं और मैं आपके साथ हूं। क्या आप चाहेंगे कि हम कुछ relaxation techniques try करें?"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  // Text-to-Speech function
  const speakText = (text) => {
    if (speechSynthesis && text) {
      // Stop any ongoing speech
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      // Try to find Hindi voice, fallback to English
      const voices = speechSynthesis.getVoices();
      const hindiVoice = voices.find(voice => voice.lang.includes('hi')) ||
                        voices.find(voice => voice.lang.includes('en'));

      if (hindiVoice) {
        utterance.voice = hindiVoice;
      }

      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;

      utterance.onstart = () => setIsVaniSpeaking(true);
      utterance.onend = () => setIsVaniSpeaking(false);
      utterance.onerror = () => setIsVaniSpeaking(false);

      setIsVaniSpeaking(true);
      speechSynthesis.speak(utterance);
    }
  };

  // Start/Stop voice recording
  const toggleVoiceRecording = () => {
    if (!recognition) {
      initializeSpeechAPIs();
      return;
    }

    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  // Stop Vani from speaking
  const stopVaniSpeaking = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
      setIsVaniSpeaking(false);
    }
  };

  const institutionalFeatures = [
    {
      icon: <BarChart3 className="h-8 w-8 text-wisdom" />,
      title: "Institutional Dashboard",
      description: "Real-time anonymized wellness analytics for data-driven policy making. Monitor campus mental health trends and intervention effectiveness."
    },
    {
      icon: <Languages className="h-8 w-8 text-trust" />,
      title: "Multi-Lingual AI Companion",
      description: "24/7 empathetic AI support in Hindi, English, and regional languages. Culturally sensitive conversations for every Indian student."
    },
    {
      icon: <Volume2 className="h-8 w-8 text-healing" />,
      title: "Audio-Guided Navigation",
      description: "Slow-paced voice guidance in native languages for distressed minds. Every feature designed for accessibility and cultural comfort."
    },
    {
      icon: <Building2 className="h-8 w-8 text-support" />,
      title: "B2B SaaS Platform",
      description: "Complete institutional wellness solution with seamless integration into college and corporate wellness policies."
    },
    {
      icon: <Users className="h-8 w-8 text-growth" />,
      title: "NGO Network Integration",
      description: "Connected to grassroots NGO network 'Chaitnya Mitra' for comprehensive reach across rural and urban India."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Privacy-First Design",
      description: "Complete anonymity for AI interactions, encrypted therapy sessions, and zero data selling promise."
    }
  ];

  const metrics = [
    { label: "Target Institutions", value: "200+", sublabel: "By Year 3" },
    { label: "Market Size", value: "₹800 Cr", sublabel: "SOM Target" },
    { label: "Helpfulness Score", value: "80%+", sublabel: "Clinical Target" },
    { label: "Cost Reduction", value: "₹1500→₹300", sublabel: "Per Session" }
  ];

  const competitiveAdvantages = [
    {
      title: "First Institutional Focus",
      description: "B2B SaaS model targeting colleges and corporates, not just individual consumers"
    },
    {
      title: "Radical Empathy",
      description: "Audio-guided navigation and cultural sensitivity designed for distressed minds"
    },
    {
      title: "Hybrid Ecosystem",
      description: "Combining sophisticated tech platform with grassroots NGO network reach"
    },
    {
      title: "Prevention-First",
      description: "Proactive wellness engine using PHQ-9, GAD-7 for early detection"
    }
  ];

  const institutionTypes = [
    {
      icon: <GraduationCap className="h-12 w-12 text-wisdom" />,
      title: "Educational Institutions",
      description: "Colleges & Universities",
      pricing: "₹3L ARR",
      features: ["Student wellness tracking", "Campus-wide mental health analytics", "Counseling center integration"]
    },
    {
      icon: <Building2 className="h-12 w-12 text-trust" />,
      title: "Corporate Partners", 
      description: "Tech & Service Companies",
      pricing: "₹5L ARR",
      features: ["Employee burnout prevention", "Productivity analytics", "HR wellness integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-calm/5 to-healing/10">
      {/* Navigation */}
      <nav className="relative bg-white/90 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-wisdom via-primary to-growth rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                    Chaitnya Health
                  </span>
                  <p className="text-xs text-muted-foreground -mt-1">India's First Step to Mental Wellness</p>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#solution" className="text-foreground/80 hover:text-foreground transition-colors">Platform</a>
              <a href="/psychologist" className="text-foreground/80 hover:text-foreground transition-colors">Therapists</a>
              <a href="/ngo" className="text-foreground/80 hover:text-foreground transition-colors">NGO Partners</a>
              <a href="#institutions" className="text-foreground/80 hover:text-foreground transition-colors">For Institutions</a>
              <Button variant="outline" size="sm">Institution Login</Button>
              <Button size="sm" className="bg-gradient-to-r from-wisdom to-primary">Book Demo</Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-border/50 shadow-lg">
              <div className="px-4 py-4 space-y-4">
                <a href="#solution" className="block text-foreground/80 hover:text-foreground transition-colors">Platform</a>
                <a href="/psychologist" className="block text-foreground/80 hover:text-foreground transition-colors">Therapists</a>
                <a href="/ngo" className="block text-foreground/80 hover:text-foreground transition-colors">NGO Partners</a>
                <a href="#institutions" className="block text-foreground/80 hover:text-foreground transition-colors">For Institutions</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm">Institution Login</Button>
                  <Button size="sm" className="bg-gradient-to-r from-wisdom to-primary">Book Demo</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-wisdom/10 text-wisdom-foreground border-wisdom/30 text-base px-4 py-2">
                  🇮🇳 Building a Mentally Resilient India
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  India's First Step to{" "}
                  <span className="bg-gradient-to-r from-wisdom via-primary to-growth bg-clip-text text-transparent">
                    Mental Wellness
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A trusted companion for every Indian's mental well-being. 
                  Empowering institutions with data-driven wellness solutions that bridge the prevention gap.
                </p>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm font-medium">
                    <strong>The Crisis:</strong> 80% of college counseling centers are under-utilized due to stigma. 
                    ₹1500+ per therapy session creates access barriers. $150B annual productivity loss from burnout.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-wisdom to-primary hover:opacity-90 transition-opacity">
                  Start Pilot Program
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-wisdom/30 text-wisdom hover:bg-wisdom/5">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Demo Dashboard
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-wisdom">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                    <div className="text-xs text-muted-foreground">{metric.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-wisdom to-trust rounded-full flex items-center justify-center">
                      <Languages className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Institutional Wellness Dashboard</h3>
                      <p className="text-sm text-muted-foreground">Real-time campus mental health analytics</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-healing/10 rounded-lg p-4 border border-healing/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-healing-foreground">Active Students</span>
                        <span className="text-sm text-growth font-semibold">2,847</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-healing-foreground">Wellness Score</span>
                        <span className="text-sm text-growth font-semibold">78% ↑</span>
                      </div>
                      <div className="h-2 bg-healing/20 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-growth to-healing rounded-full"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" size="sm" className="bg-calm/10 hover:bg-calm/20 border-calm/30 text-xs">
                        🎧 Hindi Support
                      </Button>
                      <Button variant="outline" size="sm" className="bg-trust/10 hover:bg-trust/20 border-trust/30 text-xs">
                        📊 Analytics
                      </Button>
                      <Button variant="outline" size="sm" className="bg-wisdom/10 hover:bg-wisdom/20 border-wisdom/30 text-xs">
                        🏥 NGO Network
                      </Button>
                      <Button variant="outline" size="sm" className="bg-healing/10 hover:bg-healing/20 border-healing/30 text-xs">
                        🔒 Anonymous
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Campus wellness improvement</span>
                      <span className="text-growth font-medium">+34% this semester</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              🤖 AI-Powered Mental Health Support
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Meet Your AI Companions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get instant support through voice or text with our empathetic AI agents, available 24/7 in multiple languages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vani - Voice Agent */}
            <Card className="border-2 border-wisdom/20 bg-gradient-to-br from-wisdom/5 to-primary/5 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-wisdom to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Volume2 className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">🎙️ Vani - Voice Agent</CardTitle>
                <CardDescription className="text-base">
                  Talk naturally with our empathetic AI companion. Speak in Hindi, English, or your preferred language.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Languages className="h-4 w-4 text-wisdom" />
                  <span>Hindi • English • Regional Languages</span>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-wisdom to-primary"
                  onClick={() => {
                    setIsVaniOpen(true);
                    setTimeout(initializeSpeechAPIs, 500);
                  }}
                >
                  <Mic className="mr-2 h-4 w-4" />
                  Start Voice Chat with Vani
                </Button>
              </CardContent>
            </Card>

            {/* Text Agent */}
            <Card className="border-2 border-trust/20 bg-gradient-to-br from-trust/5 to-growth/5 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-trust to-growth rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">💬 Saathi - Text Agent</CardTitle>
                <CardDescription className="text-base">
                  Chat instantly with our AI counselor. Type your thoughts and get immediate, thoughtful responses.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Brain className="h-4 w-4 text-trust" />
                  <span>Instant Response • Available 24/7</span>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-trust to-growth"
                  onClick={() => setIsTextAgentOpen(true)}
                >
                  <Type className="mr-2 h-4 w-4" />
                  Start Text Chat with Saathi
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Access Features */}
          <div className="mt-12 bg-gradient-to-r from-calm/10 to-healing/10 rounded-2xl p-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why Choose AI Support?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-wisdom" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">24/7 Availability</p>
                    <p className="text-sm text-muted-foreground">Always here when you need support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-trust/20 to-growth/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-trust" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Complete Privacy</p>
                    <p className="text-sm text-muted-foreground">Anonymous and confidential</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-healing/20 to-growth/20 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-healing" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Culturally Sensitive</p>
                    <p className="text-sm text-muted-foreground">Understands Indian context</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vani Voice Agent Modal */}
      {isVaniOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-wisdom to-primary rounded-full flex items-center justify-center">
                    <Volume2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">🎙️ Vani</h3>
                    <p className="text-muted-foreground">Your Voice Companion</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsVaniOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Voice Status */}
                <div className="text-center space-y-2">
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                    isRecording ? 'bg-red-100 text-red-700' :
                    isVaniSpeaking ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {isRecording ? (
                      <>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Listening...</span>
                      </>
                    ) : isVaniSpeaking ? (
                      <>
                        <Volume2 className="h-4 w-4" />
                        <span className="text-sm font-medium">Vani is speaking...</span>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">Ready to listen</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Live Transcript */}
                {transcript && (
                  <div className="bg-gray-50 border rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">You're saying:</p>
                    <p className="text-sm font-medium">{transcript}</p>
                  </div>
                )}

                {/* Voice Messages */}
                <div className="max-h-64 overflow-y-auto space-y-4 bg-gradient-to-br from-calm/10 to-healing/10 rounded-2xl p-4">
                  {vaniMessages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs p-3 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-wisdom text-white'
                          : 'bg-white border shadow-sm'
                      }`}>
                        <div className="flex items-start space-x-2">
                          {message.role === 'user' ? (
                            <Mic className="h-3 w-3 mt-1 flex-shrink-0" />
                          ) : (
                            <Volume2 className="h-3 w-3 mt-1 flex-shrink-0 text-wisdom" />
                          )}
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Voice Controls */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center items-center space-x-4">
                    <Button
                      size="lg"
                      className={`w-20 h-20 rounded-full ${
                        isRecording
                          ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                          : 'bg-gradient-to-r from-wisdom to-primary'
                      }`}
                      onClick={toggleVoiceRecording}
                    >
                      {isRecording ? <MicOff className="h-8 w-8 text-white" /> : <Mic className="h-8 w-8 text-white" />}
                    </Button>

                    {isVaniSpeaking && (
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-16 h-16 rounded-full border-red-200 hover:bg-red-50"
                        onClick={stopVaniSpeaking}
                      >
                        <VolumeX className="h-6 w-6 text-red-600" />
                      </Button>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {isRecording ? 'Listening... Tap to stop' :
                     isVaniSpeaking ? 'Vani is responding... Tap ❌ to stop' :
                     'Tap to start real-time voice chat'}
                  </p>

                  {/* Language Toggle */}
                  <div className="flex justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (recognition) {
                          recognition.lang = 'hi-IN';
                        }
                      }}
                    >
                      🇮🇳 Hindi
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (recognition) {
                          recognition.lang = 'en-US';
                        }
                      }}
                    >
                      🇺🇸 English
                    </Button>
                  </div>

                  {/* Voice Visualization */}
                  <div className="flex items-center justify-center space-x-1 bg-wisdom/5 rounded-lg p-4">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-wisdom rounded-full transition-all duration-300 ${
                          isRecording || isVaniSpeaking ? 'h-6 animate-pulse' : 'h-2'
                        }`}
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          height: isRecording || isVaniSpeaking ? `${Math.random() * 20 + 10}px` : '8px'
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-center text-xs text-muted-foreground">
                  Real-time voice conversation • Hindi & English • Browser speech recognition required
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Text Agent Modal */}
      {isTextAgentOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-trust to-growth rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">💬 Saathi</h3>
                    <p className="text-muted-foreground">Your Text Companion</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsTextAgentOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Chat Messages */}
                <div className="max-h-64 overflow-y-auto space-y-4 bg-gradient-to-br from-trust/10 to-growth/10 rounded-2xl p-4">
                  {chatMessages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs p-3 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-trust text-white'
                          : 'bg-white border shadow-sm'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Text Input */}
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Type your message... (Hindi/English both supported)"
                    value={textMessage}
                    onChange={(e) => setTextMessage(e.target.value)}
                    className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-trust"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && textMessage.trim()) {
                        setChatMessages(prev => [...prev,
                          { role: 'user', content: textMessage },
                          { role: 'assistant', content: 'मैं सम�� सकता हूं कि यह कठिन समय है। आपकी भावनाएं बिल्कुल valid हैं। क्या आप मुझे बताना चाहेंगे कि आप कैसा महसूस कर रहे हैं?' }
                        ]);
                        setTextMessage('');
                      }
                    }}
                  />
                  <Button
                    className="bg-gradient-to-r from-trust to-growth"
                    onClick={() => {
                      if (textMessage.trim()) {
                        setChatMessages(prev => [...prev,
                          { role: 'user', content: textMessage },
                          { role: 'assistant', content: 'Thank you for sharing that with me. I can sense you\'re going through something difficult. Remember, it\'s okay to not be okay sometimes. What\'s one small thing that usually brings you comfort?' }
                        ]);
                        setTextMessage('');
                      }
                    }}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                <div className="text-center text-xs text-muted-foreground">
                  Saathi understands context and cultural nuances • Available in Hindi & English
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-wisdom to-primary shadow-2xl hover:shadow-3xl transition-all duration-300"
          onClick={() => {
            setIsVaniOpen(true);
            setTimeout(initializeSpeechAPIs, 500);
          }}
        >
          <Mic className="h-6 w-6 text-white" />
        </Button>
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-trust to-growth shadow-2xl hover:shadow-3xl transition-all duration-300"
          onClick={() => setIsTextAgentOpen(true)}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Solution Features */}
      <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Radically Empathetic & Intelligent Ecosystem
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Designed for prevention, support, and institutional action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform bridges the prevention gap with culturally-sensitive technology 
              and evidence-based mental health practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutionalFeatures.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-background to-secondary rounded-2xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Institutions */}
      <section id="institutions" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-trust/10 text-trust-foreground border-trust/20">
              B2B SaaS Powerhouse
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Built for institutional wellness
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic partnerships with colleges and corporates for data-driven policy making and scalable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {institutionTypes.map((institution, index) => (
              <Card key={index} className="border-border/50 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-xl">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-wisdom/10 to-trust/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    {institution.icon}
                  </div>
                  <CardTitle className="text-2xl">{institution.title}</CardTitle>
                  <CardDescription className="text-lg">{institution.description}</CardDescription>
                  <div className="text-3xl font-bold text-wisdom mt-4">{institution.pricing}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {institution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-growth rounded-full"></div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6 bg-gradient-to-r from-wisdom to-primary">
                    Request Pilot Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section id="competitive" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-growth/10 text-growth-foreground border-growth/20">
              Our Unfair Advantage
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Building an unbreakable moat
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unique combination of technology, empathy, and ecosystem thinking that creates strong defensibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-wisdom/5 to-primary/5 rounded-3xl p-8 border border-wisdom/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Market Leadership Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wisdom">₹10 Cr</div>
                  <div className="text-sm text-muted-foreground">ARR Target Year 3</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-growth">500K</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-trust">200</div>
                  <div className="text-sm text-muted-foreground">Partner Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-support">5%</div>
                  <div className="text-sm text-muted-foreground">Market Share (SOM)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-wisdom/10 via-primary/10 to-growth/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Join us in building a mentally resilient India
          </h2>
          <p className="text-xl text-muted-foreground">
            Partner with Chaitnya Health to transform mental wellness across Indian institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-wisdom to-primary hover:opacity-90 transition-opacity">
              <Building2 className="mr-2 h-5 w-5" />
              Start Institutional Pilot
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-wisdom/30">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Demo Call
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-growth" />
              <span>Zero Data Selling Promise</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-trust" />
              <span>Multi-Lingual Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-wisdom" />
              <span>80%+ Helpfulness Score</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-wisdom via-primary to-growth rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                    Chaitnya Health
                  </span>
                  <p className="text-xs text-muted-foreground -mt-1">India's First Step to Mental Wellness</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md">
                Building a future where every Indian, regardless of location or income, 
                has a trusted companion for their mental well-being.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>Contact: itz.ankitbind01@gmail.com</p>
                <p>Seeking: ₹1.5 Cr Seed Round • 18-month runway</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Platform</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Institutional Dashboard</p>
                <p>AI Companion</p>
                <p>Therapist Network</p>
                <p>NGO Integration</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">For Institutions</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Pilot Programs</p>
                <p>B2B SaaS Pricing</p>
                <p>Implementation</p>
                <p>Support & Training</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Chaitnya Health. All rights reserved. | Privacy-First | Zero Data Selling | Radically Empathetic
          </div>
        </div>
      </footer>
    </div>
  );
}
