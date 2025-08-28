import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users,
  HandHeart,
  MapPin,
  Target,
  TrendingUp,
  Award,
  Building2,
  ArrowLeft,
  CheckCircle,
  Globe,
  Lightbulb,
  BookOpen,
  Calendar,
  Phone,
  Mail,
  ExternalLink
} from "lucide-react";

export default function NGOIntegration() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All NGOs" },
    { id: "mental-health", name: "Mental Health" },
    { id: "youth", name: "Youth Development" },
    { id: "community", name: "Community Outreach" },
    { id: "education", name: "Education" },
    { id: "women", name: "Women Empowerment" }
  ];

  const partnerNGOs = [
    {
      id: 1,
      name: "Mental Health Foundation India",
      category: "Mental Health",
      description: "Leading organization providing mental health awareness and support across India",
      location: "Pan India",
      beneficiaries: "50,000+",
      programs: ["Awareness Campaigns", "Counselor Training", "Community Support"],
      impact: "Reduced stigma by 40% in served communities",
      website: "https://mentalhealthfoundation.in",
      contact: "contact@mhfi.org",
      verified: true
    },
    {
      id: 2,
      name: "Youth Mental Wellness Society",
      category: "Youth Development",
      description: "Focused on providing mental health support specifically for adolescents and young adults",
      location: "Delhi, Mumbai, Bangalore",
      beneficiaries: "25,000+",
      programs: ["Peer Support Groups", "School Programs", "Crisis Intervention"],
      impact: "85% improvement in youth mental health scores",
      website: "https://youthmws.org",
      contact: "help@youthmws.org",
      verified: true
    },
    {
      id: 3,
      name: "Community Care Collective",
      category: "Community Outreach",
      description: "Grassroots organization working in rural and urban slums to provide mental health access",
      location: "Rural Maharashtra, Gujarat",
      beneficiaries: "30,000+",
      programs: ["Mobile Clinics", "Village Outreach", "Women's Support Groups"],
      impact: "Reached 500+ villages with mental health services",
      website: "https://communitycare.org",
      contact: "outreach@communitycare.org",
      verified: true
    }
  ];

  const integrationFeatures = [
    {
      title: "Seamless Data Sharing",
      description: "Secure, HIPAA-compliant data sharing between Chaitnya Health platform and NGO systems",
      icon: Globe,
      color: "from-wisdom to-primary"
    },
    {
      title: "Joint Training Programs",
      description: "Collaborative training for NGO counselors using our AI-powered training modules",
      icon: BookOpen,
      color: "from-trust to-growth"
    },
    {
      title: "Community Impact Tracking",
      description: "Real-time analytics to measure and improve mental health outcomes in communities",
      icon: TrendingUp,
      color: "from-support to-calm"
    },
    {
      title: "Resource Optimization",
      description: "AI-powered resource allocation to maximize impact and reach underserved populations",
      icon: Target,
      color: "from-growth to-healing"
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
                <p className="text-xs text-muted-foreground -mt-1">NGO Integration Platform</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <HandHeart className="h-4 w-4 mr-2" />
                Join Network
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
        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
              🤝 Community Partnership
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              NGO{" "}
              <span className="bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                Integration
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Partnering with NGOs across India to democratize mental health support and create lasting community impact through technology and collaboration.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-wisdom mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Partner NGOs</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-trust/20 bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-trust mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-support/20 bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-support mb-2">25</div>
                <div className="text-sm text-muted-foreground">States Covered</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-growth/20 bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-growth mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Villages Reached</div>
              </CardContent>
            </Card>
          </div>

          {/* Integration Features */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Integration Capabilities</h2>
              <p className="text-muted-foreground">Seamless technology integration to amplify NGO impact</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {integrationFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color}/20 rounded-lg flex items-center justify-center mb-4`}>
                        <IconComponent className={`h-6 w-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Partner NGOs */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Our NGO Partners</h2>
                <p className="text-muted-foreground">Verified organizations making a difference in mental health</p>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "bg-gradient-to-r from-wisdom to-primary" : ""}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-1 gap-6">
              {partnerNGOs.map((ngo) => (
                <Card key={ngo.id} className="border-2 border-border/50 bg-white/90 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* NGO Info */}
                      <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-xl font-semibold text-foreground">{ngo.name}</h3>
                              {ngo.verified && (
                                <Badge className="bg-success/10 text-success border-success/30">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                              {ngo.category}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-muted-foreground">{ngo.description}</p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{ngo.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{ngo.beneficiaries} beneficiaries</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{ngo.contact}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <ExternalLink className="h-4 w-4 text-muted-foreground" />
                              <a href={ngo.website} className="text-sm text-primary hover:underline">
                                Visit Website
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Programs</h4>
                          <div className="flex flex-wrap gap-2">
                            {ngo.programs.map((program, index) => (
                              <Badge key={index} variant="outline" className="bg-muted/50">
                                {program}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Impact & Actions */}
                      <div className="space-y-6">
                        <div className="bg-success/10 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Award className="h-4 w-4 text-success" />
                            <span className="font-semibold text-success">Impact Story</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{ngo.impact}</p>
                        </div>

                        <div className="space-y-3">
                          <Button className="w-full bg-gradient-to-r from-wisdom to-primary">
                            <HandHeart className="h-4 w-4 mr-2" />
                            Partner With Us
                          </Button>
                          <Button variant="outline" className="w-full">
                            <Phone className="h-4 w-4 mr-2" />
                            Contact NGO
                          </Button>
                          <Button variant="outline" className="w-full">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            View Impact Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">How NGO Integration Works</h2>
              <p className="text-muted-foreground">Simple steps to integrate and amplify your organization's impact</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-wisdom to-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold">Partnership Application</h3>
                <p className="text-muted-foreground">Submit your NGO details and get verified by our team</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-trust to-growth rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold">Platform Integration</h3>
                <p className="text-muted-foreground">Seamless integration of your systems with our platform</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-support to-calm rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold">Impact Amplification</h3>
                <p className="text-muted-foreground">Leverage AI and analytics to maximize your community impact</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-wisdom/10 to-primary/10 rounded-2xl p-8 text-center border border-wisdom/30">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Join Our NGO Network?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Become part of India's largest mental health NGO network. Together, we can democratize mental wellness and create lasting change in communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-wisdom to-primary" size="lg">
                <HandHeart className="h-4 w-4 mr-2" />
                Apply for Partnership
              </Button>
              <Button variant="outline" size="lg">
                <Lightbulb className="h-4 w-4 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
