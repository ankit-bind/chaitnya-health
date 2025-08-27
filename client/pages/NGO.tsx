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
  Languages
} from "lucide-react";

export default function NGO() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ngoPartners = [
    {
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
      description: "Leading mental health advocacy in rural Delhi NCR, focusing on removing stigma and providing accessible care."
    },
    {
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
      description: "Comprehensive mental health support network serving urban and rural Maharashtra communities."
    },
    {
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
      description: "Focusing on student mental health across South India with innovative digital outreach programs."
    },
    {
      name: "Umang Community Care",
      location: "Rajasthan & Gujarat",
      established: "2010",
      focus: ["Elder Care Mental Health", "Tribal Community Support", "Cultural Healing"],
      beneficiaries: "35,000+",
      languages: ["Rajasthani", "Gujarati", "Hindi", "English"],
      services: ["Community Centers", "Traditional Healing", "Elder Support"],
      rating: 4.6,
      volunteers: 180,
      image: "🏜️",
      description: "Bridging traditional healing practices with modern mental health care in desert communities."
    },
    {
      name: "Samvedna Society",
      location: "West Bengal & Odisha",
      established: "2016",
      focus: ["Disaster Mental Health", "Child Psychology", "Community Resilience"],
      beneficiaries: "20,000+",
      languages: ["Bengali", "Odia", "Hindi", "English"],
      services: ["Crisis Response", "Child Counseling", "Resilience Training"],
      rating: 4.8,
      volunteers: 140,
      image: "🌊",
      description: "Specializing in disaster mental health response and building community resilience in coastal regions."
    },
    {
      name: "Jeewan Shakti Foundation",
      location: "Uttar Pradesh & Bihar",
      established: "2013",
      focus: ["Agricultural Community Mental Health", "Men's Mental Health", "Economic Stress"],
      beneficiaries: "30,000+",
      languages: ["Hindi", "Bhojpuri", "Awadhi", "English"],
      services: ["Farmer Support", "Economic Counseling", "Community Healing"],
      rating: 4.5,
      volunteers: 160,
      image: "🌾",
      description: "Addressing mental health challenges in agricultural communities across India's heartland."
    }
  ];

  const impactMetrics = [
    { label: "NGO Partners", value: "50+", icon: <HandHeart className="h-6 w-6" /> },
    { label: "Communities Served", value: "500+", icon: <Users className="h-6 w-6" /> },
    { label: "Total Beneficiaries", value: "2,00,000+", icon: <Target className="h-6 w-6" /> },
    { label: "Active Volunteers", value: "1,200+", icon: <Award className="h-6 w-6" /> }
  ];

  const partnershipBenefits = [
    {
      icon: <Building className="h-8 w-8 text-wisdom" />,
      title: "Technology Access",
      description: "Free access to our digital platform, AI tools, and institutional dashboard for data-driven impact measurement."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-trust" />,
      title: "Capacity Building",
      description: "Training programs for volunteers, digital literacy workshops, and professional development opportunities."
    },
    {
      icon: <HandHeart className="h-8 w-8 text-growth" />,
      title: "Resource Sharing",
      description: "Access to mental health resources, multilingual content, and evidence-based intervention protocols."
    },
    {
      icon: <Users className="h-8 w-8 text-support" />,
      title: "Network Support",
      description: "Connect with other NGOs, share best practices, and collaborate on large-scale community interventions."
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
              <Button size="sm" className="bg-gradient-to-r from-wisdom to-primary">Partner With Us</Button>
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
                  <Button size="sm" className="bg-gradient-to-r from-wisdom to-primary">Partner With Us</Button>
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
            <Badge variant="secondary" className="bg-growth/10 text-growth-foreground border-growth/30 text-base px-4 py-2">
              🤝 Chaitnya Mitra Network
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Grassroots{" "}
              <span className="bg-gradient-to-r from-wisdom via-primary to-growth bg-clip-text text-transparent">
                NGO Network
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Partnering with community organizations across India to bridge the mental health gap 
              through culturally-sensitive, locally-rooted support systems.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-wisdom/20 to-growth/20 rounded-full flex items-center justify-center mx-auto mb-2 text-wisdom">
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-wisdom">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Building India's Mental Health Safety Net
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Chaitnya Mitra network represents our commitment to reaching every corner of India. 
            By partnering with local NGOs, we ensure that mental health support is not just available, 
            but also culturally relevant and community-driven.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-wisdom" />
              </div>
              <h3 className="text-xl font-semibold">Local Reach</h3>
              <p className="text-muted-foreground">Deep community connections ensuring culturally appropriate mental health interventions.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-trust/20 to-growth/20 rounded-lg flex items-center justify-center">
                <Languages className="h-6 w-6 text-trust" />
              </div>
              <h3 className="text-xl font-semibold">Cultural Sensitivity</h3>
              <p className="text-muted-foreground">Mental health support in local languages and culturally relevant contexts.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-growth/20 to-healing/20 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-growth" />
              </div>
              <h3 className="text-xl font-semibold">Community Trust</h3>
              <p className="text-muted-foreground">Leveraging existing community relationships to reduce stigma and increase uptake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NGO Partners Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Partner Organizations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated NGOs working tirelessly to bring mental health support to communities across India.
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
                      <HandHeart className="h-4 w-4 text-growth" />
                      <span>{ngo.volunteers} active volunteers</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Focus Areas:</p>
                    <div className="flex flex-wrap gap-1">
                      {ngo.focus.map((area, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
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

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Services:</p>
                    <div className="space-y-1">
                      {ngo.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-growth" />
                          <span className="text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <Button className="w-full bg-gradient-to-r from-wisdom to-primary">
                      <HandHeart className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Partnership Benefits
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Why Partner with Chaitnya Health?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide technology, training, and resources to amplify your community impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-background to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Network CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-wisdom/10 via-primary/10 to-growth/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Join the Chaitnya Mitra Network
          </h2>
          <p className="text-xl text-muted-foreground">
            Partner with us to expand mental health access in your community. Together, we can build a mentally resilient India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-wisdom to-primary hover:opacity-90 transition-opacity">
              <HandHeart className="mr-2 h-5 w-5" />
              Become a Partner
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-wisdom/30">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Discussion
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Building className="h-4 w-4 text-growth" />
              <span>Free Technology Platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-trust" />
              <span>Capacity Building Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-wisdom" />
              <span>Network Collaboration</span>
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
                Building a comprehensive mental health ecosystem through partnerships with 
                grassroots organizations across India.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">For NGOs</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Partnership Program</p>
                <p>Training Resources</p>
                <p>Technology Platform</p>
                <p>Support Network</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Community Impact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Success Stories</p>
                <p>Impact Reports</p>
                <p>Volunteer Programs</p>
                <p>Community Events</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Chaitnya Health. All rights reserved. | Community-Driven | Culturally Sensitive | Grassroots Impact
          </div>
        </div>
      </footer>
    </div>
  );
}
