import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  Phone,
  Mail,
  Globe,
  Target,
  Award,
  CheckCircle,
  HandHeart,
  Building,
  Calendar,
  TrendingUp,
  Shield,
  Languages,
  Video,
  Home,
  Building2,
  Clock,
  UserCheck
} from "lucide-react";

export default function NGO() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNGO, setSelectedNGO] = useState(null);
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const ngoPartners = [
    {
      id: 1,
      name: "Manasvi Foundation",
      location: "Delhi NCR",
      established: "2015",
      focus: ["Rural Mental Health", "Youth Counseling", "Community Outreach"],
      beneficiaries: "25,000+",
      languages: ["Hindi", "English", "Punjabi", "Haryanvi"],
      services: ["Free Counseling", "Awareness Workshops", "Crisis Intervention"],
      rating: 4.8,
      volunteers: 150,
      image: "🏛️",
      description: "Leading mental health advocacy in rural Delhi NCR, focusing on removing stigma and providing accessible care.",
      counselors: [
        {
          name: "Priya Counselor",
          qualification: "M.A. Psychology",
          languages: ["Hindi", "English"],
          consultationModes: {
            video: { available: true, price: 0 },
            audio: { available: true, price: 0 },
            office: { available: true, price: 0, address: "Community Center, Gurgaon" },
            home: { available: true, price: 0, coverage: "Rural Delhi NCR" }
          },
          todaySlots: ["10:00 AM", "2:00 PM", "4:00 PM"],
          tomorrowSlots: ["9:00 AM", "11:00 AM", "3:00 PM", "5:00 PM"]
        },
        {
          name: "Rajesh Volunteer",
          qualification: "Certified Counselor",
          languages: ["Hindi", "Punjabi"],
          consultationModes: {
            video: { available: false, price: 0 },
            audio: { available: true, price: 0 },
            office: { available: true, price: 0, address: "NGO Office, Noida" },
            home: { available: true, price: 0, coverage: "Noida & Ghaziabad" }
          },
          todaySlots: ["11:00 AM", "1:00 PM"],
          tomorrowSlots: ["10:00 AM", "12:00 PM", "4:00 PM"]
        }
      ]
    },
    {
      id: 2,
      name: "Sahara Wellness Network",
      location: "Mumbai & Maharashtra",
      established: "2012",
      focus: ["Women's Mental Health", "Workplace Wellness", "Suicide Prevention"],
      beneficiaries: "40,000+",
      languages: ["Marathi", "Hindi", "English", "Gujarati"],
      services: ["Support Groups", "Helpline Services", "Corporate Training"],
      rating: 4.9,
      volunteers: 200,
      image: "🤝",
      description: "Comprehensive mental health support network serving urban and rural Maharashtra communities.",
      counselors: [
        {
          name: "Sunita Counselor",
          qualification: "M.S.W. in Mental Health",
          languages: ["Marathi", "Hindi", "English"],
          consultationModes: {
            video: { available: true, price: 0 },
            audio: { available: true, price: 0 },
            office: { available: true, price: 0, address: "Wellness Center, Andheri" },
            home: { available: false, price: 0, coverage: "Not Available" }
          },
          todaySlots: ["9:00 AM", "11:00 AM", "3:00 PM", "5:00 PM"],
          tomorrowSlots: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"]
        },
        {
          name: "Amit Support Worker",
          qualification: "Diploma in Counseling",
          languages: ["Hindi", "Marathi"],
          consultationModes: {
            video: { available: true, price: 0 },
            audio: { available: true, price: 0 },
            office: { available: true, price: 0, address: "Community Hall, Pune" },
            home: { available: true, price: 0, coverage: "Pune City" }
          },
          todaySlots: ["12:00 PM", "2:00 PM", "6:00 PM"],
          tomorrowSlots: ["9:00 AM", "1:00 PM", "3:00 PM", "7:00 PM"]
        }
      ]
    },
    {
      id: 3,
      name: "Aasha Mental Health Trust",
      location: "Karnataka & Tamil Nadu",
      established: "2018",
      focus: ["Student Mental Health", "Family Counseling", "Digital Literacy"],
      beneficiaries: "15,000+",
      languages: ["Kannada", "Tamil", "English", "Telugu"],
      services: ["School Programs", "Family Therapy", "Online Support"],
      rating: 4.7,
      volunteers: 120,
      image: "🎓",
      description: "Focusing on student mental health across South India with innovative digital outreach programs.",
      counselors: [
        {
          name: "Lakshmi Counselor",
          qualification: "M.Phil in Clinical Psychology",
          languages: ["Tamil", "English", "Kannada"],
          consultationModes: {
            video: { available: true, price: 0 },
            audio: { available: true, price: 0 },
            office: { available: true, price: 0, address: "Trust Office, Bangalore" },
            home: { available: true, price: 0, coverage: "Bangalore Urban" }
          },
          todaySlots: ["10:00 AM", "1:00 PM", "4:00 PM"],
          tomorrowSlots: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM"]
        }
      ]
    }
  ];

  const impactMetrics = [
    { label: "NGO Partners", value: "50+", icon: <HandHeart className="h-6 w-6" /> },
    { label: "Free Counselors", value: "300+", icon: <Users className="h-6 w-6" /> },
    { label: "Communities Served", value: "500+", icon: <Target className="h-6 w-6" /> },
    { label: "Free Sessions", value: "25,000+", icon: <Award className="h-6 w-6" /> }
  ];

  const BookingModal = ({ ngo, onClose }) => {
    if (!ngo) return null;

    const [selectedCounselor, setSelectedCounselor] = useState(ngo.counselors[0]);

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                <div className="text-4xl">{ngo.image}</div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{ngo.name}</h3>
                  <p className="text-muted-foreground">{ngo.location}</p>
                  <Badge className="mt-1 bg-green-100 text-green-800">FREE COUNSELING</Badge>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Counselor Selection */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Select Counselor</h4>
                <div className="grid gap-3">
                  {ngo.counselors.map((counselor, index) => (
                    <div 
                      key={index}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedCounselor?.name === counselor.name ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedCounselor(counselor)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{counselor.name}</p>
                          <p className="text-sm text-muted-foreground">{counselor.qualification}</p>
                          <div className="flex space-x-1 mt-1">
                            {counselor.languages.map((lang, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {lang}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-green-600 font-medium">FREE</p>
                          <p className="text-xs text-muted-foreground">NGO Service</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Modes */}
              {selectedCounselor && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Select Consultation Mode</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Video Call */}
                    {selectedCounselor.consultationModes.video.available && (
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
                            <p className="text-sm text-green-600">FREE</p>
                            <p className="text-xs text-muted-foreground">HD Video & Audio</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Audio Call */}
                    {selectedCounselor.consultationModes.audio.available && (
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
                            <p className="text-sm text-green-600">FREE</p>
                            <p className="text-xs text-muted-foreground">Voice Only</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Office Visit */}
                    {selectedCounselor.consultationModes.office.available && (
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
                            <p className="text-sm text-green-600">FREE</p>
                            <p className="text-xs text-blue-600">{selectedCounselor.consultationModes.office.address}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Home Visit */}
                    {selectedCounselor.consultationModes.home.available && (
                      <div 
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          selectedMode === 'home' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedMode('home')}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-trust/20 to-calm/20 rounded-lg flex items-center justify-center">
                            <Home className="h-6 w-6 text-trust" />
                          </div>
                          <div>
                            <p className="font-medium">Home Visit</p>
                            <p className="text-sm text-green-600">FREE</p>
                            <p className="text-xs text-purple-600">
                              {selectedCounselor.consultationModes.home.coverage}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Time Slots */}
              {selectedMode && selectedCounselor && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Available Time Slots</h4>
                  
                  {/* Today's Slots */}
                  {selectedCounselor.todaySlots.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-medium text-green-600">Today ({new Date().toLocaleDateString()})</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {selectedCounselor.todaySlots.map((slot, index) => (
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
                  {selectedCounselor.tomorrowSlots.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-medium text-blue-600">Tomorrow ({new Date(Date.now() + 86400000).toLocaleDateString()})</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {selectedCounselor.tomorrowSlots.map((slot, index) => (
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
              {selectedMode && selectedSlot && selectedCounselor && (
                <div className="bg-gradient-to-r from-green-50 to-primary/10 rounded-xl p-4">
                  <h4 className="font-semibold mb-2 text-green-800">Free Counseling Session</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>NGO:</strong> {ngo.name}</p>
                    <p><strong>Counselor:</strong> {selectedCounselor.name}</p>
                    <p><strong>Mode:</strong> {selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)}</p>
                    <p><strong>Time:</strong> {selectedSlot.replace('today-', '').replace('tomorrow-', '')}</p>
                    <p><strong>Date:</strong> {selectedSlot.includes('today') ? 'Today' : 'Tomorrow'}</p>
                    <p><strong>Fee:</strong> <span className="text-green-600 font-medium">FREE</span></p>
                  </div>
                </div>
              )}

              {/* Book Button */}
              <div className="flex space-x-3">
                <Button 
                  className="flex-1 bg-gradient-to-r from-green-600 to-growth" 
                  disabled={!selectedMode || !selectedSlot || !selectedCounselor}
                >
                  Book Free Session
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
              <a href="/psychologist" className="text-foreground/80 hover:text-foreground transition-colors">Therapists</a>
              <a href="/ngo" className="text-primary font-medium">NGO Partners</a>
              <Button variant="outline" size="sm">Institution Login</Button>
              <Button size="sm" className="bg-gradient-to-r from-wisdom to-primary">Book Free Session</Button>
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
                <a href="/psychologist" className="block text-foreground/80 hover:text-foreground transition-colors">Therapists</a>
                <a href="/ngo" className="block text-primary font-medium">NGO Partners</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm">Institution Login</Button>
                  <Button size="sm" className="bg-gradient-to-r from-wisdom to-primary">Book Free Session</Button>
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
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 text-base px-4 py-2">
              🤝 Free Community Counseling
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Grassroots{" "}
              <span className="bg-gradient-to-r from-green-600 via-growth to-healing bg-clip-text text-transparent">
                Free Support Network
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access free mental health counseling through our network of NGO partners. 
              Community-driven support in your local language.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-growth/20 rounded-full flex items-center justify-center mx-auto mb-2 text-green-600">
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-green-600">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Consultants Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-wisdom/5 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="bg-wisdom/10 text-wisdom-foreground border-wisdom/30">
              🔥 Most Popular This Week
            </Badge>
            <h2 className="text-3xl font-bold text-foreground">
              Trending Consultants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most booked and highest-rated counselors in our network
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Trending Consultant 1 */}
            <Card className="border-2 border-wisdom/30 bg-gradient-to-br from-wisdom/5 to-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-wisdom to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👩‍⚕️</span>
                  </div>
                  <div className="absolute -top-2 -right-8 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                    #1 TRENDING
                  </div>
                </div>
                <CardTitle className="text-xl">Dr. Meera Sharma</CardTitle>
                <CardDescription>Senior Counselor at Manasvi Foundation</CardDescription>
                <div className="flex justify-center items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">FREE</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">🔥 156 sessions this week</p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="outline" className="text-xs">Hindi</Badge>
                    <Badge variant="outline" className="text-xs">English</Badge>
                    <Badge variant="outline" className="text-xs">Punjabi</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    "Very understanding and helpful. Made me feel comfortable immediately."
                  </p>
                </div>
                <Button className="w-full bg-gradient-to-r from-wisdom to-primary" size="sm">
                  Book with Dr. Meera
                </Button>
              </CardContent>
            </Card>

            {/* Trending Consultant 2 */}
            <Card className="border-2 border-trust/30 bg-gradient-to-br from-trust/5 to-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-trust to-growth rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍⚕️</span>
                  </div>
                  <div className="absolute -top-2 -right-8 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                    #2 TRENDING
                  </div>
                </div>
                <CardTitle className="text-xl">Rahul Patil</CardTitle>
                <CardDescription>Lead Counselor at Sahara Network</CardDescription>
                <div className="flex justify-center items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">FREE</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">🔥 142 sessions this week</p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="outline" className="text-xs">Marathi</Badge>
                    <Badge variant="outline" className="text-xs">Hindi</Badge>
                    <Badge variant="outline" className="text-xs">English</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    "Excellent guidance for work stress. Very patient listener."
                  </p>
                </div>
                <Button className="w-full bg-gradient-to-r from-trust to-growth" size="sm">
                  Book with Rahul
                </Button>
              </CardContent>
            </Card>

            {/* Trending Consultant 3 */}
            <Card className="border-2 border-growth/30 bg-gradient-to-br from-growth/5 to-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-growth to-healing rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👩‍⚕️</span>
                  </div>
                  <div className="absolute -top-2 -right-8 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                    #3 TRENDING
                  </div>
                </div>
                <CardTitle className="text-xl">Anjali Reddy</CardTitle>
                <CardDescription>Specialist at Aasha Trust</CardDescription>
                <div className="flex justify-center items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.7</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">FREE</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">🔥 138 sessions this week</p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="outline" className="text-xs">Tamil</Badge>
                    <Badge variant="outline" className="text-xs">English</Badge>
                    <Badge variant="outline" className="text-xs">Kannada</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    "Great for student mental health issues. Very relatable."
                  </p>
                </div>
                <Button className="w-full bg-gradient-to-r from-growth to-healing" size="sm">
                  Book with Anjali
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NGO Partners Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Book Free Counseling Sessions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with trained counselors from our NGO partners for completely free mental health support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ngoPartners.map((ngo, index) => (
              <Card key={index} className="border-border/50 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{ngo.image}</div>
                      <div>
                        <CardTitle className="text-xl">{ngo.name}</CardTitle>
                        <CardDescription className="text-sm">Est. {ngo.established}</CardDescription>
                        <Badge className="mt-1 bg-green-100 text-green-800">FREE COUNSELING</Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{ngo.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ngo.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-wisdom" />
                      <span>{ngo.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="h-4 w-4 text-trust" />
                      <span>{ngo.beneficiaries} beneficiaries served</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <UserCheck className="h-4 w-4 text-growth" />
                      <span>{ngo.counselors.length} trained counselors</span>
                    </div>
                  </div>

                  {/* Available Counselors Preview */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Available Counselors:</p>
                    <div className="space-y-1">
                      {ngo.counselors.slice(0, 2).map((counselor, idx) => (
                        <div key={idx} className="text-xs p-2 bg-green-50 rounded flex items-center justify-between">
                          <span className="font-medium">{counselor.name}</span>
                          <div className="flex space-x-1">
                            {counselor.consultationModes.video.available && <Video className="h-3 w-3 text-primary" />}
                            {counselor.consultationModes.audio.available && <Phone className="h-3 w-3 text-growth" />}
                            {counselor.consultationModes.office.available && <Building2 className="h-3 w-3 text-wisdom" />}
                            {counselor.consultationModes.home.available && <Home className="h-3 w-3 text-trust" />}
                          </div>
                        </div>
                      ))}
                      {ngo.counselors.length > 2 && (
                        <p className="text-xs text-muted-foreground">+{ngo.counselors.length - 2} more counselors</p>
                      )}
                    </div>
                  </div>

                  {/* Next Available Slots */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Next Available Slots:</p>
                    <div className="flex space-x-2">
                      {ngo.counselors[0]?.todaySlots.slice(0, 3).map((slot, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-green-100 text-green-700">
                          {slot}
                        </Badge>
                      ))}
                      {ngo.counselors[0]?.todaySlots.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{ngo.counselors[0].todaySlots.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Languages:</p>
                    <div className="flex flex-wrap gap-1">
                      {ngo.languages.map((lang, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <Button 
                      className="w-full bg-gradient-to-r from-green-600 to-growth"
                      onClick={() => setSelectedNGO(ngo)}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Free Session
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
        ngo={selectedNGO} 
        onClose={() => {
          setSelectedNGO(null);
          setSelectedMode("");
          setSelectedSlot("");
        }} 
      />

      {/* How Free Counseling Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/75">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How Free Counseling Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Community-driven support with multiple ways to connect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-trust/20 rounded-full flex items-center justify-center mx-auto">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Video Sessions</h3>
              <p className="text-muted-foreground text-sm">
                Free video calls with trained counselors for face-to-face support.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-growth/20 to-healing/20 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-growth" />
              </div>
              <h3 className="text-xl font-semibold">Audio Support</h3>
              <p className="text-muted-foreground text-sm">
                Voice-only counseling sessions for comfortable, private conversations.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-wisdom/20 to-support/20 rounded-full flex items-center justify-center mx-auto">
                <Building2 className="h-8 w-8 text-wisdom" />
              </div>
              <h3 className="text-xl font-semibold">Community Centers</h3>
              <p className="text-muted-foreground text-sm">
                Visit local NGO offices and community centers for in-person counseling.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-trust/20 to-calm/20 rounded-full flex items-center justify-center mx-auto">
                <Home className="h-8 w-8 text-trust" />
              </div>
              <h3 className="text-xl font-semibold">Home Visits</h3>
              <p className="text-muted-foreground text-sm">
                Counselors visit your home for maximum comfort and accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 via-primary/10 to-growth/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Join the Free Counseling Network
          </h2>
          <p className="text-xl text-muted-foreground">
            If you're an NGO or community organization, partner with us to provide free mental health support to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-growth hover:opacity-90 transition-opacity">
              <HandHeart className="mr-2 h-5 w-5" />
              Become NGO Partner
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-green-300">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Session
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-600" />
              <span>Completely Free Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Languages className="h-4 w-4 text-trust" />
              <span>Local Language Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-wisdom" />
              <span>Community-Driven</span>
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
                Free mental health support through our network of grassroots NGO partners. 
                Community-driven care in your local language.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Free Services</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Video Counseling</p>
                <p>Audio Sessions</p>
                <p>Community Centers</p>
                <p>Home Visits</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">NGO Partners</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Partnership Program</p>
                <p>Counselor Training</p>
                <p>Community Impact</p>
                <p>Join Network</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Chaitnya Health. All rights reserved. | Free Counseling | Community-Driven | Local Language Support
          </div>
        </div>
      </footer>
    </div>
  );
}
