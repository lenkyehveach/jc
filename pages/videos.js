import Nav from "../components/Nav";
import ListContainer from "../components/ListContainer";
import { useScrollLock } from "../hooks/useScrollLock";
import { useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

function Videos() {
  const { unlockScroll } = useScrollLock();
  const { width } = useWindowSize();
  useEffect(() => {
    unlockScroll();
  }, []);
  return (
    <div className="flex flex-col md:h-screen md:flex-row place-content-center">
      <Nav mobile={width >= 720 ? false : true} />
      <ListContainer items={vids} vids={true} />
    </div>
  );
}

export default Videos;

const vids = [
  {
    title: "KOKOROKO Interview | The Crowe's Nest",
    date: "22/03/2022",
    src: "/kokoroko.jpg",
    href: "https://www.youtube.com/embed/9VftHj7_w4A",
  },
  {
    title: "BabyStep Tour Trailer",
    date: "03/09/2022",
    src: "/kokoroko.jpg",
    href: "https://www.youtube.com/embed/aFnjMEejQqE",
  },
];
