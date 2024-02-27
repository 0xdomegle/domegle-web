import { HomeAnimation } from "../animation/homeAnimation";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex justify-center">
        <div className="text-4xl md:text-8xl lg:text-9xl font-bold relative z-20">
          <h1 className="text-center ">
            <HomeAnimation text={"Your Words"} />
          </h1>
          <h1 className="pl-8">
            <HomeAnimation text={"Are Your"} />
          </h1>
          <div className="flex items-center gap-3">
            <p className="text-xs font-normal w-36 leading-tight">
              <HomeAnimation text={"Welcome to chill zone,"} />
              <HomeAnimation text={"It's more than just talk;"} />
            </p>
            <h1 className="z-20">
              <HomeAnimation text={"Playground"} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
