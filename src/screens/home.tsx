import Footer from "../components/footer";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <div className="h-dvh w-full ">
      <Navbar />

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
      <Footer />
    </div>
  );
}
