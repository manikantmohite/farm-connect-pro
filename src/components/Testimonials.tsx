import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Ramesh Singh", role: "Wheat Farmer, Punjab", quote: "I now earn 35% more than selling at the local mandi. MandiConnect changed my family's life.", avatar: "👨‍🌾" },
  { name: "Anita Desai", role: "Retailer, Mumbai", quote: "Direct sourcing means fresher produce and better margins. The platform is incredibly easy to use.", avatar: "👩‍💼" },
  { name: "Vikram Joshi", role: "Rice Farmer, Haryana", quote: "Secure payments arrive within 24 hours. No more waiting weeks for middlemen to pay.", avatar: "👨‍🌾" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stories" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-accent font-medium tracking-wider uppercase">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-foreground">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{t.avatar}</span>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
