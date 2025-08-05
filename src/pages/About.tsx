import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const teamMembers = [
    {
      name: "Ahmed Benali",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
    },
    {
      name: "Fatima Alaoui",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1494790108755-2616b27ab7a4?w=300&h=400&fit=crop&crop=face",
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      text: "Exceptional service and stunning properties. The team helped us find our dream villa in Marrakech.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      text: "Professional, knowledgeable, and trustworthy. Highly recommend for luxury real estate.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      text: "Outstanding experience from start to finish. They truly understand luxury living.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl font-bold text-foreground mb-6">
              About Orchid Island
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              Your gateway to exceptional luxury real estate in Marrakech
            </p>
          </div>

          <Card className="p-8 mb-12 shadow-elegant bg-card">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
              At Orchid Island, we are dedicated to connecting discerning clients with the finest 
              luxury properties in Marrakech. Our deep understanding of the local market, combined 
              with our commitment to excellence, ensures that every client receives personalized 
              service and access to exclusive opportunities.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Whether you're seeking a traditional riad in the medina, a modern villa in the 
              Palmeraie, or an investment opportunity, we provide expert guidance and unparalleled 
              access to Marrakech's most prestigious properties.
            </p>
          </Card>

          <div className="mb-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-8 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center shadow-soft bg-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-elegant"
                  />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground font-body">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-8 text-center">
              Client Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card key={index} className="p-6 shadow-soft bg-card">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="font-heading font-semibold text-foreground">
                    {review.name}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default About;