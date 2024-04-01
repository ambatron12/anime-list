"use client";
import React, {useEffect, useState} from "react";
import HeaderMenu from "../components/utilities/HeaderMenu";
import Pagination from "../components/utilities/Pagination";
import Animelist from "../components/AnimeList";
import {getAnimeRespon} from "../libs/api";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const fetchData = async () => {
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    // );
    const data = await getAnimeRespon("top/anime", `page=${page}`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`anime terpopuler #${page}`} />
      <Animelist api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
