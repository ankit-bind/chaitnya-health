import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Rocket,
  CheckCircle,
  Clock,
  Users,
  Settings,
  Database,
  Shield,
  BarChart3,
  ArrowLeft,
  Calendar,
  Target,
  Zap,
  Award,
  BookOpen,
  Headphones,
  Code,
  Globe,
  Lock,
  Smartphone
} from "lucide-react";

export default function Implementation() {
  const [selectedPhase, setSelectedPhase] = useState(1);

  const implementationPhases = [
    {
      phase: 1,
      title: "Planning & Preparation",
      duration: "Week 1-2",
      description: "Foundation setup and requirement analysis",
      activities: [
        "Initial consultation and requirement gathering",
        "Technical architecture review",
        "Data security and compliance setup",
        "Team identification and role assignment",
        "Project timeline finalization"
      ],
      deliverables: [
        "Implementation roadmap",
        "Technical specification document",
        "Security compliance checklist",
        "Team access credentials"
      ]
    },
    {
      phase: 2,
      title: "Platform Configuration",
      duration: "Week 3-4",
      description: "System setup and customization",
      activities: [
        "Platform tenant creation and branding",
        "User authentication system integration",
        "Custom field and workflow configuration",
        "AI companion personality customization",
        "Initial data migration (if applicable)"
      ],
      deliverables: [
        "Configured platform environment",
        "Branded interface",
        "Integration test results",
        "Data migration report"
      ]
    },
    {
      phase: 3,
      title: "Integration & Testing",
      duration: "Week 5-6",
      description: "System integration and quality assurance",
      activities: [
        "HR/ERP system integration",
        "Single Sign-On (SSO) setup",
        "API connections testing",
        "User acceptance testing",
        "Security penetration testing"
      ],
      deliverables: [
        "Integration documentation",
        "Test reports and results",
        "Security certification",
        "Performance benchmarks"
      ]
    },
    {
      phase: 4,
      title: "Training & Onboarding",
      duration: "Week 7-8",
      description: "Team training and user onboarding",
      activities: [
        "Administrator training sessions",
        "End-user onboarding materials creation",
        "Support team training",
        "Documentation and knowledge base setup",
        "Pilot user group training"
      ],
      deliverables: [
        "Training completion certificates",
        "User guides and documentation",
        "Support playbooks",
        "Onboarding video library"
      ]
    },
    {
      phase: 5,
      title: "Launch & Go-Live",
      duration: "Week 9-10",
      description: "Platform launch and initial monitoring",
      activities: [
        "Soft launch with pilot user group",
        "Full platform launch",
        "Real-time monitoring and support",
        "User feedback collection",
        "Performance optimization"
      ],
      deliverables: [
        "Launch readiness checklist",
        "Monitoring dashboards",
        "User feedback reports",
        "Performance optimization plan"
      ]
    },
    {
      phase: 6,
      title: "Optimization & Scale",
      duration: "Week 11-12",
      description: "Performance optimization and scaling",
      activities: [
        "Usage analytics review",
        "Feature adoption analysis",
        "Performance tuning",
        "Advanced feature rollout",
        "Success metrics evaluation"
      ],
      deliverables: [
        "Analytics and insights report",
        "Optimization recommendations",
        "Feature adoption roadmap",
        "Success metrics dashboard"
      ]
    }
  ];

  const implementationTeam = [
    {
      role: "Implementation Manager",
      description: "Your dedicated point of contact for the entire implementation",
      responsibilities: ["Project coordination", "Timeline management", "Stakeholder communication"],
      icon: Target
    },
    {
      role: "Technical Architect",
      description: "Expert responsible for technical integration and customization",
      responsibilities: ["System architecture", "Integration design", "Technical reviews"],
      icon: Code
    },
    {
      role: "Training Specialist",
      description: "Ensures your team is fully trained and confident using the platform",
      responsibilities: ["Training program design", "User onboarding", "Knowledge transfer"],
      icon: BookOpen
    },
    {
      role: "Support Engineer",
      description: "Provides ongoing technical support throughout implementation",
      responsibilities: ["Technical troubleshooting", "Performance monitoring", "Issue resolution"],
      icon: Headphones
    }
  ];

  const integrationOptions = [
    {
      type: "Single Sign-On (SSO)",
      description: "Seamless login with your existing identity provider",
      protocols: ["SAML 2.0", "OAuth 2.0", "OpenID Connect"],
      providers: ["Active Directory", "Google Workspace", "Okta", "Azure AD"],
      icon: Lock
    },
    {
      type: "HR/ERP Integration",
      description: "Sync user data and organizational structure",
      systems: ["SAP", "Workday", "BambooHR", "ADP"],
      dataFlow: ["User provisioning", "Org structure sync", "Role mapping"],
      icon: Database
    },
    {
      type: "API Integration",
      description: "Custom integrations with your existing systems",
      features: ["RESTful APIs", "Webhooks", "Real-time data sync"],
      useCases: ["Custom dashboards", "Data analytics", "Workflow automation"],
      icon: Globe
    },
    {
      type: "Mobile App Integration",
      description: "Embed mental health features in your existing mobile app",
      options: ["SDK integration", "White-label app", "Deep linking"],
      platforms: ["iOS", "Android", "React Native", "Flutter"],
      icon: Smartphone
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
                <p className="text-xs text-muted-foreground -mt-1">Implementation Services</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Kickoff
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
              🚀 Expert Implementation
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Seamless{" "}
              <span className="bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                Implementation
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expert implementation team ensures a smooth, efficient rollout of your mental wellness platform with minimal disruption to your operations.
            </p>
          </div>

          {/* Implementation Overview */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-wisdom" />
                </div>
                <CardTitle>12-Week Timeline</CardTitle>
                <CardDescription>
                  Structured implementation process from planning to optimization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-trust/20 bg-white/90 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-trust/20 to-growth/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-trust" />
                </div>
                <CardTitle>Dedicated Team</CardTitle>
                <CardDescription>
                  Expert implementation specialists assigned to your project
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-support/20 bg-white/90 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-support/20 to-calm/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-support" />
                </div>
                <CardTitle>Zero Downtime</CardTitle>
                <CardDescription>
                  Seamless integration with no disruption to existing systems
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Implementation Timeline */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Implementation Timeline</h2>
              <p className="text-muted-foreground">Six-phase approach ensuring successful platform deployment</p>
            </div>

            {/* Phase Navigation */}
            <div className="flex flex-wrap justify-center gap-2">
              {implementationPhases.map((phase) => (
                <Button
                  key={phase.phase}
                  variant={selectedPhase === phase.phase ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPhase(phase.phase)}
                  className={selectedPhase === phase.phase ? "bg-gradient-to-r from-wisdom to-primary" : ""}
                >
                  Phase {phase.phase}
                </Button>
              ))}
            </div>

            {/* Selected Phase Details */}
            {implementationPhases.map((phase) => (
              selectedPhase === phase.phase && (
                <Card key={phase.phase} className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <Badge className="bg-primary/10 text-primary border-primary/30 mb-2">
                          Phase {phase.phase}
                        </Badge>
                        <CardTitle className="text-2xl">{phase.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{phase.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-foreground">{phase.duration}</div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Activities */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Key Activities</h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Deliverables</h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
          </div>

          {/* Implementation Team */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Implementation Team</h2>
              <p className="text-muted-foreground">Dedicated experts ensuring your success</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {implementationTeam.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <Card key={index} className="border-2 border-border/50 bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-wisdom/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-semibold text-foreground">{member.role}</h3>
                            <p className="text-sm text-muted-foreground">{member.description}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-foreground mb-1">Key Responsibilities:</h4>
                            <ul className="text-xs text-muted-foreground space-y-0.5">
                              {member.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex}>• {resp}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Integration Options */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Integration Capabilities</h2>
              <p className="text-muted-foreground">Seamless connection with your existing systems</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {integrationOptions.map((integration, index) => {
                const IconComponent = integration.icon;
                return (
                  <Card key={index} className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-wisdom" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{integration.type}</CardTitle>
                          <CardDescription>{integration.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        {integration.protocols && (
                          <div>
                            <h4 className="text-sm font-semibold text-foreground">Supported Protocols:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {integration.protocols.map((protocol, protocolIndex) => (
                                <Badge key={protocolIndex} variant="outline" className="text-xs">
                                  {protocol}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {integration.providers && (
                          <div>
                            <h4 className="text-sm font-semibold text-foreground">Compatible Providers:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {integration.providers.map((provider, providerIndex) => (
                                <Badge key={providerIndex} variant="outline" className="text-xs">
                                  {provider}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {integration.systems && (
                          <div>
                            <h4 className="text-sm font-semibold text-foreground">Supported Systems:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {integration.systems.map((system, systemIndex) => (
                                <Badge key={systemIndex} variant="outline" className="text-xs">
                                  {system}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {integration.features && (
                          <div>
                            <h4 className="text-sm font-semibold text-foreground">Features:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {integration.features.map((feature, featureIndex) => (
                                <Badge key={featureIndex} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Success Metrics */}
          <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Implementation Success Metrics</CardTitle>
              <CardDescription className="text-center">How we measure implementation success</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-wisdom">98%</div>
                  <div className="text-sm text-muted-foreground">On-time Delivery</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-trust">95%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-support">7 days</div>
                  <div className="text-sm text-muted-foreground">Average Go-Live Time</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-growth">100%</div>
                  <div className="text-sm text-muted-foreground">Zero-Downtime Implementations</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-wisdom/10 to-primary/10 rounded-2xl p-8 text-center border border-wisdom/30">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Implementation?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our implementation experts are ready to help you deploy your mental wellness platform successfully. Get started with a detailed planning session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-wisdom to-primary" size="lg">
                <Rocket className="h-4 w-4 mr-2" />
                Start Implementation
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Planning Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
