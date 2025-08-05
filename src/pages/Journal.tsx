import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "The Rise of Luxury Real Estate in Marrakech",
      excerpt: "Explore the growing market trends and investment opportunities in Morocco's most iconic city.",
      author: "Ahmed Benali",
      date: "December 15, 2024",
      category: "Market Insights",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Traditional vs Modern: Choosing Your Marrakech Property",
      excerpt: "A comprehensive guide to understanding the different architectural styles and their investment potential.",
      author: "Fatima Alaoui",
      date: "December 10, 2024",
      category: "Buyer's Guide",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Navigating Property Investment Laws in Morocco",
      excerpt: "Essential legal considerations for international buyers looking to invest in Moroccan real estate.",
      author: "Ahmed Benali",
      date: "December 5, 2024",
      category: "Legal Insights",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Top 5 Neighborhoods for Luxury Living in Marrakech",
      excerpt: "Discover the most prestigious areas and what makes each neighborhood unique for luxury homeowners.",
      author: "Fatima Alaoui",
      date: "November 28, 2024",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Sustainable Luxury: Eco-Friendly Features in High-End Properties",
      excerpt: "How modern luxury properties in Marrakech are incorporating sustainable design and green technologies.",
      author: "Ahmed Benali",
      date: "November 20, 2024",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "The Art of Moroccan Interior Design in Luxury Homes",
      excerpt: "Exploring traditional craftsmanship and contemporary interpretations in high-end Marrakech properties.",
      author: "Fatima Alaoui",
      date: "November 15, 2024",
      category: "Design",
      image: "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?w=600&h=400&fit=crop",
    },
  ];

  const categories = ["All", "Market Insights", "Buyer's Guide", "Legal Insights", "Lifestyle", "Sustainability", "Design"];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold text-foreground mb-6">
            Real Estate Journal
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Expert insights, market trends, and valuable guides for luxury real estate in Marrakech
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="font-body"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden shadow-soft bg-card hover:shadow-elegant transition-elegant">
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-body text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-muted-foreground text-sm mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span className="font-body">{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="font-body">{article.date}</span>
                  </div>
                </div>
                
                <Button variant="ghost" className="w-full group font-body">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Journal;