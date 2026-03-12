import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sprout } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto glass-card p-12 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="relative z-10">
          <Sprout className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Start Selling Your Crops <span className="gradient-text">Today</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Join 2,500+ farmers already earning more through MandiConnect. Free to register, zero commission on your first 10 orders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="glow-button flex items-center gap-2 text-base">
              Register as Farmer
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="glow-button-accent flex items-center gap-2 text-base">
              Register as Retailer
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
