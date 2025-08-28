import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Building2,
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Shield,
  CheckCircle,
  Users,
  BarChart3,
  Briefcase
} from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState("institution"); // "institution", "admin", or "corporate"

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demo purposes - you would integrate with real authentication here
    alert(`Login successful for ${email} as ${loginType}!`);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-calm/15 to-healing/25 flex items-center justify-center p-4">
      {/* Navigation Header */}
      <div className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border">
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
                <p className="text-xs text-muted-foreground -mt-1">India's First Step to Mental Wellness</p>
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

      {/* Login Container */}
      <div className="w-full max-w-6xl mx-auto mt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Login Form */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
                🏢 Institutional Access
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Welcome Back to{" "}
                <span className="bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                  Chaitnya Health
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Access your institutional dashboard to monitor student and employee mental wellness.
              </p>
            </div>

            <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader className="space-y-4">
                <div className="flex justify-center space-x-2">
                  <Button
                    variant={loginType === "institution" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLoginType("institution")}
                    className={loginType === "institution" ? "bg-gradient-to-r from-wisdom to-primary" : ""}
                  >
                    <Building2 className="h-4 w-4 mr-2" />
                    Institution
                  </Button>
                  <Button
                    variant={loginType === "admin" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLoginType("admin")}
                    className={loginType === "admin" ? "bg-gradient-to-r from-trust to-growth" : ""}
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Admin
                  </Button>
                </div>
                
                <div className="text-center">
                  <CardTitle className="text-2xl">
                    {loginType === "institution" ? "Institution Login" : "Admin Access"}
                  </CardTitle>
                  <CardDescription>
                    {loginType === "institution" 
                      ? "Access your institutional wellness dashboard"
                      : "Platform administration and management"
                    }
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="email"
                          placeholder={loginType === "institution" ? "admin@yourinstitution.edu" : "admin@chaitnyahealth.com"}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 pr-12 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <a href="#" className="text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-wisdom to-primary hover:opacity-90 transition-opacity"
                    disabled={isLoading || !email || !password}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Signing In...
                      </>
                    ) : (
                      `Sign In to ${loginType === "institution" ? "Dashboard" : "Admin Panel"}`
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <a href="#" className="text-primary hover:underline font-medium">
                      Request institutional access
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Features & Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                Institutional Dashboard Features
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-wisdom" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Real-time Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      Monitor campus mental health trends, intervention effectiveness, and wellness scores.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-trust/20 to-growth/20 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-trust" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Student Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      Anonymous wellness tracking with early intervention alerts and support recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-growth/20 to-healing/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-growth" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Privacy Compliant</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete anonymity with encrypted data and zero personal information storage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-support/20 to-calm/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-support" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Policy Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Seamless integration with your existing wellness policies and counseling centers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-wisdom/10 to-primary/10 rounded-2xl p-6 border border-wisdom/30">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-bold text-foreground">Trusted by 200+ Institutions</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-wisdom">500K+</div>
                    <div className="text-xs text-muted-foreground">Active Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-trust">95%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-growth">24/7</div>
                    <div className="text-xs text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 text-xs text-muted-foreground bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
          <Shield className="h-3 w-3" />
          <span>Secure institutional access • HIPAA compliant • End-to-end encrypted</span>
        </div>
      </div>
    </div>
  );
}
