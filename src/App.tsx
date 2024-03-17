import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [clickId, setClickId] = useState<null | string>(null);
  console.log(clickId);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((i) => (
          <Box onClick={() => setClickId(i)} key={i} layoutId={i} />
        ))}
      </Grid>
      <AnimatePresence>
        {clickId ? (
          <Overlay
            onClick={() => setClickId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={clickId} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

// const x = useMotionValue(0);
// const rotateValue = useTransform(x, [-800, 800], [-360, 360]);
// const gradient = useTransform(
//   x,
//   [-800, 800],
//   [
//     "linear-gradient(135deg, rgb(8, 0, 238), rgb(0, 4, 238))",

//     "linear-gradient(135deg, rgb(0, 238, 20), rgb(131, 238, 0))",
//   ]
// );
// const { scrollY, scrollYProgress } = useScroll();
// const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

// useMotionValueEvent(scrollY, "change", (latest) => {
//   console.log("scrollY : ", latest);
// });
// useMotionValueEvent(scrollYProgress, "change", (latest) => {
//   console.log("scrollYProgress : ", latest);
// });
// useMotionValueEvent(rotateValue, "change", (e) => console.log(e));
// // useEffect(() => {
// //   // x.on("change", () => console.log(x.get()));
// //   scale.on("change", () => console.log(scale.get()));
// // }, [x]);

// const [visible, setVisible] = useState(1);
// const [back, setBack] = useState(false);
// const [btn, setBtn] = useState(false);
// const nextPlz = () => {
//   setBack(false);
//   setVisible((prev) => (prev === 10 ? 10 : prev + 1));
//   setBtn(true);
// };
// const prevPlz = () => {
//   setBack(true);
//   setVisible((prev) => (prev === 1 ? 1 : prev - 1));
//   setBtn(true);
// };
// useEffect(() => {
//   const timeout = setTimeout(() => setBtn(false), 300);
// }, [visible]);

// const box = {
//   entry: (isBack: boolean) => ({
//     x: isBack ? -500 : 500,
//     opacity: 0,
//     scale: 0,
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.3,
//     },
//   },
//   exit: (isBack: boolean) => ({
//     x: isBack ? 500 : -500,
//     opacity: 0,
//     scale: 0,
//     transition: { duration: 0.3 },
//   }),
// };
