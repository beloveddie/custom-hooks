import { useEffect, useState } from "react";

export default function useLocalStorage(
  key: string,
  initialValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue) {
      setValue(storedValue);
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
