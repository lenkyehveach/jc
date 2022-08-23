import Nav from "../components/Nav";
import ListContainer from "../components/ListContainer";

function Videos() {
  return (
    <>
      <Nav />
      <ListContainer items={vids} vids={true} />
    </>
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
