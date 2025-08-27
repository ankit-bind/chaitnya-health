import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Home, ArrowLeft, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-calm/5 to-healing/10 flex items-center justify-center">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
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
          </div>
        </div>
      </nav>

      <div className="text-center space-y-8 px-4 max-w-md mx-auto">
        <div className="space-y-4">
          <div className="w-32 h-32 bg-gradient-to-br from-calm/20 to-wisdom/20 rounded-full flex items-center justify-center mx-auto">
            <div className="text-6xl">🪷</div>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This page doesn't exist, but your mental wellness journey does. 
            Let us guide you back to finding the support you need.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-to-r from-wisdom to-primary">
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </a>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()} className="border-wisdom/30">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        <div className="pt-8 border-t border-border/50 space-y-4">
          <p className="text-sm text-muted-foreground">
            <strong>Need immediate support?</strong>
          </p>
          <div className="space-y-2 text-sm">
            <Button variant="outline" size="sm" className="w-full border-red-200 text-red-700 hover:bg-red-50">
              <Phone className="mr-2 h-4 w-4" />
              Crisis Helpline: 988
            </Button>
            <p className="text-xs text-muted-foreground">
              24/7 Suicide & Crisis Lifeline - Free & Confidential
            </p>
          </div>
          
          <div className="text-xs text-muted-foreground pt-4">
            <p>🇮🇳 Supporting mental wellness across India</p>
            <p>Available in Hindi, English & Regional Languages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
