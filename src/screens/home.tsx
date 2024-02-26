import { motion } from "framer-motion";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { LampContainer } from "../ui/lamp";
export default function Home() {
  return (
    <div className="h-dvh w-full bg-black text-white  relative">
      <Navbar />

      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-white text-center text-4xl font-medium md:text-7xl"
        >
          <div className="flex justify-center h-max w-full text-white-pt-32 mt-48 hover:skew-y-3 duration-200">
            <div className="text-4xl md:text-8xl lg:text-9xl font-bold text-white relative z-20">
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
        </motion.h1>
      </LampContainer>

      {/* <div className="hidden md:flex">
        <WebLamp />
      </div>
      <div className="">
        <MobileLamp />
      </div> */}

      <Footer />
    </div>
  );
}
