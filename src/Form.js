import { useState, useEffect } from "react";

export default function Form({ setName }) {
  const { data, setData } = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setName(data);
        }}
      >
        Get Artist's Albums
      </button>
      <p> {data}</p>
    </div>
  );
}
