import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PropertyCarousel from "@/components/PropertyCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import heroVilla from "@/assets/hero-villa-1.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroVilla}
            alt="Luxury Villa in Marrakech"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Luxury Real Estate
            <span className="block text-accent">in Marrakech</span>
          </h1>
          <p className="font-body text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Discover exceptional properties where traditional Moroccan elegance meets modern luxury
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/properties">Explore Properties</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Schedule Viewing
            </Button>
          </div>
        </div>
      </section>

      {/* Property Carousel */}
      <PropertyCarousel />

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                Your Gateway to Marrakech's Finest Properties
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                At Orchid Island, we specialize in connecting discerning clients with the most 
                exceptional luxury properties in Marrakech. From traditional riads in the historic 
                medina to contemporary villas in prestigious neighborhoods, we offer unparalleled 
                access to Morocco's most coveted real estate.
              </p>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                Our deep local expertise and commitment to excellence ensure that every client 
                receives personalized service and expert guidance throughout their property journey.
              </p>
              <Button variant="luxury" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="Marrakech Architecture"
                className="rounded-lg shadow-luxury object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
