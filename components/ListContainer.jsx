import Image from "next/image";

const ListContainer = ({ items, vids = false }) => {
  return (
    <div className="self-center flex flex-col md:flex-row flex-wrap gap-10 mt-5 md:mt-0 h-full md:h-[90vh] md:w-[60vw] place-content-center">
      {items.map((item) => {
        return (
          <div
            key={item.title}
            className=" self-center flex flex-col h-[100vw] md:h-[380px] text-center gap-y-2 "
          >
            <div className="w-full flex flex-row justify-center ">
              {!vids && (
                <a href={item.href}>
                  <Image
                    alt="article cover photo"
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
