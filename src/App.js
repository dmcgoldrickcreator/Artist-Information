import { useState, useEffect } from "react";

import "./App.css";

import Title from "./Title.js";
import Form from "./Form.js";
import Info from "./Info.js";

export default function App() {
  const { artists, setName } = useState("");
  useEffect(() => {
    const url = `https://itunes.apple.com/search?term=elton-john&entity=album&limit=5/${artists.toLowerCase()}/`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r));
  }, [artists]);
  return (
    <div className="App">
      <Title />
      <Form setName={setName} />
      <Info />
    </div>
  );
}
