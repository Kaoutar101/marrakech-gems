import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Search Properties", href: "/properties" },
    { label: "Our Blog", href: "/journal" },
    { label: "About Us", href: "/about" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
              <span className="font-heading text-xl font-bold text-foreground">
                Orchid Island
              </span>
            </Link>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Experience luxury real estate in Marrakech.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth font-body text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth font-body text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6">
          <p className="text-center text-muted-foreground font-body text-sm">
            © 2024 Orchid Island. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;