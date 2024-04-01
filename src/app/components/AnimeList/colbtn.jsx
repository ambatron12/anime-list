"use client";

import {useState} from "react";

const Collbtn = ({mal_id, user_email, anime_image, anime_title}) => {
  const [isCreated, setIsCreated] = useState(false);
  const handleColl = async (e) => {
    e.preventDefault();

    const data = {mal_id, user_email, anime_image, anime_title};

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
      // /collection.success
    }
    return;
  };
  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">berhasil ditambahkan ke koleksi</p>
      ) : (
        <button onClick={handleColl} className="px-2 py-1 bg-color-accent">
          add to collection
        </button>
      )}
    </>
  );
};

export default Collbtn;
