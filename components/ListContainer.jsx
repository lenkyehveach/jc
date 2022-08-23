import Image from "next/image";

const ListContainer = ({ items, vids = false }) => {
  return (
    <div className="flex flex-col md:flex-row w-screen md:w-full overflow-scroll gap-y-10 mt-5">
      {items.map((item) => {
        return (
          <div className="flex flex-col h-[100vw] text-center gap-y-2">
            <div className="w-full flex flex-row justify-center">
              {!vids && (
                <a key={item.key} href={item.href}>
                  <Image
                    src={item.src}
                    width={289}
                    height={289}
                    objectFit="cover"
                  />
                </a>
              )}
              {vids && (
                <iframe
                  width="400"
                  height="315"
                  src={item.href}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <h1>{item.title}</h1>
            <h2>{item.date}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ListContainer;

// list items:
// {
//   title: str
//   client: str ??
//   date: dt
//   src: str

// }
