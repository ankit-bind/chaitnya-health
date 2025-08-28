import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Check,
  X,
  Users,
  Building2,
  GraduationCap,
  Zap,
  Shield,
  BarChart3,
  Clock,
  ArrowLeft,
  Calculator,
  Phone,
  Mail,
  Star,
  Crown,
  Sparkles
} from "lucide-react";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [userCount, setUserCount] = useState(1000);

  const pricingPlans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for small institutions getting started",
      monthlyPrice: 25,
      annualPrice: 20,
      maxUsers: 500,
      icon: Users,
      color: "from-wisdom to-primary",
      popular: false,
      features: [
        "AI Companions (Vani & Saathi)",
        "Basic analytics dashboard",
        "Email support",
        "Monthly wellness reports",
        "Up to 500 users",
        "Basic integration",
        "Community support forum"
      ],
      notIncluded: [
        "Therapist network access",
        "Custom branding",
        "Priority support",
        "Advanced analytics"
      ]
    },
    {
      id: "professional",
      name: "Professional",
      description: "For growing institutions with advanced needs",
      monthlyPrice: 45,
      annualPrice: 36,
      maxUsers: 2000,
      icon: Building2,
      color: "from-trust to-growth",
      popular: true,
      features: [
        "Everything in Starter",
        "Therapist network integration",
        "Advanced analytics & insights",
        "24/7 chat support",
        "Custom branding",
        "Up to 2,000 users",
        "API access",
        "Priority support",
        "Bi-weekly check-ins"
      ],
      notIncluded: [
        "White-label solution",
        "Dedicated success manager",
        "Custom integrations"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Complete solution for large organizations",
      monthlyPrice: 85,
      annualPrice: 68,
      maxUsers: "Unlimited",
      icon: Crown,
      color: "from-support to-calm",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited users",
        "White-label solution",
        "Dedicated success manager",
        "Custom integrations",
        "Advanced AI customization",
        "Full data ownership",
        "SLA guarantee",
        "Custom training programs",
        "Priority phone support"
      ],
      notIncluded: []
    }
  ];

  const addOns = [
    {
      name: "Additional Therapist Sessions",
      price: "₹5 per session",
      description: "Extra sessions beyond your plan limit"
    },
    {
      name: "Custom Integration",
      price: "₹25,000 one-time",
      description: "Connect with your existing HR/ERP systems"
    },
    {
      name: "Advanced Analytics Package",
      price: "₹10,000/month",
      description: "Advanced reporting and predictive insights"
    },
    {
      name: "24/7 Crisis Support",
      price: "₹15,000/month",
      description: "Emergency mental health response team"
    }
  ];

  const calculatePrice = (plan: typeof pricingPlans[0]) => {
    const basePrice = billingPeriod === "monthly" ? plan.monthlyPrice : plan.annualPrice;
    if (plan.maxUsers === "Unlimited") return basePrice;
    
    const additionalUsers = Math.max(0, userCount - plan.maxUsers);
    const additionalCost = additionalUsers * (billingPeriod === "monthly" ? 2 : 1.6);
    
    return basePrice + additionalCost;
  };

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
                <p className="text-xs text-muted-foreground -mt-1">B2B SaaS Pricing</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Calculator className="h-4 w-4 mr-2" />
                ROI Calculator
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
              💰 Transparent Pricing
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Simple, Scalable{" "}
              <span className="bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your institution. All plans include core mental health features with transparent, per-user pricing.
            </p>
          </div>

          {/* Pricing Controls */}
          <div className="flex flex-col items-center space-y-6">
            {/* Billing Period Toggle */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Monthly</span>
              <div className="relative">
                <input
                  type="checkbox"
                  id="billing-toggle"
                  checked={billingPeriod === "annual"}
                  onChange={(e) => setBillingPeriod(e.target.checked ? "annual" : "monthly")}
                  className="sr-only"
                />
                <label
                  htmlFor="billing-toggle"
                  className="flex items-center cursor-pointer"
                >
                  <div className="w-14 h-8 bg-gray-300 rounded-full relative transition-colors duration-200 ease-in-out">
                    <div
                      className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform duration-200 ease-in-out ${
                        billingPeriod === "annual" ? "translate-x-7" : "translate-x-1"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
              <span className="text-sm text-muted-foreground">
                Annual 
                <Badge className="ml-2 bg-success/10 text-success border-success/30">
                  Save 20%
                </Badge>
              </span>
            </div>

            {/* User Count Slider */}
            <div className="w-full max-w-md space-y-4">
              <div className="text-center">
                <label className="text-sm font-medium text-foreground">Number of Users</label>
                <div className="text-2xl font-bold text-primary">{userCount.toLocaleString()}</div>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={userCount}
                onChange={(e) => setUserCount(parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>100</span>
                <span>10,000+</span>
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => {
              const IconComponent = plan.icon;
              const calculatedPrice = calculatePrice(plan);
              
              return (
                <Card 
                  key={plan.id}
                  className={`border-2 bg-white/90 backdrop-blur-sm relative ${
                    plan.popular 
                      ? 'border-primary shadow-xl scale-105' 
                      : 'border-border/50 hover:border-primary/50'
                  } transition-all hover:shadow-lg`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-wisdom to-primary text-white px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color}/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`h-8 w-8 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`} />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-foreground">
                        ₹{calculatedPrice.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        per user/{billingPeriod === "monthly" ? "month" : "year"}
                      </div>
                      {billingPeriod === "annual" && (
                        <div className="text-xs text-success">
                          Save ₹{((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString()} per user/year
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Included Features:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.notIncluded.length > 0 && (
                      <div className="space-y-3 pt-4 border-t border-border/50">
                        <h4 className="font-semibold text-muted-foreground">Not Included:</h4>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <X className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button 
                      className={`w-full ${plan.popular ? `bg-gradient-to-r ${plan.color}` : 'bg-gradient-to-r from-muted to-muted-foreground'}`}
                      size="lg"
                    >
                      {plan.popular && <Sparkles className="h-4 w-4 mr-2" />}
                      Get Started with {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Add-ons */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Add-on Services</h2>
              <p className="text-muted-foreground">Enhance your plan with additional features and services</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <Card key={index} className="border-2 border-border/50 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">{addon.name}</h3>
                        <p className="text-sm text-muted-foreground">{addon.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{addon.price}</div>
                        <Button variant="outline" size="sm" className="mt-2">
                          Add to Plan
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Feature Comparison</CardTitle>
              <CardDescription className="text-center">Compare all features across our plans</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Features</th>
                      <th className="text-center p-4 font-semibold">Starter</th>
                      <th className="text-center p-4 font-semibold">Professional</th>
                      <th className="text-center p-4 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {[
                      ["AI Companions", true, true, true],
                      ["Basic Analytics", true, true, true],
                      ["Email Support", true, true, true],
                      ["Therapist Network", false, true, true],
                      ["Advanced Analytics", false, true, true],
                      ["24/7 Support", false, true, true],
                      ["Custom Branding", false, true, true],
                      ["API Access", false, true, true],
                      ["White-label", false, false, true],
                      ["Dedicated Manager", false, false, true],
                      ["Custom Integrations", false, false, true],
                      ["SLA Guarantee", false, false, true]
                    ].map(([feature, starter, professional, enterprise], index) => (
                      <tr key={index} className="hover:bg-muted/30">
                        <td className="p-4 font-medium">{feature}</td>
                        <td className="p-4 text-center">
                          {starter ? <Check className="h-4 w-4 text-success mx-auto" /> : <X className="h-4 w-4 text-muted-foreground mx-auto" />}
                        </td>
                        <td className="p-4 text-center">
                          {professional ? <Check className="h-4 w-4 text-success mx-auto" /> : <X className="h-4 w-4 text-muted-foreground mx-auto" />}
                        </td>
                        <td className="p-4 text-center">
                          {enterprise ? <Check className="h-4 w-4 text-success mx-auto" /> : <X className="h-4 w-4 text-muted-foreground mx-auto" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Can I change plans anytime?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated."
                },
                {
                  q: "What happens if I exceed my user limit?",
                  a: "We automatically scale your plan and charge ₹2/month (or ₹1.6/month annually) for each additional user."
                },
                {
                  q: "Is there a setup fee?",
                  a: "No setup fees for Starter and Professional plans. Enterprise plans include complimentary setup and onboarding."
                },
                {
                  q: "Do you offer discounts for educational institutions?",
                  a: "Yes, we offer special education pricing with up to 30% discount for qualified educational institutions."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, bank transfers, and offer NET-30 payment terms for Enterprise customers."
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, all plans come with a 14-day free trial. No credit card required to get started."
                }
              ].map((faq, index) => (
                <Card key={index} className="border border-border/50 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-wisdom/10 to-primary/10 rounded-2xl p-8 text-center border border-wisdom/30">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Mental Wellness?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required, no setup fees, and full access to all features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-wisdom to-primary" size="lg">
                <Zap className="h-4 w-4 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Talk to Sales
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-1">
                <BarChart3 className="h-4 w-4" />
                <span>Proven ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
