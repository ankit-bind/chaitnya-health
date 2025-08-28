import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  BarChart3,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Shield,
  ArrowLeft,
  Building2,
  Activity,
  Eye,
  Download,
  Filter,
  RefreshCw
} from "lucide-react";

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState("week");

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
                <p className="text-xs text-muted-foreground -mt-1">Institutional Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Data
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
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
              📊 Real-time Analytics
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Institutional{" "}
              <span className="bg-gradient-to-r from-wisdom to-primary bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Monitor campus mental health trends, intervention effectiveness, and wellness scores in real-time.
            </p>
          </div>

          {/* Timeframe Selector */}
          <div className="flex justify-center space-x-2">
            {["day", "week", "month", "quarter"].map((period) => (
              <Button
                key={period}
                variant={timeframe === period ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeframe(period)}
                className={timeframe === period ? "bg-gradient-to-r from-wisdom to-primary" : ""}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </Button>
            ))}
          </div>

          {/* Key Metrics Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">12,847</div>
                <div className="flex items-center text-sm text-success">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +5.2% from last month
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-trust/20 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Wellness Score</CardTitle>
                  <Activity className="h-4 w-4 text-trust" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">78.5</div>
                <div className="flex items-center text-sm text-success">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.3% improvement
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-support/20 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Interventions</CardTitle>
                  <CheckCircle className="h-4 w-4 text-support" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">247</div>
                <div className="flex items-center text-sm text-warning">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  23 require attention
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-growth/20 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">AI Sessions</CardTitle>
                  <BarChart3 className="h-4 w-4 text-growth" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">1,892</div>
                <div className="flex items-center text-sm text-success">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +28% this month
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Analytics Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Wellness Trends Chart */}
            <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campus Wellness Trends</CardTitle>
                    <CardDescription>Mental health scores over time</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-wisdom/10 to-primary/10 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive wellness chart would be displayed here</p>
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card className="border-2 border-warning/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Risk Assessment</CardTitle>
                    <CardDescription>Students requiring attention</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                    23 High Priority
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      <span className="font-medium">High Risk</span>
                    </div>
                    <span className="text-lg font-bold">12</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-warning rounded-full"></div>
                      <span className="font-medium">Medium Risk</span>
                    </div>
                    <span className="text-lg font-bold">35</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                      <span className="font-medium">Low Risk</span>
                    </div>
                    <span className="text-lg font-bold">12,800</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest interventions and system updates</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: "2 minutes ago", action: "High-risk student identified", status: "urgent" },
                  { time: "15 minutes ago", action: "AI intervention successful", status: "success" },
                  { time: "1 hour ago", action: "Weekly report generated", status: "info" },
                  { time: "2 hours ago", action: "Counselor session completed", status: "success" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.status === 'urgent' ? 'bg-destructive' :
                        activity.status === 'success' ? 'bg-success' : 'bg-primary'
                      }`}></div>
                      <span className="font-medium">{activity.action}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-primary/20 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-wisdom/20 to-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-wisdom" />
                </div>
                <CardTitle>Student Tracking</CardTitle>
                <CardDescription>Anonymous wellness monitoring with early alerts</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-trust/20 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-trust/20 to-growth/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-trust" />
                </div>
                <CardTitle>Privacy Compliant</CardTitle>
                <CardDescription>HIPAA compliant with complete anonymity</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-support/20 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-support/20 to-calm/20 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-support" />
                </div>
                <CardTitle>Policy Integration</CardTitle>
                <CardDescription>Seamless integration with existing systems</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
