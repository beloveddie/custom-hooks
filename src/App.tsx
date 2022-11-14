import "./styles.css";
import { useState } from "react";
import { useDomTitle } from "./useDomTitle";
import { useWindowSize } from "./useWindowSize";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [domTitle, setDomTitle] = useState<string>();
  // this is using TS nullish coalescing
  useDomTitle(domTitle ?? "");

  // make use of the useLocalStorage custom hook
  const [name, setName] = useLocalStorage("name", "eddie");

  // get the width and height from the useWindowSize custom hook
  const { width, height } = useWindowSize();

  return (
    <>
      <div className="App">
        <h1>DOM title: {domTitle}</h1>
        <input
          value={domTitle ?? ""}
          onChange={(e) => setDomTitle(e.target.value)}
        />
      </div>
      <div>
        <h1>
          Window's width: {width} <br /> Window's height: {height}
        </h1>
      </div>
      <div>
        <h1>User name: {name}</h1>
        <select
          value={name.toString()}
          onChange={(e) => setName(e.target.value)}
        >
          <option>"Eddie"</option>
          <option>"Bee"</option>
        </select>
      </div>
    </>
  );
}
