import { motion } from "framer-motion";

export const HomeAnimation = ({ text }: { text: String }) => {
  return (
    <div className="relative overflow-y-hidden">
      <motion.div
        variants={{
          start: { opacity: 0, y: 75 },
          end: { opacity: 1, y: 0 },
        }}
        initial="start"
        animate="end"
        transition={{ delay: 0.1, duration: 0.4 }}
        className="h-max w-full pb-2"
      >
        {text}
      </motion.div>
      <motion.div
        variants={{
          start: { left: 0 },
          end: { left: "100%" },
        }}
        initial="start"
        animate="end"
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="absolute top-0 bottom-0 left-0 right-0 bg-black z-20 "
      />
    </div>
  );
};
