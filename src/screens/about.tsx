import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col md:justify-center gap-8 md:gap-10 py-24 px-5 md:px-12 items-center overflow-scroll h-dvh ">
      <div className="relative md:overflow-hidden -z-10">
        <motion.div
          variants={{
            start: { opacity: 0, y: 75 },
            end: { opacity: 1, y: 0 },
          }}
          initial="start"
          animate="end"
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <h1 className="text-5xl font-bold">About Us</h1>
        </motion.div>

        <motion.div
          variants={{
            start: { left: 0 },
            end: { left: "100%" },
          }}
          initial="start"
          animate="end"
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="absolute top-0 bottom-0 left-0 right-0 bg-black z-20"
        />
      </div>

      <motion.div
        variants={{
          start: { opacity: 0, y: 75 },
          end: { opacity: 1, y: 0 },
        }}
        initial="start"
        animate="end"
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex gap-5 flex-col text-justify md:3/4 xl:w-2/3 bg-white"
      >
        <p>
          We're on a mission to totally shake up the online scene, taking
          inspiration from Omegle but adding a twist with some blockchain
          wizardry. Picture this: a place where you can chat away anonymously,
          but now it's supercharged with webRTC's peer-to-peer connections,
          ditching the need for central servers and letting you express yourself
          away from prying eyes. But hey, it's not just about chatting. We're
          dreaming way bigger, aiming to flip the script on social platforms by
          creating a digital world where you call the shots, keep your data to
          yourself, and let communities thrive without limits. And instead of
          NFTs, we're now all about using our own tokens to unlock cool features
          like gender matching or super specific hashtag searches, keeping your
          connections safe for the future. We're redefining online connections,
          aiming for a place where privacy, security, and empowering users
          aren't just goals but the real deal. As we dive into mixing
          blockchain, webRTC, and our own tokens, we're cooking up something
          groundbreaking. So, jump on board as we head towards a more inclusive,
          secure, and user-driven digital universe.
        </p>
      </motion.div>
    </div>
  );
}
