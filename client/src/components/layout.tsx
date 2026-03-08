import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/pest_1772956392307.png";

export function Layout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col flex-1">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>1-800-PEST-CONTROL</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>info@pestco.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Serving the Greater Metro Area</span>
          </div>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full glass-header shadow-sm shadow-black/5 transition-all duration-300">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <img src={logo} alt="Pestco Logo" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation - Clean, no bars, beautiful hover states */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-base font-semibold transition-all duration-200 hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="ml-4">
              <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[100%] left-0 w-full bg-background border-b shadow-xl py-4 px-4 flex flex-col gap-4 z-40">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium p-2 rounded-lg ${
                  location === link.href ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full mt-2 rounded-full" size="lg">
                Get a Quote
              </Button>
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-secondary-foreground/10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link href="/">
                <img src={logo} alt="Pestco Logo" className="h-16 bg-white p-2 rounded-lg mb-6 object-contain" />
              </Link>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                Professional, reliable, and eco-friendly pest control solutions for your home and business. Your peace of mind is our top priority.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 font-display">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-secondary-foreground/70 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 font-display">Services</h4>
              <ul className="space-y-4">
                <li className="text-secondary-foreground/70">Residential Pest Control</li>
                <li className="text-secondary-foreground/70">Commercial Solutions</li>
                <li className="text-secondary-foreground/70">Termite Inspections</li>
                <li className="text-secondary-foreground/70">Rodent Extermination</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 font-display">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-secondary-foreground/70">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span>123 Pestco Blvd, Suite 100<br/>Metropolis, NY 10001</span>
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground/70">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span>1-800-PEST-CONTROL</span>
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground/70">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span>info@pestco.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-secondary-foreground/10 text-center text-secondary-foreground/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Pestco Exterminators. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
