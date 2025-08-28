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
  Clock,
  Star
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
    <div className="min-h-screen bg-gradient-to-br from-background via-calm/15 to-healing/25">
      {/* Navigation */}
      <nav className="relative bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
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

      {/* Hero Section with Integrated AI Agents */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-wisdom/10 text-wisdom-foreground border-wisdom/30 text-base px-6 py-3">
              🇮🇳 India's First AI-Powered Mental Wellness Platform
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Meet Your
              <span className="bg-gradient-to-r from-wisdom via-primary to-growth bg-clip-text text-transparent block sm:inline">
                {" "}AI Companions
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Start your mental wellness journey with Vani and Saathi - your personal AI companions
              available 24/7 in Hindi, English, and regional languages.
            </p>
          </div>
        </div>
      </section>

      {/* AI Agents - Primary Entry Gateway */}
      <section className="relative -mt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vani - Voice Agent */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-wisdom via-primary to-growth rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative border-2 border-wisdom/40 bg-gradient-to-br from-white to-wisdom/15 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-wisdom to-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-wisdom/50 to-primary/50 animate-pulse"></div>
                      <Volume2 className="h-16 w-16 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                      LIVE
                    </div>
                  </div>
                  <CardTitle className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                    🎙️ Vani
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground font-medium">
                    Your Real-Time Voice Companion
                  </CardDescription>
                  <p className="text-base text-foreground/80 mt-4 leading-relaxed">
                    Have natural conversations with Vani in Hindi, English, or your preferred language.
                    She understands emotions and provides instant mental health support.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 px-8 pb-8">
                  <div className="bg-gradient-to-r from-wisdom/10 to-primary/10 rounded-2xl p-6">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-green-700">Real-time Speech</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Languages className="h-4 w-4 text-wisdom" />
                        <span className="text-sm font-medium">15+ Languages</span>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-2 mb-4">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 bg-gradient-to-t from-wisdom to-primary rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 30 + 20}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full h-16 text-lg font-bold bg-gradient-to-r from-wisdom to-primary hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      setIsVaniOpen(true);
                      setTimeout(initializeSpeechAPIs, 500);
                    }}
                  >
                    <Mic className="mr-3 h-6 w-6" />
                    Start Talking with Vani
                    <div className="ml-2 flex space-x-1">
                      <div className="w-1 h-4 bg-white/60 rounded animate-pulse"></div>
                      <div className="w-1 h-6 bg-white/80 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 h-4 bg-white/60 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    "नमस्ते! मैं वाणी हूं। आप कैसा महसूस कर रहे हैं?"
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Saathi - Text Agent */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-trust via-growth to-healing rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative border-2 border-trust/40 bg-gradient-to-br from-white to-trust/15 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-trust to-growth rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-trust/50 to-growth/50 animate-pulse"></div>
                      <MessageCircle className="h-16 w-16 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                      CHAT
                    </div>
                  </div>
                  <CardTitle className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-trust to-growth bg-clip-text text-transparent">
                    💬 Saathi
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground font-medium">
                    Your Instant Text Companion
                  </CardDescription>
                  <p className="text-base text-foreground/80 mt-4 leading-relaxed">
                    Chat instantly with Saathi for immediate mental health support.
                    Type in Hindi or English and get thoughtful, culturally sensitive responses.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 px-8 pb-8">
                  <div className="bg-gradient-to-r from-trust/10 to-growth/10 rounded-2xl p-6">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-blue-700">Instant Response</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Brain className="h-4 w-4 text-trust" />
                        <span className="text-sm font-medium">AI Counselor</span>
                      </div>
                    </div>
                    <div className="bg-white/60 rounded-lg p-3 border">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                        <div className="w-2 h-2 bg-trust rounded-full"></div>
                        <span>Saathi is typing...</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-trust rounded-full animate-bounce"></div>
                          <div className="w-1 h-1 bg-trust rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-1 h-1 bg-trust rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                      <p className="text-sm">मैं आपकी मदद करने के लिए यहाँ हूँ...</p>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full h-16 text-lg font-bold bg-gradient-to-r from-trust to-growth hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => setIsTextAgentOpen(true)}
                  >
                    <Type className="mr-3 h-6 w-6" />
                    Start Chatting with Saathi
                    <Send className="ml-3 h-5 w-5" />
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    "I understand your feelings. Let's talk about it."
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Stats & Trust Indicators */}
          <div className="mt-16 bg-gradient-to-r from-calm/5 via-healing/5 to-growth/5 rounded-3xl p-8 border border-wisdom/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Trusted by Thousands Across India</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wisdom">50,000+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-trust">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-growth">15+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-healing">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-growth" />
                <span>Complete Privacy & Anonymity</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-healing" />
                <span>Culturally Sensitive AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-wisdom" />
                <span>Instant Support Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-trust" />
                <span>Clinically Validated</span>
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
                          { role: 'assistant', content: 'मैं सम�� सकता हूं कि यह कठिन समय है। आपक��� भावनाएं बिल्कुल valid हैं। क्या आप मुझे बताना चाहेंगे कि आप कैसा महसूस कर रहे हैं?' }
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

      {/* Floating Quick Access */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        <div className="relative group">
          <Button
            size="lg"
            className="w-20 h-20 rounded-full bg-gradient-to-r from-wisdom to-primary shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
            onClick={() => {
              setIsVaniOpen(true);
              setTimeout(initializeSpeechAPIs, 500);
            }}
          >
            <Mic className="h-8 w-8 text-white" />
          </Button>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
            🎙️
          </div>
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Talk to Vani
          </div>
        </div>
        <div className="relative group">
          <Button
            size="lg"
            className="w-20 h-20 rounded-full bg-gradient-to-r from-trust to-growth shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsTextAgentOpen(true)}
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </Button>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
            💬
          </div>
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with Saathi
          </div>
        </div>
      </div>

      {/* How AI Agents Work */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-calm/5 to-healing/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              🤖 Experience the Future of Mental Health Support
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How Your AI Companions Support You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vani and Saathi use advanced AI to provide culturally-sensitive, personalized mental health support
              that understands your unique needs and cultural context.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Brain className="h-10 w-10 text-wisdom" />
              </div>
              <h3 className="text-xl font-semibold">Understand Emotions</h3>
              <p className="text-muted-foreground">
                Our AI recognizes emotional cues in your voice and text, providing empathetic responses tailored to your current state.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-trust/20 to-growth/20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-10 w-10 text-trust" />
              </div>
              <h3 className="text-xl font-semibold">Cultural Sensitivity</h3>
              <p className="text-muted-foreground">
                Trained on Indian cultural contexts, family dynamics, and social pressures to provide relevant, respectful guidance.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-growth/20 to-healing/20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-10 w-10 text-growth" />
              </div>
              <h3 className="text-xl font-semibold">Complete Privacy</h3>
              <p className="text-muted-foreground">
                All conversations are anonymous and encrypted. No personal data is stored or shared with anyone.
              </p>
            </div>
          </div>

          {/* Business Value Proposition */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 mb-16">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-red-800">The Mental Health Crisis in India</h3>
              <div className="grid md:grid-cols-3 gap-6 text-red-800">
                <div className="text-center">
                  <div className="text-3xl font-bold">80%</div>
                  <div className="text-sm">College counseling centers under-utilized due to stigma</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">₹1500+</div>
                  <div className="text-sm">Per therapy session creates access barriers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">$150B</div>
                  <div className="text-sm">Annual productivity loss from burnout</div>
                </div>
              </div>
            </div>
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

          <div className="mt-16 bg-gradient-to-r from-wisdom/15 to-primary/15 rounded-3xl p-8 border border-wisdom/40">
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

      {/* Trending Consultants Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-wisdom/10 text-wisdom-foreground border-wisdom/30">
              🔥 Popular This Week
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Trending Mental Health Consultants
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with the most trusted and popular mental health professionals across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Trending Professional 1 */}
            <Card className="border-2 border-wisdom/40 bg-gradient-to-br from-wisdom/15 to-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-3">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-wisdom to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">👩‍⚕️</span>
                  </div>
                  <div className="absolute -top-1 -right-6 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    #1
                  </div>
                </div>
                <CardTitle className="text-lg">Dr. Meera Sharma</CardTitle>
                <CardDescription className="text-sm">Senior Counselor</CardDescription>
                <div className="flex justify-center items-center space-x-2 mt-2">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.9</span>
                  <Badge className="bg-green-100 text-green-800 text-xs">FREE</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center space-y-2">
                  <p className="text-xs text-muted-foreground">156 sessions this week</p>
                  <div className="flex justify-center space-x-1">
                    <Badge variant="outline" className="text-xs">Hindi</Badge>
                    <Badge variant="outline" className="text-xs">English</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trending Professional 2 */}
            <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-3">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-trust rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">👩‍⚕️</span>
                  </div>
                  <div className="absolute -top-1 -right-6 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    #2
                  </div>
                </div>
                <CardTitle className="text-lg">Dr. Kavya Nair</CardTitle>
                <CardDescription className="text-sm">Licensed Therapist</CardDescription>
                <div className="flex justify-center items-center space-x-2 mt-2">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.9</span>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">₹350</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center space-y-2">
                  <p className="text-xs text-muted-foreground">89 sessions this week</p>
                  <div className="flex justify-center space-x-1">
                    <Badge variant="outline" className="text-xs">Hindi</Badge>
                    <Badge variant="outline" className="text-xs">Malayalam</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trending Professional 3 */}
            <Card className="border border-trust/20 bg-gradient-to-br from-trust/5 to-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-3">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-trust to-growth rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">👨‍⚕️</span>
                  </div>
                  <div className="absolute -top-1 -right-6 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    #3
                  </div>
                </div>
                <CardTitle className="text-lg">Rahul Patil</CardTitle>
                <CardDescription className="text-sm">NGO Counselor</CardDescription>
                <div className="flex justify-center items-center space-x-2 mt-2">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.8</span>
                  <Badge className="bg-green-100 text-green-800 text-xs">FREE</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center space-y-2">
                  <p className="text-xs text-muted-foreground">142 sessions this week</p>
                  <div className="flex justify-center space-x-1">
                    <Badge variant="outline" className="text-xs">Marathi</Badge>
                    <Badge variant="outline" className="text-xs">Hindi</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trending Professional 4 */}
            <Card className="border border-growth/20 bg-gradient-to-br from-growth/5 to-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-3">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-growth to-healing rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">👨‍⚕️</span>
                  </div>
                  <div className="absolute -top-1 -right-6 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    #4
                  </div>
                </div>
                <CardTitle className="text-lg">Dr. Arjun Singh</CardTitle>
                <CardDescription className="text-sm">Psychiatrist</CardDescription>
                <div className="flex justify-center items-center space-x-2 mt-2">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.8</span>
                  <Badge className="bg-purple-100 text-purple-800 text-xs">₹450</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center space-y-2">
                  <p className="text-xs text-muted-foreground">76 sessions this week</p>
                  <div className="flex justify-center space-x-1">
                    <Badge variant="outline" className="text-xs">Hindi</Badge>
                    <Badge variant="outline" className="text-xs">Punjabi</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              See what makes these consultants so popular with our users
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-wisdom to-primary">
                <a href="/psychologist">
                  View All Therapists
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/ngo">
                  Explore Free Consultants
                </a>
              </Button>
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
