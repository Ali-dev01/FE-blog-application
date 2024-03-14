import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PropsType {
  children: ReactNode;
  keyValue: boolean | any;
  initial?: {
    opacity: number;
  };
  animate?: {
    opacity: number;
  };
  transition?: {
    duration: number;
  };
}

export default function AnimationWrapper({
  children,
  keyValue,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
}: PropsType): JSX.Element {
  return (
    <AnimatePresence>
      <motion.div
        key={keyValue}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
