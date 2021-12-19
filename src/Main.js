import { useState, useEffect } from "react";

export default function Main({ artists }) {
  const { data, setData } = useState("");

  useEffect(() => {
    const url = `https://itunes.apple.com/search?term=wu-tang+clan&entity=album&limit=5/${artists.toLowerCase()}/`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r));
  }, [artists]);
  return (
    <div>
      {data.collection ? (
        <img src={data.collection.collectionName} alt="Album Name" />
      ) : (
        "Not loaded"
      )}
    </div>
  );
}
