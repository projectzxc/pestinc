import { motion } from "framer-motion";
import { Link } from "wouter";
import { Bug, Rat, Building2, Home as HomeIcon, Droplets, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";

export default function Services() {
  const services = [
    {
      id: "residential",
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Residential Pest Control",
      desc: "Complete protection for your home against ants, spiders, roaches, and other common household pests. Keep your family safe.",
    },
    {
      id: "commercial",
      icon: <Building2 className="w-8 h-8" />,
      title: "Commercial Services",
      desc: "Tailored pest management programs for restaurants, offices, retail spaces, and industrial facilities. Protect your reputation.",
    },
    {
      id: "rodent",
      icon: <Rat className="w-8 h-8" />,
      title: "Rodent Exclusion",
      desc: "Identify, trap, and exclude mice and rats. We seal entry points to prevent future infestations.",
    },
    {
      id: "termite",
      icon: <Bug className="w-8 h-8" />,
      title: "Termite Control",
      desc: "Advanced detection and treatment systems to eliminate termite colonies and protect your property's structural integrity.",
    },
    {
      id: "mosquito",
      icon: <Droplets className="w-8 h-8" />,
      title: "Mosquito Reduction",
      desc: "Seasonal treatments targeting breeding grounds and resting areas to significantly reduce mosquito populations in your yard.",
    },
    {
      id: "emergency",
      icon: <Zap className="w-8 h-8" />,
      title: "Emergency Response",
      desc: "Rapid response for severe infestations, stinging insects, or sudden pest emergencies requiring immediate attention.",
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* services hero wide shot of professional working */}
      <Hero 
        title="Our Services" 
        description="Targeted solutions for every type of pest problem, backed by our 100% satisfaction guarantee."
        imageSrc="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=1920&h=1080&fit=crop"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Expert Solutions for Any Challenge</h2>
            <p className="text-lg text-muted-foreground">
              No two pest problems are exactly alike. We conduct thorough inspections to identify the specific pests, assess the extent of the infestation, and develop customized treatment plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="p-8 flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <Link href="/contact">
                    <Button variant="ghost" className="w-full justify-between hover:bg-primary/5 hover:text-primary font-semibold">
                      Request Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure what pest you have?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Our experts provide free inspections to properly identify the problem and recommend the best course of action.
          </p>
          <Link href="/contact">
            <Button size="xl" className="bg-white text-primary hover:bg-gray-100 rounded-full h-14 px-10 font-bold shadow-lg shadow-black/10">
              Schedule Free Inspection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
