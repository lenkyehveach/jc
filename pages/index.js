import About from "../components/About";
import Slider from "../components/Slider";
import Nav from "../components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <Nav />
      <div className="flex flex-col gap-y-8">
        <div className="relative w-screen h-[90vh]">
          <Image
            alt="JC portrait"
            src="/josh_first_small.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <About />
        <Slider />
      </div>
    </div>
  );
}
