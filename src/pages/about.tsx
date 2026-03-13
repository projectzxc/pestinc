import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Target } from "lucide-react";
import { Hero } from "@/components/hero";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* about page hero team or clean environment */}
      <Hero 
        title="About Pest Inc." 
        description="Professional Quality Service"
        imageSrc="https://images.unsplash.com/photo-1542039989-130d2449a5b4?w=1920&h=1080&fit=crop"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Built on Trust and Reliability</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Pest Inc. was founded with a single mission: to provide the most effective, safe, and reliable pest control services in the region. Over the past two decades, we've grown from a small family operation into an industry leader, but our core values remain the same.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that a pest-free environment shouldn't come at the cost of your health or the ecosystem. That's why we continually invest in training and technology to deliver cutting-edge, environmentally responsible solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  <span className="font-bold text-lg">Licensed & Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <span className="font-bold text-lg">Expert Team</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* friendly pest control expert talking to homeowner */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop" 
                alt="Pestco Team" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-gray-100 hidden md:block">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h4 className="font-bold text-xl mb-2">Our Mission</h4>
                <p className="text-muted-foreground">P.E.S.T inc. Is a team of dedicated, positive and successful professionals who constantly strive to conduct ourselves with the highest level of honesty, integrity and expertise. We work very hard at earning our clients’ trust and confidence through building relationships and delivering exceptional, consistent services.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">The P.E.S.T. Inc Standards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "Honest pricing and transparent recommendations without upselling." },
              { title: "Excellence", desc: "Setting the industry standard for quality service and results." },
              { title: "Safety First", desc: "Prioritizing the wellbeing of your family, pets, and employees." },
              { title: "Innovation", desc: "Utilizing the latest techniques and eco-friendly products." },
            ].map((value, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 text-left hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-10 h-10 text-primary mb-6" />
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
