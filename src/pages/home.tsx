import { Link } from "wouter";
import { motion } from "framer-motion";
import { ShieldCheck, BugOff, Home as HomeIcon, Clock, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";

export default function Home() {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Guaranteed Protection",
      desc: "Our treatments are backed by our 100% satisfaction guarantee. If pests return, so do we."
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Fast Response",
      desc: "Same-day service available for emergencies. We act quickly so you can rest easy."
    },
    {
      icon: <HomeIcon className="w-10 h-10 text-primary" />,
      title: "Family & Pet Safe",
      desc: "We use environmentally responsible methods that are tough on bugs, safe for loved ones."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* home hero beautiful clean modern house exterior */}
      <Hero 
        title="Reclaim Your Home from Unwanted Pests" 
        description="Professional, reliable, and eco-friendly pest control solutions for your peace of mind. Experience the Pestco difference today."
        imageSrc="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop"
        height="large"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button size="xl" className="text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all font-semibold">
              Get a Free Quote
            </Button>
          </Link>
          <Link href="/services">
            <Button size="xl" variant="outline" className="text-lg h-14 px-8 rounded-full bg-white/10 text-white border-white/30 hover:bg-white hover:text-black transition-all backdrop-blur-sm font-semibold">
              Explore Services
            </Button>
          </Link>
        </div>
      </Hero>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Why Choose P.E.S.T. Inc</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Expertise You Can Trust</h3>
            <p className="text-lg text-muted-foreground">
              With over 10 years of experience, we've developed proven strategies to completely eliminate pests and prevent them from returning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-card p-10 rounded-2xl shadow-xl shadow-black/5 border border-black/[0.03] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services Banner */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Core Solutions</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Comprehensive Pest Management</h3>
              <ul className="space-y-6 mb-10">
                {[
                  "Complete interior and exterior inspections",
                  "Targeted treatments for specific infestations",
                  "Year-round preventative maintenance plans",
                  "Specialized commercial facility programs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button className="rounded-full bg-primary hover:bg-primary/90 text-white border-0 h-12 px-8 group">
                  View All Services 
                  <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              {/* professional pest control technician inspecting home */}
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop" 
                alt="Pest Control Service" 
                className="rounded-3xl shadow-2xl z-10 relative"
              />
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl z-0 transform translate-x-4 translate-y-4" />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <BugOff className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to live pest-free?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Contact us today for a free, no-obligation inspection and quote. Let our experts handle the bugs so you can enjoy your home.
          </p>
          <Link href="/contact">
            <Button size="xl" className="text-lg h-14 px-10 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all">
              Schedule Your Inspection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
