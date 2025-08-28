import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users,
  MapPin,
  Star,
  Calendar,
  Clock,
  Phone,
  Video,
  Home,
  Building2,
  ArrowLeft,
  Filter,
  Search,
  Languages,
  Award,
  CheckCircle,
  MessageCircle,
  Stethoscope
} from "lucide-react";

export default function TherapistNetwork() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const specialties = [
    { id: "all", name: "All Specialties" },
    { id: "anxiety", name: "Anxiety & Stress" },
    { id: "depression", name: "Depression" },
    { id: "relationships", name: "Relationships" },
    { id: "trauma", name: "Trauma & PTSD" },
    { id: "addiction", name: "Addiction" },
    { id: "family", name: "Family Therapy" },
    { id: "couples", name: "Couples Therapy" },
    { id: "adolescent", name: "Adolescent Therapy" }
  ];

  const consultationModes = [
    { id: "all", name: "All Modes", icon: Users },
    { id: "video", name: "Video Call", icon: Video },
    { id: "audio", name: "Audio Call", icon: Phone },
    { id: "office", name: "Office Visit", icon: Building2 },
    { id: "home", name: "Home Visit", icon: Home }
  ];

  const therapists = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Clinical Psychology",
      experience: "12 years",
      rating: 4.9,
      reviews: 127,
      languages: ["Hindi", "English", "Gujarati"],
      location: "Mumbai, Maharashtra",
      modes: ["video", "audio", "office"],
      price: "₹1,200/session",
      nextAvailable: "Today, 3:00 PM",
      verified: true,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialty: "Anxiety & Depression",
      experience: "8 years",
      rating: 4.8,
      reviews: 89,
      languages: ["Hindi", "English"],
      location: "Delhi, NCR",
      modes: ["video", "audio", "office", "home"],
      price: "₹1,000/session",
      nextAvailable: "Tomorrow, 10:00 AM",
      verified: true,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Dr. Anita Patel",
      specialty: "Family & Relationships",
      experience: "15 years",
      rating: 5.0,
      reviews: 203,
      languages: ["Hindi", "English", "Marathi"],
      location: "Pune, Maharashtra",
      modes: ["video", "audio", "office"],
      price: "₹1,500/session",
      nextAvailable: "Today, 6:00 PM",
      verified: true,
      image: "/placeholder.svg"
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
                <p className="text-xs text-muted-foreground -mt-1">Therapist Network</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                My Appointments
              </Button>
              <Button variant="ghost" asChild>
                <a href="/" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
              👥 Verified Professionals
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Therapist{" "}
              <span className="bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                Network
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Connect with qualified mental health professionals across India. Choose from video calls, audio sessions, office visits, or home consultations.
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by name, specialty, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Specialty Filter */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {specialties.map((specialty) => (
                      <Button
                        key={specialty.id}
                        variant={selectedSpecialty === specialty.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSpecialty(specialty.id)}
                        className={selectedSpecialty === specialty.id ? "bg-gradient-to-r from-wisdom to-primary" : ""}
                      >
                        {specialty.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Consultation Mode Filter */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Consultation Modes</h3>
                  <div className="flex flex-wrap gap-2">
                    {consultationModes.map((mode) => {
                      const IconComponent = mode.icon;
                      return (
                        <Button
                          key={mode.id}
                          variant={selectedMode === mode.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedMode(mode.id)}
                          className={selectedMode === mode.id ? "bg-gradient-to-r from-trust to-growth" : ""}
                        >
                          <IconComponent className="h-4 w-4 mr-2" />
                          {mode.name}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-wisdom mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Verified Therapists</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-trust/20 bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-trust mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Specializations</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-support/20 bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-support mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Cities Covered</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-growth/20 bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-growth mb-2">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </CardContent>
            </Card>
          </div>

          {/* Therapist Listings */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Available Therapists</h2>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{therapists.length} results</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {therapists.map((therapist) => (
                <Card key={therapist.id} className="border-2 border-border/50 bg-white/90 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-4 gap-6 items-start">
                      {/* Therapist Info */}
                      <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-full flex items-center justify-center">
                            <Stethoscope className="h-8 w-8 text-wisdom" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-xl font-semibold text-foreground">{therapist.name}</h3>
                              {therapist.verified && (
                                <Badge className="bg-success/10 text-success border-success/30">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground">{therapist.specialty}</p>
                            <p className="text-sm text-muted-foreground">{therapist.experience} experience</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{therapist.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Languages className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{therapist.languages.join(", ")}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-warning fill-current" />
                            <span className="text-sm font-medium">{therapist.rating}</span>
                            <span className="text-sm text-muted-foreground">({therapist.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>

                      {/* Consultation Modes */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Available Modes</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {therapist.modes.map((mode) => {
                            const modeInfo = consultationModes.find(m => m.id === mode);
                            if (!modeInfo) return null;
                            const IconComponent = modeInfo.icon;
                            return (
                              <div key={mode} className="flex items-center space-x-2 p-2 bg-muted/50 rounded-lg">
                                <IconComponent className="h-4 w-4 text-primary" />
                                <span className="text-sm">{modeInfo.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Booking Info */}
                      <div className="space-y-4">
                        <div className="text-center lg:text-right">
                          <div className="text-2xl font-bold text-foreground">{therapist.price}</div>
                          <div className="text-sm text-muted-foreground">per session</div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-center lg:justify-end space-x-2">
                            <Clock className="h-4 w-4 text-success" />
                            <span className="text-sm text-success">Available: {therapist.nextAvailable}</span>
                          </div>
                          
                          <div className="flex flex-col space-y-2">
                            <Button className="bg-gradient-to-r from-wisdom to-primary">
                              <Calendar className="h-4 w-4 mr-2" />
                              Book Session
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Send Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-wisdom/10 to-primary/10 rounded-2xl p-8 text-center border border-wisdom/30">
            <h2 className="text-2xl font-bold text-foreground mb-4">Can't Find the Right Therapist?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team can help you find a therapist that matches your specific needs, location, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-wisdom to-primary" size="lg">
                Get Personalized Recommendations
              </Button>
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
