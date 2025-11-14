import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-medium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-serif font-bold text-xl md:text-2xl text-primary">
            LIC Wealth Planner
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button variant="cta" size="sm" onClick={() => scrollToSection("contact")}>
              <Phone className="h-4 w-4" />
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-lg rounded-lg mt-2 shadow-large animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="px-4 py-2 text-left text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-4 py-2 text-left text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-4 py-2 text-left text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 text-left text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              >
                Contact
              </button>
              <div className="px-4">
                <Button variant="cta" className="w-full" onClick={() => scrollToSection("contact")}>
                  <Phone className="h-4 w-4" />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
