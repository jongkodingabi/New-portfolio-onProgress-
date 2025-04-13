import { easeInOut, motion } from "framer-motion";

const transition = (OgComponent: React.ComponentType) => {
  return () => {
    return (
      <>
        <OgComponent />
        <motion.div
          className="slide-in z-[9999]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 2, ease: easeInOut }}
        />
        <motion.div
          className="slide-out z-[9999]"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 2, ease: easeInOut }}
        />
      </>
    );
  };
};

export default transition;
