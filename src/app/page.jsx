import Link from "next/link";
import Animelist from "./components/AnimeList";
import SEARCH from "./components/search";
import Header from "./components/AnimeList/Header";
import { getAnimeRespon, getNestedAnimeResponse, reproduce } from "./libs/api";
const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();
  // dimensi x nya ternyata
  const topAnime = await getAnimeRespon("top/anime", "limit=8");
  let recomended = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  // recomended = { data: recomended.slice(0, 35) };
  recomended = reproduce(recomended, 20);

  return (
    <div>
      {/* anime terpopuler */}
      <section>
        <Header
          title="paling populer"
          linkTitle="lihat semua"
          linkHref="/populer"
        />
        <Animelist api={topAnime} />
      </section>
      <section>
        <Header title="rekomendasi" />
        <Animelist api={recomended} />
      </section>
      {/* anime terbaru */}
      {/* <section>
        <Header title="paling baru" linkTitle="ikuti skrg" linkHref="/new" />
        <Animelist api={topAnime} />
      </section> */}
    </div>
  );
};

export default Page;
