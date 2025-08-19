import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HideOnScrollProps {
  children: React.ReactNode;
}

export default function HideOnScroll({ children }: HideOnScrollProps) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // hide when scrolling down
        setShow(false);
      } else {
        // show when scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full flex justify-center z-50"
    >
      {children}
    </motion.div>
  );
}