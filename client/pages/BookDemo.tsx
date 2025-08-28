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
  Calendar,
  Clock,
  Users,
  Building2,
  Briefcase,
  GraduationCap,
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  User,
  MapPin,
  Zap,
  BarChart3,
  Shield,
  Globe,
} from "lucide-react";

export default function BookDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    organizationType: "corporate", // corporate, institution, ngo
    teamSize: "",
    location: "",
    demoType: "full", // full, focused, overview
    preferredDate: "",
    preferredTime: "",
    specificNeeds: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate demo booking process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-calm/15 to-healing/25 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl mx-auto border-2 border-primary/20 bg-white/90 backdrop-blur-sm shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-wisdom to-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Demo Booked Successfully!
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for your interest in Chaitnya Health. Our team will
              contact you within 24 hours to confirm your demo session.
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-primary/10 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  What's Next?
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>
                    • Our sales team will call you to confirm the demo time
                  </li>
                  <li>
                    • You'll receive a calendar invite with meeting details
                  </li>
                  <li>• We'll prepare a customized demo based on your needs</li>
                  <li>• Post-demo, you'll get a detailed proposal</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1">
                <a href="/">Back to Home</a>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <a href="/login">Sign In</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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
                  India's First Step to Mental Wellness
                </p>
              </div>
            </div>

            <Button variant="ghost" asChild>
              <a href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Form */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
                🚀 Schedule Your Demo
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Book Your{" "}
                <span className="bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                  Personalized Demo
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                See how Chaitnya Health can transform mental wellness in your
                organization.
              </p>
            </div>

            <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Demo Booking Form</CardTitle>
                <CardDescription>
                  Fill out the details below and we'll schedule a personalized
                  demo for you.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Personal Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Work Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="email"
                            placeholder="your.email@company.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="tel"
                            placeholder="+91 99999 99999"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Job Role *
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="e.g. HR Director, Dean"
                            value={formData.role}
                            onChange={(e) =>
                              handleInputChange("role", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Organization Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Organization Information
                    </h3>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Organization Type *
                      </label>
                      <div className="flex space-x-2">
                        <Button
                          type="button"
                          variant={
                            formData.organizationType === "corporate"
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            handleInputChange("organizationType", "corporate")
                          }
                          className={
                            formData.organizationType === "corporate"
                              ? "bg-gradient-to-r from-support to-calm"
                              : ""
                          }
                        >
                          <Briefcase className="h-4 w-4 mr-2" />
                          Corporate
                        </Button>
                        <Button
                          type="button"
                          variant={
                            formData.organizationType === "institution"
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            handleInputChange("organizationType", "institution")
                          }
                          className={
                            formData.organizationType === "institution"
                              ? "bg-gradient-to-r from-wisdom to-primary"
                              : ""
                          }
                        >
                          <GraduationCap className="h-4 w-4 mr-2" />
                          Educational
                        </Button>
                        <Button
                          type="button"
                          variant={
                            formData.organizationType === "ngo"
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            handleInputChange("organizationType", "ngo")
                          }
                          className={
                            formData.organizationType === "ngo"
                              ? "bg-gradient-to-r from-growth to-healing"
                              : ""
                          }
                        >
                          <Heart className="h-4 w-4 mr-2" />
                          NGO
                        </Button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Organization Name *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Your organization name"
                            value={formData.company}
                            onChange={(e) =>
                              handleInputChange("company", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Team Size
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <select
                            value={formData.teamSize}
                            onChange={(e) =>
                              handleInputChange("teamSize", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select size</option>
                            <option value="1-50">1-50 people</option>
                            <option value="51-200">51-200 people</option>
                            <option value="201-1000">201-1000 people</option>
                            <option value="1000+">1000+ people</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="City, State"
                          value={formData.location}
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                          className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Demo Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Demo Preferences
                    </h3>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Demo Type
                      </label>
                      <div className="flex space-x-2">
                        <Button
                          type="button"
                          variant={
                            formData.demoType === "overview"
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            handleInputChange("demoType", "overview")
                          }
                        >
                          <Zap className="h-4 w-4 mr-2" />
                          Quick Overview (15 min)
                        </Button>
                        <Button
                          type="button"
                          variant={
                            formData.demoType === "focused"
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            handleInputChange("demoType", "focused")
                          }
                        >
                          <BarChart3 className="h-4 w-4 mr-2" />
                          Focused Demo (30 min)
                        </Button>
                        <Button
                          type="button"
                          variant={
                            formData.demoType === "full" ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => handleInputChange("demoType", "full")}
                        >
                          <Globe className="h-4 w-4 mr-2" />
                          Full Demo (45 min)
                        </Button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) =>
                              handleInputChange("preferredDate", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <select
                            value={formData.preferredTime}
                            onChange={(e) =>
                              handleInputChange("preferredTime", e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select time</option>
                            <option value="morning">
                              Morning (9 AM - 12 PM)
                            </option>
                            <option value="afternoon">
                              Afternoon (12 PM - 4 PM)
                            </option>
                            <option value="evening">
                              Evening (4 PM - 7 PM)
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Specific Needs or Questions
                      </label>
                      <textarea
                        placeholder="Tell us about your specific mental wellness challenges or what you'd like to see in the demo..."
                        value={formData.specificNeeds}
                        onChange={(e) =>
                          handleInputChange("specificNeeds", e.target.value)
                        }
                        rows={4}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-wisdom to-primary hover:opacity-90 transition-opacity"
                    disabled={
                      isLoading ||
                      !formData.name ||
                      !formData.email ||
                      !formData.company ||
                      !formData.role
                    }
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Booking Demo...
                      </>
                    ) : (
                      "Book Your Demo"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Benefits & Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                What You'll See in the Demo
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-wisdom" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Real-time Dashboard
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      See live mental wellness metrics, trends, and actionable
                      insights for your organization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-support/20 to-calm/20 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-support" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      AI-Powered Interventions
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Experience Vani and Saathi's personalized support and
                      early intervention capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-trust/20 to-growth/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-trust" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Privacy & Compliance
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about our HIPAA-compliant, anonymous tracking and
                      data protection measures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-growth/20 to-healing/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-growth" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Integration Options
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      See how Chaitnya Health integrates with your existing HR
                      systems and workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-wisdom/10 to-primary/10 rounded-2xl p-6 border border-wisdom/30">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-bold text-foreground">
                  Demo Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-wisdom">95%</div>
                    <div className="text-xs text-muted-foreground">
                      Move to Implementation
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-trust">45 min</div>
                    <div className="text-xs text-muted-foreground">
                      Average Demo Time
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-growth">24h</div>
                    <div className="text-xs text-muted-foreground">
                      Response Time
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-support">100%</div>
                    <div className="text-xs text-muted-foreground">
                      Customized Demos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 rounded-2xl p-6 border border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">
                    How long is the demo?
                  </p>
                  <p className="text-muted-foreground">
                    Demos range from 15-45 minutes based on your needs and
                    organization size.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Is there any cost for the demo?
                  </p>
                  <p className="text-muted-foreground">
                    All demos are completely free with no obligations.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Can I see real data?
                  </p>
                  <p className="text-muted-foreground">
                    We use anonymized sample data that represents real
                    organizational scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
