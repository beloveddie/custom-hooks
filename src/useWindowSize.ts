import { useState, useEffect } from "react";
import { getWindowsize } from "./utils/getWindowSize";

export type WindowSize = {
  width: number;
  height: number;
};

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    ...getWindowsize()
  });

  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize({ ...getWindowsize() });
    };
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  return windowSize;
};
