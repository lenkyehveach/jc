import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";
import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react";

export default function Slider() {
  let [count, setCount] = useState(0);
  let previous = usePrevious(count);
  let [ref, { width }] = useMeasure();
  let direction = count > previous ? 1 : -1;

  const nums = [...Array(10).keys()];

  const imgs = nums.map((num) => {
    return `https://picsum.photos/id/${num + 1}/200`;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count);
      if (count != imgs.length - 1) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className=" ">
      <button onClick={() => setCount(count + 1)}>cunt</button>
      <div
        ref={ref}
        className=" w-full h-[200px] flex relative overflow-hidden items-center justify-center"
      >
        <AnimatePresence exitBeforeEnter custom={{ direction, width }}>
          <motion.div
            key={count}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={{ direction, width }}
          >
            <img src={imgs[count]} />
          </motion.div>
        </AnimatePresence>
      </div>
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

function usePrevious(state) {
  let [tuple, setTuple] = useState([state, null]);
  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
