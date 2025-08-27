import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Home, ArrowLeft } from "lucide-react";

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
      <nav className="absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-support rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">MindfulSpace</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="text-center space-y-8 px-4 max-w-md mx-auto">
        <div className="space-y-4">
          <div className="w-32 h-32 bg-gradient-to-br from-calm/20 to-primary/20 rounded-full flex items-center justify-center mx-auto">
            <div className="text-6xl">🌸</div>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            It looks like this page doesn't exist. Don't worry though – we're here to help you find your way back to your mental wellness journey.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-to-r from-primary to-support">
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </a>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Need immediate support?{" "}
            <a href="tel:988" className="text-primary hover:underline font-medium">
              Call 988 for the Suicide & Crisis Lifeline
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
