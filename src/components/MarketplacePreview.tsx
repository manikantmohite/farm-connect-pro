import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Star, ShoppingCart } from "lucide-react";

const crops = [
  { name: "Organic Wheat", farmer: "Rajesh Kumar", location: "Punjab", price: 28, qty: "500 kg", rating: 4.8, img: "🌾" },
  { name: "Basmati Rice", farmer: "Priya Sharma", location: "Haryana", price: 65, qty: "300 kg", rating: 4.9, img: "🍚" },
  { name: "Fresh Tomatoes", farmer: "Sunil Yadav", location: "Maharashtra", price: 22, qty: "200 kg", rating: 4.7, img: "🍅" },
  { name: "Green Chillies", farmer: "Meena Devi", location: "Andhra Pradesh", price: 35, qty: "150 kg", rating: 4.6, img: "🌶️" },
  { name: "Mangoes", farmer: "Amit Patel", location: "Gujarat", price: 80, qty: "400 kg", rating: 4.9, img: "🥭" },
  { name: "Onions", farmer: "Dinesh Patil", location: "Nashik", price: 18, qty: "1000 kg", rating: 4.5, img: "🧅" },
];

export default function MarketplacePreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="marketplace" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium tracking-wider uppercase">Live Marketplace</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-foreground">
            Fresh Crops, <span className="gradient-text">Fair Prices</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {crops.map((crop, i) => (
            <motion.div
              key={crop.name}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="h-32 bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                {crop.img}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-semibold text-foreground">{crop.name}</h3>
                  <div className="flex items-center gap-1 text-accent text-sm">
                    <Star className="w-3.5 h-3.5 fill-accent" />
                    {crop.rating}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{crop.farmer}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                  <MapPin className="w-3 h-3" />
                  {crop.location}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-display font-bold text-primary">₹{crop.price}</span>
                    <span className="text-xs text-muted-foreground">/kg</span>
                    <p className="text-xs text-muted-foreground">{crop.qty} available</p>
                  </div>
                  <button className="glow-button !px-4 !py-2 text-sm flex items-center gap-1.5">
                    <ShoppingCart className="w-4 h-4" />
                    Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
