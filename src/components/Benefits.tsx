import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Shield, Zap, Globe, BarChart3, Users } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Better Prices", desc: "Farmers earn 20-40% more by selling directly." },
  { icon: Shield, title: "Secure Payments", desc: "UPI & bank transfers with full transaction protection." },
  { icon: Zap, title: "Instant Matching", desc: "AI matches crops with the right retailers instantly." },
  { icon: Globe, title: "Pan-India Reach", desc: "Access buyers across 500+ cities nationwide." },
  { icon: BarChart3, title: "Price Analytics", desc: "Real-time mandi prices and demand forecasts." },
  { icon: Users, title: "Verified Network", desc: "All farmers and retailers are KYC-verified." },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-accent font-medium tracking-wider uppercase">Why MandiConnect</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-foreground">
            Built for <span className="gradient-text">India's Agriculture</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
