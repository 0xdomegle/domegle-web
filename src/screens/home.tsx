import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative md:overflow-hidden -z-10">
      <motion.div
        variants={{
          start: { opacity: 0, y: 75 },
          end: { opacity: 1, y: 0 },
        }}
        initial="start"
        animate="end"
        transition={{ delay: 0.1, duration: 0.4 }}
        className="h-dvh w-full "
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex justify-center hover:skew-y-3 duration-200">
            <div className="text-4xl md:text-8xl lg:text-9xl font-bold relative z-20 ">
              <h1 className="text-center">Your Words</h1>
              <h1 className="pl-8">Are Your</h1>
              <div className="flex items-center gap-3">
                <p className="text-xs font-normal w-36">
                  Welcome to chill zone, It's more than just talk;
                </p>
                <h1>Playground</h1>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          start: { left: 0 },
          end: { left: "100%" },
        }}
        initial="start"
        animate="end"
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="absolute top-0 bottom-0 left-0 right-0 bg-black z-20 h-max w-max md:w-full md:h-full"
      />
    </div>
  );
}
