import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  description?: string;
  imageSrc: string;
  children?: ReactNode;
  height?: "default" | "large";
}

export function Hero({ title, description, imageSrc, children, height = "default" }: HeroProps) {
  return (
    <div className={`relative flex items-center justify-center ${height === "large" ? "min-h-[80vh]" : "min-h-[50vh]"} overflow-hidden`}>
      {/* Background Image with Dark Gradient Wash for readability */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </div>
  );
}
