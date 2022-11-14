import { useEffect } from "react";

export const useDomTitle = (title: string): void => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
