import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, BarChart3, PieChart, Activity } from "lucide-react";
import Layout from "@/components/Layout";

const Prediction = () => {
  const marketData = [
    { area: "Palmeraie", current: "$2,850", predicted: "$3,120", change: "+9.5%" },
    { area: "Medina", current: "$1,200", predicted: "$1,280", change: "+6.7%" },
    { area: "Gueliz", current: "$980", predicted: "$1,050", change: "+7.1%" },
    { area: "Route de Fès", current: "$4,500", predicted: "$4,750", change: "+5.6%" },
  ];

  const insights = [
    {
      title: "Market Growth",
      value: "+12.3%",
      description: "Year-over-year price increase",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Investment Return",
      value: "8.7%",
      description: "Average annual ROI",
      trend: "up",
      icon: BarChart3,
    },
    {
      title: "Market Stability",
      value: "High",
      description: "Low volatility index",
      trend: "neutral",
      icon: Activity,
    },
    {
      title: "Demand Index",
      value: "94/100",
      description: "Buyer demand score",
      trend: "up",
      icon: PieChart,
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold text-foreground mb-6">
            Real Estate Price Prediction
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Advanced analytics and market insights for informed investment decisions in Marrakech
          </p>
        </div>

        {/* Market Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <Card key={index} className="p-6 text-center shadow-soft bg-card">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    insight.trend === 'up' ? 'bg-green-100 text-green-600' : 
                    insight.trend === 'down' ? 'bg-red-100 text-red-600' : 
                    'bg-blue-100 text-blue-600'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {insight.value}
                </h3>
                <p className="font-heading text-lg font-semibold text-foreground mb-1">
                  {insight.title}
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  {insight.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Price Prediction Chart Placeholder */}
        <Card className="p-8 mb-12 shadow-elegant bg-card">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
            Price Trend Analysis
          </h2>
          <div className="bg-gradient-subtle rounded-lg p-8 text-center">
            <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Interactive Price Chart
            </h3>
            <p className="text-muted-foreground font-body mb-4">
              Advanced Grafana visualization would be embedded here showing:
            </p>
            <ul className="text-muted-foreground font-body text-sm space-y-2 max-w-md mx-auto">
              <li>• Historical price trends by neighborhood</li>
              <li>• Predictive models for next 12-24 months</li>
              <li>• Comparative analysis across property types</li>
              <li>• Market volatility indicators</li>
              <li>• Investment opportunity scoring</li>
            </ul>
          </div>
        </Card>

        {/* Area-wise Predictions */}
        <Card className="p-8 shadow-elegant bg-card">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
            Neighborhood Price Predictions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-heading font-semibold text-foreground">Area</th>
                  <th className="text-left py-3 font-heading font-semibold text-foreground">Current Avg ($/m²)</th>
                  <th className="text-left py-3 font-heading font-semibold text-foreground">12-Month Prediction</th>
                  <th className="text-left py-3 font-heading font-semibold text-foreground">Expected Change</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((data, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 font-body text-foreground font-medium">{data.area}</td>
                    <td className="py-4 font-body text-muted-foreground">{data.current}</td>
                    <td className="py-4 font-body text-foreground font-medium">{data.predicted}</td>
                    <td className="py-4">
                      <span className="flex items-center text-green-600 font-body font-medium">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {data.change}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="font-body">
            Get Detailed Market Report
          </Button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Prediction;