import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Brain, 
  Users, 
  Calendar, 
  Shield, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  MapPin,
  Clock,
  Languages,
  Video,
  Phone,
  MessageCircle,
  Award,
  CheckCircle,
  UserCheck,
  GraduationCap
} from "lucide-react";

export default function Psychologist() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const therapists = [
    {
      name: "Dr. Priya Sharma",
      qualification: "M.Phil Clinical Psychology, Ph.D.",
      experience: "12 years",
      languages: ["Hindi", "English", "Punjabi"],
      specialization: ["Anxiety", "Depression", "Academic Stress"],
      rating: 4.9,
      location: "Delhi NCR",
      sessions: 2500,
      availability: "Available Today",
      price: "₹300/session",
      modes: ["Video", "Audio", "In-Person"],
      image: "👩‍⚕️"
    },
    {
      name: "Dr. Rajesh Kumar",
      qualification: "M.D. Psychiatry, DPM",
      experience: "15 years",
      languages: ["Hindi", "English", "Bengali"],
      specialization: ["ADHD", "Bipolar Disorder", "Career Counseling"],
      rating: 4.8,
      location: "Mumbai",
      sessions: 3200,
      availability: "Next Slot: Tomorrow 2PM",
      price: "₹400/session",
      modes: ["Video", "In-Person"],
      image: "👨‍⚕️"
    },
    {
      name: "Dr. Anitha Menon",
      qualification: "M.A. Counseling Psychology",
      experience: "8 years",
      languages: ["English", "Tamil", "Malayalam"],
      specialization: ["Relationship Issues", "Work Stress", "Self-Esteem"],
      rating: 4.7,
      location: "Bangalore",
      sessions: 1800,
      availability: "Available Now",
      price: "₹250/session",
      modes: ["Video", "Audio", "Chat"],
      image: "👩‍⚕️"
    },
    {
      name: "Dr. Vikram Singh",
      qualification: "Ph.D. Clinical Psychology",
      experience: "10 years",
      languages: ["Hindi", "English", "Marathi"],
      specialization: ["Trauma", "PTSD", "Addiction Recovery"],
      rating: 4.9,
      location: "Pune",
      sessions: 2100,
      availability: "Available Today",
      price: "₹350/session",
      modes: ["Video", "In-Person"],
      image: "👨‍⚕️"
    }
  ];

  const filters = [
    { id: "all", label: "All Therapists" },
    { id: "available", label: "Available Now" },
    { id: "video", label: "Video Sessions" },
    { id: "hindi", label: "Hindi Speaking" },
    { id: "budget", label: "Under ₹300" }
  ];

  const filteredTherapists = therapists.filter(therapist => {
    switch(selectedFilter) {
      case "available":
        return therapist.availability.includes("Available");
      case "video":
        return therapist.modes.includes("Video");
      case "hindi":
        return therapist.languages.includes("Hindi");
      case "budget":
        return parseInt(therapist.price.replace(/[^\d]/g, "")) <= 300;
      default:
        return true;
    }
  });

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
                  <a href="/" className="text-2xl font-bold bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                    Chaitnya Health
                  </a>
                  <p className="text-xs text-muted-foreground -mt-1">India's First Step to Mental Wellness</p>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</a>
              <a href="/psychologist" className="text-primary font-medium">Therapists</a>
              <a href="/ngo" className="text-foreground/80 hover:text-foreground transition-colors">NGO Partners</a>
              <Button variant="outline" size="sm">Institution Login</Button>
              <Button size="sm" className="bg-gradient-to-r from-wisdom to-primary">Book Session</Button>
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
                <a href="/" className="block text-foreground/80 hover:text-foreground transition-colors">Home</a>
                <a href="/psychologist" className="block text-primary font-medium">Therapists</a>
                <a href="/ngo" className="block text-foreground/80 hover:text-foreground transition-colors">NGO Partners</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm">Institution Login</Button>
                  <Button size="sm" className="bg-gradient-to-r from-wisdom to-primary">Book Session</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-wisdom/10 text-wisdom-foreground border-wisdom/30 text-base px-4 py-2">
              🧠 Verified Mental Health Professionals
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Connect with{" "}
              <span className="bg-gradient-to-r from-wisdom via-primary to-growth bg-clip-text text-transparent">
                Licensed Therapists
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access India's largest network of verified psychologists and counselors. 
              Quality mental healthcare in your language, at affordable prices.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-growth" />
                <span>All Therapists Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Languages className="h-4 w-4 text-trust" />
                <span>Multi-Language Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-wisdom" />
                <span>90%+ Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className={selectedFilter === filter.id ? "bg-gradient-to-r from-wisdom to-primary" : ""}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Therapists Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTherapists.map((therapist, index) => (
              <Card key={index} className="border-border/50 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{therapist.image}</div>
                      <div>
                        <CardTitle className="text-xl">{therapist.name}</CardTitle>
                        <CardDescription className="text-sm">{therapist.qualification}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{therapist.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <GraduationCap className="h-4 w-4 text-wisdom" />
                      <span>{therapist.experience} experience</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-trust" />
                      <span>{therapist.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <UserCheck className="h-4 w-4 text-growth" />
                      <span>{therapist.sessions}+ sessions completed</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Languages:</p>
                    <div className="flex flex-wrap gap-1">
                      {therapist.languages.map((lang, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Specialization:</p>
                    <div className="flex flex-wrap gap-1">
                      {therapist.specialization.map((spec, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Available Modes:</p>
                    <div className="flex space-x-2">
                      {therapist.modes.includes("Video") && <Video className="h-4 w-4 text-primary" />}
                      {therapist.modes.includes("Audio") && <Phone className="h-4 w-4 text-trust" />}
                      {therapist.modes.includes("Chat") && <MessageCircle className="h-4 w-4 text-growth" />}
                      {therapist.modes.includes("In-Person") && <Users className="h-4 w-4 text-wisdom" />}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl font-bold text-wisdom">{therapist.price}</div>
                      <Badge 
                        variant={therapist.availability.includes("Available") ? "default" : "secondary"}
                        className={therapist.availability.includes("Available") ? "bg-growth" : ""}
                      >
                        {therapist.availability}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-to-r from-wisdom to-primary">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Session
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How Therapy Works on Chaitnya Health
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, secure, and culturally sensitive mental healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-full flex items-center justify-center mx-auto">
                <UserCheck className="h-8 w-8 text-wisdom" />
              </div>
              <h3 className="text-xl font-semibold">Choose Your Therapist</h3>
              <p className="text-muted-foreground">
                Browse verified profiles, read reviews, and select a therapist who speaks your language and understands your culture.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-trust/20 to-growth/20 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8 text-trust" />
              </div>
              <h3 className="text-xl font-semibold">Book Your Session</h3>
              <p className="text-muted-foreground">
                Schedule sessions that fit your timetable. Choose from video calls, audio calls, or in-person meetings.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-growth/20 to-healing/20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-growth" />
              </div>
              <h3 className="text-xl font-semibold">Start Your Journey</h3>
              <p className="text-muted-foreground">
                Begin your mental wellness journey with professional guidance, complete privacy, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Network CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-wisdom/10 via-primary/10 to-growth/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Are you a licensed therapist?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join India's largest network of mental health professionals and help build a mentally resilient nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-wisdom to-primary hover:opacity-90 transition-opacity">
              <UserCheck className="mr-2 h-5 w-5" />
              Join Our Network
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-wisdom/30">
              Learn More
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-growth" />
              <span>Verified Credentials Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-trust" />
              <span>Competitive Pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-wisdom" />
              <span>Growing Patient Base</span>
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
                Connecting you with India's best mental health professionals. 
                Quality care in your language, at affordable prices.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">For Therapists</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Join Network</p>
                <p>Therapist Portal</p>
                <p>Training Resources</p>
                <p>Support</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">For Patients</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Find Therapist</p>
                <p>Book Session</p>
                <p>How It Works</p>
                <p>Emergency Support</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Chaitnya Health. All rights reserved. | Privacy-First | Licensed Professionals | Secure Platform
          </div>
        </div>
      </footer>
    </div>
  );
}
