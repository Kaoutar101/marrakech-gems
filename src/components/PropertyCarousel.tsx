import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroVilla from "@/assets/hero-villa-1.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: heroVilla,
    title: "Luxury Villa Marrakech",
    price: "$2,850,000",
    location: "Palmeraie, Marrakech",
    beds: 6,
    baths: 5,
    area: "850 m²",
    description: "Stunning villa with traditional Moroccan architecture and modern amenities",
  },
  {
    id: 2,
    image: property1,
    title: "Traditional Riad",
    price: "$1,200,000",
    location: "Medina, Marrakech",
    beds: 4,
    baths: 3,
    area: "420 m²",
    description: "Authentic riad with beautiful courtyard and traditional craftsmanship",
  },
  {
    id: 3,
    image: property2,
    title: "Modern Penthouse",
    price: "$980,000",
    location: "Gueliz, Marrakech",
    beds: 3,
    baths: 2,
    area: "320 m²",
    description: "Contemporary living with panoramic views of the Atlas Mountains",
  },
  {
    id: 4,
    image: property3,
    title: "Palace Estate",
    price: "$4,500,000",
    location: "Route de Fès, Marrakech",
    beds: 8,
    baths: 7,
    area: "1,200 m²",
    description: "Magnificent palace with extensive gardens and luxury amenities",
  },
];

const PropertyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProperty = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
  };

  const prevProperty = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + properties.length) % properties.length);
  };

  const currentProperty = properties[currentIndex];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Discover exceptional luxury properties in the heart of Marrakech
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-luxury bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <img
                  src={currentProperty.image}
                  alt={currentProperty.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full font-body font-semibold text-sm">
                    {currentProperty.price}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                  {currentProperty.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-body">{currentProperty.location}</span>
                </div>
                
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {currentProperty.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Bed className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-body text-sm text-muted-foreground">
                      {currentProperty.beds} Beds
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Bath className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-body text-sm text-muted-foreground">
                      {currentProperty.baths} Baths
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Square className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-body text-sm text-muted-foreground">
                      {currentProperty.area}
                    </span>
                  </div>
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          </Card>

          <Button
            variant="luxury"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full"
            onClick={prevProperty}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="luxury"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full"
            onClick={nextProperty}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;