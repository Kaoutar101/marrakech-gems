import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-accent">Orchid Island</span>
          </h1>
          <p className="text-muted-foreground font-body text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to discover your dream property in Marrakech? Our expert team is here to guide you through every step of your luxury real estate journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 shadow-luxury bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Avenue Mohammed VI<br />
                    Gueliz, Marrakech 40000<br />
                    Morocco
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-luxury bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Phone Numbers
                  </h3>
                  <div className="space-y-1 text-muted-foreground font-body">
                    <p>+212 524 123 456</p>
                    <p>+212 661 234 567</p>
                    <p className="text-sm">Available 24/7 for urgent inquiries</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-luxury bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Email Addresses
                  </h3>
                  <div className="space-y-1 text-muted-foreground font-body">
                    <p>info@orchidisland.ma</p>
                    <p>sales@orchidisland.ma</p>
                    <p>support@orchidisland.ma</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-luxury bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Business Hours
                  </h3>
                  <div className="space-y-1 text-muted-foreground font-body">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: 11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Map Section */}
          <div className="space-y-8">
            <Card className="overflow-hidden shadow-luxury">
              <div className="h-96 bg-gradient-subtle relative">
                <img
                  src="https://images.unsplash.com/photo-1569256942725-91e92e0ca712?w=800&h=600&fit=crop"
                  alt="Marrakech Office Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-heading text-lg font-bold text-foreground mb-1">
                      Visit Our Showroom
                    </h4>
                    <p className="text-muted-foreground font-body text-sm">
                      Experience luxury properties in our modern showroom in the heart of Gueliz
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-luxury bg-gradient-primary text-white">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Schedule a Private Consultation
              </h3>
              <p className="font-body mb-6 opacity-90">
                Get personalized assistance from our luxury real estate experts. We'll help you find the perfect property that matches your vision and budget.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-body">Exclusive property viewings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-body">Market analysis and investment advice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-body">Legal and financial guidance</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;