import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Rocket,
  Users,
  Calendar,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowLeft,
  Building2,
  GraduationCap,
  BarChart3,
  Clock,
  Zap,
  Shield,
  BookOpen,
  Mail,
  Phone,
} from "lucide-react";

export default function PilotPrograms() {
  const [selectedProgram, setSelectedProgram] = useState("basic");

  const pilotPrograms = [
    {
      id: "basic",
      name: "Basic Pilot",
      duration: "3 months",
      participants: "Up to 500 students/employees",
      price: "Free",
      features: [
        "AI Companion (Vani & Saathi) access",
        "Basic analytics dashboard",
        "Email support",
        "Monthly wellness reports",
        "Basic integration setup",
      ],
      ideal: "Small institutions wanting to test mental health solutions",
      color: "from-wisdom to-primary",
    },
    {
      id: "standard",
      name: "Standard Pilot",
      duration: "6 months",
      participants: "Up to 2,000 students/employees",
      price: "₹50,000",
      features: [
        "Full platform access",
        "Advanced analytics & insights",
        "Therapist network integration",
        "24/7 support",
        "Custom branding",
        "Bi-weekly progress reviews",
        "Crisis intervention protocols",
      ],
      ideal: "Medium institutions ready for comprehensive implementation",
      color: "from-trust to-growth",
    },
    {
      id: "enterprise",
      name: "Enterprise Pilot",
      duration: "12 months",
      participants: "Unlimited",
      price: "₹2,50,000",
      features: [
        "Complete enterprise solution",
        "Custom integrations",
        "Dedicated success manager",
        "Advanced AI customization",
        "White-label options",
        "Full data ownership",
        "Custom training programs",
        "Priority support",
      ],
      ideal: "Large institutions seeking full-scale transformation",
      color: "from-support to-calm",
    },
  ];

  const successStories = [
    {
      institution: "Delhi University",
      type: "Educational Institution",
      participants: "15,000 students",
      duration: "6 months",
      results: [
        "40% reduction in reported anxiety",
        "60% increase in help-seeking behavior",
        "90% student satisfaction",
      ],
      quote:
        "Chaitnya Health transformed how we approach student mental wellness. The AI companions provided 24/7 support that our counseling center couldn't match.",
    },
    {
      institution: "TechCorp India",
      type: "Corporate",
      participants: "5,000 employees",
      duration: "3 months",
      results: [
        "25% improvement in work-life balance scores",
        "50% increase in mental health awareness",
        "35% reduction in sick leaves",
      ],
      quote:
        "Our employees love the convenience of having mental health support available anytime. The impact on productivity and wellbeing has been remarkable.",
    },
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
                <a
                  href="/"
                  className="text-2xl font-bold bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent"
                >
                  Chaitnya Health
                </a>
                <p className="text-xs text-muted-foreground -mt-1">
                  Pilot Programs
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Demo
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
              🚀 Risk-Free Trial
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Pilot{" "}
              <span className="bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Start your mental wellness transformation journey with our
              carefully designed pilot programs. Test, measure, and scale at
              your own pace.
            </p>
          </div>

          {/* Why Pilot Programs */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-wisdom" />
                </div>
                <CardTitle>Prove ROI</CardTitle>
                <CardDescription>
                  Demonstrate measurable impact on mental wellness metrics
                  before full-scale implementation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-trust/20 bg-white/90 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-trust/20 to-growth/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-trust" />
                </div>
                <CardTitle>Fast Setup</CardTitle>
                <CardDescription>
                  Get started in days, not months. Minimal IT requirements and
                  seamless integration
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-support/20 bg-white/90 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-support/20 to-calm/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-support" />
                </div>
                <CardTitle>Risk-Free</CardTitle>
                <CardDescription>
                  No long-term commitments. Test our platform with confidence
                  and scale when ready
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Pilot Program Options */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Choose Your Pilot Program
              </h2>
              <p className="text-muted-foreground">
                Tailored programs for different institution sizes and needs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {pilotPrograms.map((program) => (
                <Card
                  key={program.id}
                  className={`border-2 bg-white/90 backdrop-blur-sm cursor-pointer transition-all hover:shadow-xl ${
                    selectedProgram === program.id
                      ? "border-primary shadow-lg scale-105"
                      : "border-border/50 hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedProgram(program.id)}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${program.color}/20 rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <Rocket
                        className={`h-8 w-8 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}
                      />
                    </div>
                    <CardTitle className="text-2xl">{program.name}</CardTitle>
                    <div className="text-3xl font-bold text-foreground">
                      {program.price}
                    </div>
                    <CardDescription className="text-base">
                      {program.ideal}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Duration</span>
                        </div>
                        <div className="font-semibold">{program.duration}</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>Participants</span>
                        </div>
                        <div className="font-semibold text-sm">
                          {program.participants}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Included Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${program.color}`}
                    >
                      Start {program.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Pilot Program Success Stories
              </h2>
              <p className="text-muted-foreground">
                Real results from institutions that started with our pilot
                programs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {story.institution}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>{story.type}</span>
                          <span>•</span>
                          <span>{story.participants}</span>
                          <span>•</span>
                          <span>{story.duration}</span>
                        </div>
                      </div>
                      <Badge className="bg-success/10 text-success border-success/30">
                        <Award className="h-3 w-3 mr-1" />
                        Success
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                      "{story.quote}"
                    </blockquote>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Key Results:</h4>
                      <ul className="space-y-1">
                        {story.results.map((result, resultIndex) => (
                          <li
                            key={resultIndex}
                            className="flex items-start space-x-2 text-sm"
                          >
                            <TrendingUp className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pilot Program Timeline */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Pilot Program Timeline
              </h2>
              <p className="text-muted-foreground">
                What to expect during your pilot journey
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-wisdom to-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold">Setup & Onboarding</h3>
                <p className="text-sm text-muted-foreground">
                  Week 1-2: Platform configuration, team training, and initial
                  user registration
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-trust to-growth rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold">Launch & Adoption</h3>
                <p className="text-sm text-muted-foreground">
                  Week 3-8: User engagement campaigns, initial data collection,
                  and feedback gathering
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-support to-calm rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold">Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Week 9-12: Platform optimization, advanced feature rollout,
                  and impact measurement
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-growth to-healing rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold">Results & Scale</h3>
                <p className="text-sm text-muted-foreground">
                  Final month: Impact analysis, ROI calculation, and scaling
                  recommendations
                </p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                What's Included in Every Pilot Program
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: BookOpen,
                    title: "Training & Onboarding",
                    desc: "Comprehensive training for your team and users",
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics Dashboard",
                    desc: "Real-time insights and progress tracking",
                  },
                  {
                    icon: Users,
                    title: "Dedicated Support",
                    desc: "Expert guidance throughout your pilot journey",
                  },
                  {
                    icon: Shield,
                    title: "Data Security",
                    desc: "HIPAA-compliant data protection and privacy",
                  },
                  {
                    icon: Target,
                    title: "Success Metrics",
                    desc: "Clear KPIs and ROI measurement framework",
                  },
                  {
                    icon: Award,
                    title: "Best Practices",
                    desc: "Proven strategies for successful implementation",
                  },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-wisdom/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-wisdom/10 to-primary/10 rounded-2xl p-8 text-center border border-wisdom/30">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Pilot Program?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take the first step towards transforming mental wellness at your
              institution. Our pilot programs are designed for success with
              minimal risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-wisdom to-primary"
                size="lg"
              >
                <Rocket className="h-4 w-4 mr-2" />
                Start Free Pilot
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>pilots@chaitnyahealth.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
