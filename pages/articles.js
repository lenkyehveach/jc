import Nav from "../components/Nav";
import ListContainer from "../components/ListContainer";
import { useScrollLock } from "../hooks/useScrollLock";
import { useEffect } from "react";

function Articles() {
  const { unlockScroll } = useScrollLock();
  useEffect(() => {
    unlockScroll();
  }, []);

  const articles = [
    {
      title: "Live Report: Flow Festival 2022",
      date: "22/08/2022",
      src: "/ff.webp",
      href: "https://www.clashmusic.com/live/live-report-flow-festival-2022/",
    },

    {
      title: "Live Report: Black Deer Festival Highlights",
      date: "08/07/2022",
      src: "/bdf.jpeg",
      href: "https://www.clashmusic.com/live/five-standout-sets-from-black-deer-festival-2022/",
    },
    // {
    //   title: "article 3",
    //   date: "11/11/00",
    //   src: "/peace.jpg",
    //   href: "https://www.clashmusic.com/features/live-report-black-deer-festival/",
    // },
  ];

  return (
    <>
      <Nav />

      <ListContainer items={articles} />
    </>
  );
}

export default Articles;
