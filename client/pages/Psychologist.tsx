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
  GraduationCap,
  Home,
  Building2,
  Headphones,
  VideoIcon,
  PhoneCall
} from "lucide-react";

export default function Psychologist() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const therapists = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      qualification: "M.Phil Clinical Psychology, Ph.D.",
      experience: "12 years",
      languages: ["Hindi", "English", "Punjabi"],
      specialization: ["Anxiety", "Depression", "Academic Stress"],
      rating: 4.9,
      location: "Delhi NCR",
      sessions: 2500,
      availability: "Available Today",
      consultationModes: {
        video: { available: true, price: 400 },
        audio: { available: true, price: 300 },
        office: { available: true, price: 500, address: "Sector 18, Noida" },
        home: { available: true, price: 800, coverage: "Delhi NCR" }
      },
      todaySlots: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"],
      tomorrowSlots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
      image: "👩‍⚕️"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      qualification: "M.D. Psychiatry, DPM",
      experience: "15 years",
      languages: ["Hindi", "English", "Bengali"],
      specialization: ["ADHD", "Bipolar Disorder", "Career Counseling"],
      rating: 4.8,
      location: "Mumbai",
      sessions: 3200,
      availability: "Next Slot: Tomorrow 2PM",
      consultationModes: {
        video: { available: true, price: 500 },
        audio: { available: true, price: 400 },
        office: { available: true, price: 600, address: "Andheri West, Mumbai" },
        home: { available: false, price: 0, coverage: "Not Available" }
      },
      todaySlots: [],
      tomorrowSlots: ["10:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"],
      image: "👨‍⚕️"
    },
    {
      id: 3,
      name: "Dr. Anitha Menon",
      qualification: "M.A. Counseling Psychology",
      experience: "8 years",
      languages: ["English", "Tamil", "Malayalam"],
      specialization: ["Relationship Issues", "Work Stress", "Self-Esteem"],
      rating: 4.7,
      location: "Bangalore",
      sessions: 1800,
      availability: "Available Now",
      consultationModes: {
        video: { available: true, price: 350 },
        audio: { available: true, price: 250 },
        office: { available: true, price: 400, address: "Koramangala, Bangalore" },
        home: { available: true, price: 600, coverage: "Bangalore Urban" }
      },
      todaySlots: ["11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
      tomorrowSlots: ["9:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"],
      image: "👩‍⚕️"
    },
    {
      id: 4,
      name: "Dr. Vikram Singh",
      qualification: "Ph.D. Clinical Psychology",
      experience: "10 years",
      languages: ["Hindi", "English", "Marathi"],
      specialization: ["Trauma", "PTSD", "Addiction Recovery"],
      rating: 4.9,
      location: "Pune",
      sessions: 2100,
      availability: "Available Today",
      consultationModes: {
        video: { available: true, price: 450 },
        audio: { available: true, price: 350 },
        office: { available: true, price: 550, address: "Koregaon Park, Pune" },
        home: { available: true, price: 750, coverage: "Pune & PCMC" }
      },
      todaySlots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
      tomorrowSlots: ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"],
      image: "👨‍⚕️"
    }
  ];

  const filters = [
    { id: "all", label: "All Therapists" },
    { id: "available", label: "Available Now" },
    { id: "video", label: "Video Sessions" },
    { id: "home", label: "Home Visits" },
    { id: "hindi", label: "Hindi Speaking" },
    { id: "budget", label: "Under ₹400" }
  ];

  const filteredTherapists = therapists.filter(therapist => {
    switch(selectedFilter) {
      case "available":
        return therapist.availability.includes("Available");
      case "video":
        return therapist.consultationModes.video.available;
      case "home":
        return therapist.consultationModes.home.available;
      case "hindi":
        return therapist.languages.includes("Hindi");
      case "budget":
        return Math.min(
          therapist.consultationModes.video.price, 
          therapist.consultationModes.audio.price
        ) <= 400;
      default:
        return true;
    }
  });

  const BookingModal = ({ therapist, onClose }) => {
    if (!therapist) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                <div className="text-4xl">{therapist.image}</div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{therapist.name}</h3>
                  <p className="text-muted-foreground">{therapist.qualification}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Consultation Modes */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Select Consultation Mode</h4>
                <div className="grid grid-cols-2 gap-4">
                  {/* Video Call */}
                  <div 
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedMode === 'video' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedMode('video')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-trust/20 rounded-lg flex items-center justify-center">
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Video Call</p>
                        <p className="text-sm text-muted-foreground">₹{therapist.consultationModes.video.price}</p>
                        <p className="text-xs text-green-600">HD Video & Audio</p>
                      </div>
                    </div>
                  </div>

                  {/* Audio Call */}
                  <div 
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedMode === 'audio' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedMode('audio')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-growth/20 to-healing/20 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-growth" />
                      </div>
                      <div>
                        <p className="font-medium">Audio Call</p>
                        <p className="text-sm text-muted-foreground">₹{therapist.consultationModes.audio.price}</p>
                        <p className="text-xs text-green-600">Crystal Clear Audio</p>
                      </div>
                    </div>
                  </div>

                  {/* Office Visit */}
                  <div 
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedMode === 'office' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedMode('office')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-wisdom/20 to-support/20 rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-wisdom" />
                      </div>
                      <div>
                        <p className="font-medium">Office Visit</p>
                        <p className="text-sm text-muted-foreground">₹{therapist.consultationModes.office.price}</p>
                        <p className="text-xs text-blue-600">{therapist.consultationModes.office.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Home Visit */}
                  <div 
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      !therapist.consultationModes.home.available ? 'opacity-50 cursor-not-allowed' :
                      selectedMode === 'home' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => therapist.consultationModes.home.available && setSelectedMode('home')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-trust/20 to-calm/20 rounded-lg flex items-center justify-center">
                        <Home className="h-6 w-6 text-trust" />
                      </div>
                      <div>
                        <p className="font-medium">Home Visit</p>
                        <p className="text-sm text-muted-foreground">
                          {therapist.consultationModes.home.available ? 
                            `₹${therapist.consultationModes.home.price}` : 
                            'Not Available'
                          }
                        </p>
                        <p className="text-xs text-purple-600">
                          {therapist.consultationModes.home.coverage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              {selectedMode && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Available Time Slots</h4>
                  
                  {/* Today's Slots */}
                  {therapist.todaySlots.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-medium text-green-600">Today ({new Date().toLocaleDateString()})</p>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {therapist.todaySlots.map((slot, index) => (
                          <Button
                            key={index}
                            variant={selectedSlot === `today-${slot}` ? "default" : "outline"}
                            size="sm"
                            className="text-xs"
                            onClick={() => setSelectedSlot(`today-${slot}`)}
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tomorrow's Slots */}
                  {therapist.tomorrowSlots.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-medium text-blue-600">Tomorrow ({new Date(Date.now() + 86400000).toLocaleDateString()})</p>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {therapist.tomorrowSlots.map((slot, index) => (
                          <Button
                            key={index}
                            variant={selectedSlot === `tomorrow-${slot}` ? "default" : "outline"}
                            size="sm"
                            className="text-xs"
                            onClick={() => setSelectedSlot(`tomorrow-${slot}`)}
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Booking Summary */}
              {selectedMode && selectedSlot && (
                <div className="bg-gradient-to-r from-primary/10 to-wisdom/10 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Booking Summary</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Mode:</strong> {selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)}</p>
                    <p><strong>Time:</strong> {selectedSlot.replace('today-', '').replace('tomorrow-', '')}</p>
                    <p><strong>Date:</strong> {selectedSlot.includes('today') ? 'Today' : 'Tomorrow'}</p>
                    <p><strong>Fee:</strong> ₹{therapist.consultationModes[selectedMode].price}</p>
                  </div>
                </div>
              )}

              {/* Book Button */}
              <div className="flex space-x-3">
                <Button 
                  className="flex-1 bg-gradient-to-r from-wisdom to-primary" 
                  disabled={!selectedMode || !selectedSlot}
                >
                  Confirm Booking
                </Button>
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
              🧠 Book Instant Consultations
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-wisdom via-primary to-growth bg-clip-text text-transparent">
                Consultation Mode
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Video calls, audio sessions, office visits, or home consultations - 
              get mental health support the way that works best for you.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Video className="h-4 w-4 text-primary" />
                <span>HD Video Calls</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-growth" />
                <span>Audio Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="h-4 w-4 text-wisdom" />
                <span>Office Visits</span>
              </div>
              <div className="flex items-center space-x-2">
                <Home className="h-4 w-4 text-trust" />
                <span>Home Consultations</span>
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

                  {/* Consultation Modes Quick View */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Available Modes:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center justify-between p-2 bg-primary/5 rounded">
                        <div className="flex items-center space-x-1">
                          <Video className="h-3 w-3 text-primary" />
                          <span>Video</span>
                        </div>
                        <span className="font-medium">₹{therapist.consultationModes.video.price}</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-growth/5 rounded">
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3 text-growth" />
                          <span>Audio</span>
                        </div>
                        <span className="font-medium">₹{therapist.consultationModes.audio.price}</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-wisdom/5 rounded">
                        <div className="flex items-center space-x-1">
                          <Building2 className="h-3 w-3 text-wisdom" />
                          <span>Office</span>
                        </div>
                        <span className="font-medium">₹{therapist.consultationModes.office.price}</span>
                      </div>
                      <div className={`flex items-center justify-between p-2 rounded ${
                        therapist.consultationModes.home.available ? 'bg-trust/5' : 'bg-gray-100'
                      }`}>
                        <div className="flex items-center space-x-1">
                          <Home className="h-3 w-3 text-trust" />
                          <span>Home</span>
                        </div>
                        <span className="font-medium">
                          {therapist.consultationModes.home.available ? `₹${therapist.consultationModes.home.price}` : 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Slots Preview */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Next Available:</p>
                    <div className="flex space-x-2">
                      {therapist.todaySlots.slice(0, 3).map((slot, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-green-100 text-green-700">
                          {slot}
                        </Badge>
                      ))}
                      {therapist.todaySlots.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{therapist.todaySlots.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Languages:</p>
                    <div className="flex flex-wrap gap-1">
                      {therapist.languages.map((lang, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <Button 
                      className="w-full bg-gradient-to-r from-wisdom to-primary"
                      onClick={() => setSelectedTherapist(therapist)}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        therapist={selectedTherapist} 
        onClose={() => {
          setSelectedTherapist(null);
          setSelectedMode("");
          setSelectedSlot("");
        }} 
      />

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the consultation mode that works best for your comfort and convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-trust/20 rounded-full flex items-center justify-center mx-auto">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Video Consultation</h3>
              <p className="text-muted-foreground text-sm">
                Face-to-face sessions with HD video quality. Build better rapport with your therapist.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-growth/20 to-healing/20 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-growth" />
              </div>
              <h3 className="text-xl font-semibold">Audio Sessions</h3>
              <p className="text-muted-foreground text-sm">
                Voice-only sessions for privacy. Perfect when you prefer not to be on camera.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-wisdom/20 to-support/20 rounded-full flex items-center justify-center mx-auto">
                <Building2 className="h-8 w-8 text-wisdom" />
              </div>
              <h3 className="text-xl font-semibold">Office Visits</h3>
              <p className="text-muted-foreground text-sm">
                Traditional in-person sessions at the therapist's clinic for a familiar experience.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-trust/20 to-calm/20 rounded-full flex items-center justify-center mx-auto">
                <Home className="h-8 w-8 text-trust" />
              </div>
              <h3 className="text-xl font-semibold">Home Consultations</h3>
              <p className="text-muted-foreground text-sm">
                Therapist visits your home for maximum comfort and convenience (where available).
              </p>
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
                Flexible mental healthcare that adapts to your lifestyle. Video, audio, office, or home - we're here however you need us.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Consultation Modes</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Video Consultations</p>
                <p>Audio Sessions</p>
                <p>Office Visits</p>
                <p>Home Consultations</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>24/7 Helpline</p>
                <p>Emergency Support</p>
                <p>Technical Help</p>
                <p>Booking Assistance</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Chaitnya Health. All rights reserved. | Secure Consultations | Licensed Professionals | Flexible Modes
          </div>
        </div>
      </footer>
    </div>
  );
}
