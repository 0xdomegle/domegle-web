import { useEffect } from "react";
import { HomeAnimation } from "../animation/homeAnimation";

export default function About() {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col md:justify-center gap-8 md:gap-10 py-24 px-5 md:px-12 items-center overflow-scroll h-dvh ">
      <h1 className="text-5xl font-bold">
        <HomeAnimation text={"...Token Will Distribute Soon..."} />
      </h1>
    </div>
  );
}
