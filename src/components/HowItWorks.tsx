import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, ShoppingCart, Truck, Banknote } from "lucide-react";

const steps = [
  { icon: Upload, title: "List Your Crops", desc: "Farmers upload harvest details, photos, and set pricing per kg.", color: "text-primary" },
  { icon: ShoppingCart, title: "Retailers Browse & Order", desc: "Verified retailers discover crops, compare prices, and place bulk orders.", color: "text-accent" },
  { icon: Truck, title: "Logistics & Delivery", desc: "Our network handles pickup and delivery with real-time tracking.", color: "text-primary" },
  { icon: Banknote, title: "Secure Payment", desc: "Instant UPI/bank transfer payments with transaction protection.", color: "text-accent" },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-primary font-medium tracking-wider uppercase">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-foreground">
            Farm to Retail in <span className="gradient-text">4 Simple Steps</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-500"
            >
              <div className="relative mx-auto w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon className={`w-7 h-7 ${step.color}`} />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
