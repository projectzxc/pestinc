import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
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
              <span>0917 672 7378</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>pestcontrolcs.pestph@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>1052 F Castillo Pasig, Metro Manila, Philippines</span>
          </div>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full glass-header shadow-sm shadow-black/5 transition-all duration-300">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={logo} alt="Pestco Logo" className="h-10 sm:h-12 md:h-16 w-auto object-contain" />
              <div className="flex flex-col leading-tight">
                <h1 className="text-xs sm:text-sm lg:text-lg font-black text-[rgb(107,188,69)] tracking-wide font-[Libre_Franklin] leading-tight sm:whitespace-nowrap">
  PROTECTION EXTERMINATION SANITATION TREATMENT
</h1>
            <p className="text-sm text-foreground/70">(P.E.S.T) Inc.</p>
        </div>
          </Link>

          {/* Desktop Navigation - Clean, no bars, beautiful hover states */}
          <nav className="hidden lg:flex items-center gap-6">
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
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[100%] left-0 w-full bg-background border-b shadow-xl py-4 px-4 flex flex-col gap-4 z-40">
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
      <footer className="bg-secondary text-secondary-foreground pt-20 pb-10 border-t border-secondary-foreground/10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16 mb-16">
            <div className="flex flex-col max-w-sm">
              <Link href="/">
                <img
  src={logo}
  alt="P.E.S.T. Inc. Logo"
  className="h-24 w-auto mb-6 object-contain opacity-90 hover:opacity-100 transition"
/>
              </Link>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                Professional, reliable, and eco-friendly pest control solutions for your home and business. Your peace of mind is our top priority.
              </p>
            </div>
            
            <div>
  <h4 className="text-lg font-bold mb-6 font-display">Follow Us</h4>

  <div className="flex flex-col gap-3">

    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/1CSGuK5t5g/"
      target="_blank"
      className="flex items-center gap-3 text-secondary-foreground/70 hover:text-white transition"
    >
      <Facebook className="h-5 w-5 text-primary" />
      Facebook
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/pest.ph?igsh=YzNvaHQ3ejNudGs2"
      target="_blank"
      className="flex items-center gap-3 text-secondary-foreground/70 hover:text-white transition"
    >
      <Instagram className="h-5 w-5 text-primary" />
      Instagram
    </a>

    {/* TikTok */}
    <a
      href="https://tiktok.com"
      target="_blank"
      className="flex items-center gap-3 text-secondary-foreground/70 hover:text-white transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-primary"
      >
        <path d="M19.589 6.686a4.793 4.793 0 01-3.77-1.859V14.15a5.143 5.143 0 11-4.447-5.098v2.193a2.952 2.952 0 102.255 2.865V2h2.192a4.786 4.786 0 003.77 1.859v2.827z"/>
      </svg>
      TikTok
    </a>

  </div>
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
                  <span>1052 F Castillo Pasig<br/> Metro Manila, Philippines</span>
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground/70">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span>0917 672 7378</span>
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground/70">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span>pestcontrolcs.pestph@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6 mt-6 border-t border-secondary-foreground/10 text-center text-secondary-foreground/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Protection Extermination Sanitation Treatment (P.E.S.T.) Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
