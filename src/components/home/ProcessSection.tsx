import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We understand your goals, challenges, and requirements.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "We architect solutions tailored to your needs.",
  },
  {
    icon: Code,
    title: "Build",
    description: "We develop with best practices and clean code.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "We launch with zero-downtime deployments.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "We optimize and scale as you grow.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const ProcessSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground">
            A proven process that delivers results, every time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Animated Connecting Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 -translate-y-1/2 origin-left"
          />

          {/* Animated particles along the line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full"
                initial={{ left: "0%", opacity: 0 }}
                animate={{
                  left: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ boxShadow: "0 0 10px hsl(239 84% 67%)" }}
              />
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative text-center group"
              >
                {/* Animated Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-20 h-20 mx-auto rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4 glow-effect"
                >
                  {/* Rotating ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary/50"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Pulsing glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                </motion.div>

                {/* Step number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute -top-2 -right-2 md:right-1/4 w-6 h-6 rounded-full bg-primary text-xs font-bold flex items-center justify-center text-primary-foreground"
                >
                  {index + 1}
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="text-lg font-semibold text-foreground mb-2"
                  whileHover={{ color: "hsl(239 84% 67%)" }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  {step.description}
                </p>

                {/* Hover effect glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  layoutId="processHover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
