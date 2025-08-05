import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import heroVilla from "@/assets/hero-villa-1.jpg";

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const properties = [
    {
      id: 1,
      title: "Luxury Villa Marrakech",
      price: "$2,850,000",
      location: "Palmeraie, Marrakech",
      beds: 6,
      baths: 5,
      area: "850 m²",
      type: "Villa",
      image: heroVilla,
      features: ["Pool", "Garden", "Garage", "Terrace"],
    },
    {
      id: 2,
      title: "Traditional Riad",
      price: "$1,200,000",
      location: "Medina, Marrakech",
      beds: 4,
      baths: 3,
      area: "420 m²",
      type: "Riad",
      image: property1,
      features: ["Courtyard", "Rooftop", "Traditional", "Renovated"],
    },
    {
      id: 3,
      title: "Modern Penthouse",
      price: "$980,000",
      location: "Gueliz, Marrakech",
      beds: 3,
      baths: 2,
      area: "320 m²",
      type: "Apartment",
      image: property2,
      features: ["City View", "Modern", "Elevator", "Parking"],
    },
    {
      id: 4,
      title: "Palace Estate",
      price: "$4,500,000",
      location: "Route de Fès, Marrakech",
      beds: 8,
      baths: 7,
      area: "1,200 m²",
      type: "Palace",
      image: property3,
      features: ["Historic", "Gardens", "Multiple Buildings", "Fountain"],
    },
    {
      id: 5,
      title: "Contemporary Villa",
      price: "$1,800,000",
      location: "Targa, Marrakech",
      beds: 5,
      baths: 4,
      area: "650 m²",
      type: "Villa",
      image: property1,
      features: ["Modern Design", "Pool", "Guest House", "Security"],
    },
    {
      id: 6,
      title: "Boutique Riad",
      price: "$850,000",
      location: "Bab Doukkala, Marrakech",
      beds: 3,
      baths: 3,
      area: "280 m²",
      type: "Riad",
      image: property2,
      features: ["Authentic", "Central", "Restored", "Business Potential"],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold text-foreground mb-6">
            Luxury Properties
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Discover exceptional properties in Marrakech's most prestigious locations
          </p>
        </div>

        {/* Search Filters */}
        <Card className="p-6 mb-12 shadow-soft bg-card">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-body"
              />
            </div>
            
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="font-body">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1000000">Under $1M</SelectItem>
                <SelectItem value="1000000-2000000">$1M - $2M</SelectItem>
                <SelectItem value="2000000-5000000">$2M - $5M</SelectItem>
                <SelectItem value="5000000+">$5M+</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="font-body">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="riad">Riad</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="palace">Palace</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="default" className="font-body">
              Search Properties
            </Button>
          </div>
        </Card>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden shadow-soft bg-card hover:shadow-elegant transition-elegant group">
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-sm hover:bg-background">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full font-body font-semibold text-sm">
                    {property.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary font-body text-sm font-medium">{property.type}</span>
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-body text-sm">{property.location}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Bed className="w-5 h-5 text-primary mx-auto mb-1" />
                    <span className="font-body text-sm text-muted-foreground">{property.beds}</span>
                  </div>
                  <div className="text-center">
                    <Bath className="w-5 h-5 text-primary mx-auto mb-1" />
                    <span className="font-body text-sm text-muted-foreground">{property.baths}</span>
                  </div>
                  <div className="text-center">
                    <Square className="w-5 h-5 text-primary mx-auto mb-1" />
                    <span className="font-body text-sm text-muted-foreground">{property.area}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-body"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button variant="hero" className="w-full font-body">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-body">
            Load More Properties
          </Button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Properties;