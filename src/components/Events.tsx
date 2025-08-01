import { images } from "../constants";
import MasonryGrid from "./MasonryGrid";

const Events = () => {
  const colSpanMap: { [key: number]: string } = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
  };
  const rowSpanMap: { [key: number]: string } = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
  };

  return (
    <>
      <h3 className="text-center text-3xl font-medium mt-10">
        YOUR CAMPUS MUSIC SCENE
      </h3>
      <div className="w-full grid grid-cols-6 grid-rows-7 mt-10 gap-1.5">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={"Event Picture"}
            className={`w-full h-auto object-cover ${
              colSpanMap[image.spanCol]
            } ${rowSpanMap[image.spanRow]}  rounded-md`}
          />
        ))}
      </div>
    </>
    // <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
    //   <div className="text-center">
    //     <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-xl font-medium px-2 py-1 uppercase">
    //       EVENTS
    //     </span>

    //     <MasonryGrid />
    //   </div>
    // </div>
  );
};

export default Events;
