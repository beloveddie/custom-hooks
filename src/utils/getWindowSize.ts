import { WindowSize } from "../useWindowSize";

export const getWindowsize = (): WindowSize => {
  return { width: window.innerWidth, height: window.innerHeight };
};
