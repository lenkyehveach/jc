import About from "../components/About";
import Slider from "../components/Slider";
import Nav from "../components/Nav";
import Image from "next/image";

import { useWindowSize } from "../hooks/useWindowSize";

export default function Home() {
  const { width } = useWindowSize();
  console.log(width);
  console.log(width <= 720);
  console.log(width > 720);

  const MobileView = (
    <div className="flex flex-col md:flex-row">
      <Nav mobile={true} />
      <div className="flex flex-col md:flex-row  gap-y-8">
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

  const DesktopView = (
    <div className="flex flex-row h-screen place-content-center ">
      <Nav mobile={false} />
      <div className="w-[60vw] flex flex-row place-content-center gap-x-10">
        <div className="self-center h-[90vh] flex flex-col w-[30vw] gap-y-12 place-content-center ">
          <About />
          <Slider />
        </div>

        <div className="self-center relative h-[800px]">
          <Image
            alt="JC portrait"
            src="/josh_first_small.jpg"
            width={400}
            height={800}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {width <= 720 && MobileView}
      {width > 720 && DesktopView}
    </>
  );
}
