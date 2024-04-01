"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleClick = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <form id="form">
        <input
          type="text"
          id="input"
          placeholder="cari anime"
          className="w-full p-2 rounded text-black"
          ref={searchRef}
          onKeyDown={handleClick}
        />
      </form>
      <button
        id="btn"
        className="absolute top-2 end-2 text-black"
        onClick={handleClick}
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};
export default InputSearch;
// pake ctrl + space
// kagak gw ksih () bejir
