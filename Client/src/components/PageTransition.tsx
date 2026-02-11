import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

const PageTransition = ({ children, className }: PageTransitionProps) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.30, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
