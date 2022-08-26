import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function Slider() {
  let [count, setCount] = useState(0);
  let previous = usePrevious(count);
  let [ref, { width }] = useMeasure();
  let direction = count > previous ? 1 : -1;

  const nums = [...Array(4).keys()];

  const imgs = nums.map((num) => {
    return `https://picsum.photos/id/${num + 1}/200`;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 4 - 1) {
        setCount((prev) => prev + 1);
      } else {
        setCount(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      ref={ref}
      className="w-full h-[200px] flex flex-row relative items-center justify-center overflow-hidden"
    >
      {count > 0 && (
        <button onClick={() => setCount(count + 1)}>
          <ChevronLeftIcon className="h-5 w-5 text-blue-500 absolute left-4 self-center" />
        </button>
      )}
      {count != imgs.length - 1 && (
        <button onClick={() => setCount((prev) => prev + 1)}>
          <ChevronRightIcon className="h-5 w-5 text-blue-500 absolute right-4 self-center" />
        </button>
      )}

      <AnimatePresence exitBeforeEnter custom={{ direction, width }}>
        <motion.div
          key={count}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          custom={{ direction, width }}
        >
          <Image
            src={imgs[count]}
            alt="client logo"
            width={200}
            height={200}
            objectFit="cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

let variants = {
  enter: ({ direction, width }) => ({
    x: direction * width,
  }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({
    x: direction * -width,
  }),
};

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

function usePrevious(state) {
  let [tuple, setTuple] = useState([state, null]);
  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
