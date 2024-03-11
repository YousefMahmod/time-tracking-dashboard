import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [sizeX, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return sizeX;
};

export default useWindowSize;
