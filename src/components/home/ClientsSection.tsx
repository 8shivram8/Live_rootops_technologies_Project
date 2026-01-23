import { motion } from "framer-motion";

const clients = [
  { name: "TechCorp", initial: "T" },
  { name: "InnovateLabs", initial: "I" },
  { name: "DataFlow", initial: "D" },
  { name: "CloudSync", initial: "C" },
  { name: "NextGen AI", initial: "N" },
  { name: "SecureNet", initial: "S" },
  { name: "FinanceHub", initial: "F" },
  { name: "MediTech", initial: "M" },
  { name: "EduSmart", initial: "E" },
  { name: "RetailPro", initial: "R" },
  { name: "LogiTech", initial: "L" },
  { name: "GreenEnergy", initial: "G" },
];

const ClientsSection = () => {
  return (
    <section className="py-16 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Trusted By</p>
          <h3 className="text-2xl font-bold text-foreground">
            Industry <span className="gradient-text">Leaders</span>
          </h3>
        </motion.div>

        {/* Infinite scroll marquee */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 min-w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 bg-card/50 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <span className="text-primary font-bold text-lg">{client.initial}</span>
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">{client.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
