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
  Target
} from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
