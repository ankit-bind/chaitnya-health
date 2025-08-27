import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Users, MessageCircle, Calendar, Shield, ChevronRight, Menu, X } from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI-Powered Insights",
      description: "Get personalized mental health insights powered by advanced AI that understands your unique journey."
    },
    {
      icon: <Heart className="h-8 w-8 text-healing" />,
      title: "Emotional Wellness",
      description: "Track your mood, identify patterns, and develop healthy coping strategies with guided exercises."
    },
    {
      icon: <Users className="h-8 w-8 text-support" />,
      title: "Community Support",
      description: "Connect with others on similar journeys in our safe, moderated support communities."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-growth" />,
      title: "Professional Therapy",
      description: "Access licensed therapists for video sessions, chat support, and personalized treatment plans."
    },
    {
      icon: <Calendar className="h-8 w-8 text-calm" />,
      title: "Daily Check-ins",
      description: "Build healthy habits with guided daily check-ins, mindfulness exercises, and progress tracking."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Privacy First",
      description: "Your mental health data is encrypted, private, and never shared without your explicit consent."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Working Professional",
      content: "This app helped me manage my anxiety and connect with others who truly understand. The AI insights were surprisingly accurate.",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "College Student",
      content: "The daily check-ins and mood tracking helped me identify triggers I never noticed before. Game changer for my mental health.",
      rating: 5
    },
    {
      name: "Dr. Jennifer L.",
      role: "Licensed Therapist",
      content: "I recommend this platform to my clients. The tools are evidence-based and the privacy standards are excellent.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-calm/5 to-healing/10">
      {/* Navigation */}
      <nav className="relative bg-white/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-support rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">MindfulSpace</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
              <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">Stories</a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-support">Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
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
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-border/50 shadow-lg">
              <div className="px-4 py-4 space-y-4">
                <a href="#features" className="block text-foreground/80 hover:text-foreground transition-colors">Features</a>
                <a href="#about" className="block text-foreground/80 hover:text-foreground transition-colors">About</a>
                <a href="#testimonials" className="block text-foreground/80 hover:text-foreground transition-colors">Stories</a>
                <a href="#contact" className="block text-foreground/80 hover:text-foreground transition-colors">Contact</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm">Sign In</Button>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-support">Get Started</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-calm/20 text-calm-foreground border-calm/30">
                  Your Mental Health Journey Starts Here
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Find Peace in the{" "}
                  <span className="bg-gradient-to-r from-primary via-support to-growth bg-clip-text text-transparent">
                    Digital Age
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Connect with licensed therapists, track your mental wellness, and join a supportive community. 
                  Your journey to better mental health is just one click away.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-support hover:opacity-90 transition-opacity">
                  Start Your Journey
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Talk to a Therapist
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-growth" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-support" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>50K+ Members</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-calm to-primary rounded-full flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Daily Wellness Check</h3>
                      <p className="text-sm text-muted-foreground">How are you feeling today?</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" className="bg-healing/10 hover:bg-healing/20 border-healing/30">
                      😊 Great
                    </Button>
                    <Button variant="outline" size="sm" className="bg-calm/10 hover:bg-calm/20 border-calm/30">
                      😌 Good
                    </Button>
                    <Button variant="outline" size="sm" className="bg-secondary/50 hover:bg-secondary/70">
                      😐 Okay
                    </Button>
                    <Button variant="outline" size="sm" className="bg-muted/50 hover:bg-muted/70">
                      😔 Not Great
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">This week's progress</span>
                      <span className="text-growth font-medium">+12% better</span>
                    </div>
                    <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-growth to-healing rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Why Choose MindfulSpace
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Everything you need for better mental health
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with evidence-based mental health practices 
              to provide comprehensive support for your wellbeing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-healing/10 text-healing-foreground border-healing/20">
              Real Stories, Real Impact
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Hear from our community
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Heart key={i} className="h-4 w-4 fill-support text-support" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-support/10 to-growth/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to prioritize your mental health?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of people who have transformed their mental wellness with MindfulSpace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-support hover:opacity-90 transition-opacity">
              Get Started for Free
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-support rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">MindfulSpace</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Empowering mental wellness through technology, community, and professional care. 
                Your journey to better mental health starts here.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Platform</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Features</p>
                <p>Therapy</p>
                <p>Community</p>
                <p>Resources</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Help Center</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 MindfulSpace. All rights reserved. | HIPAA Compliant | SSL Secured
          </div>
        </div>
      </footer>
    </div>
  );
}
