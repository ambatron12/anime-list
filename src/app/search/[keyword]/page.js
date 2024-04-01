import Link from "next/link";
import Animelist from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";
import { getAnimeRespon } from "../../libs/api";
const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`
  // );
  // const SearchAnime = await response.json();
  // dimensi x nya ternyata
  const SearchAnime = await getAnimeRespon("anime", `q=${decodeKeyword}`);
  return (
    <div>
      {/* anime terpopuler */}
      <section>
        <Header title={`pencarian untuk ${decodeKeyword}....`} />
        <Animelist api={SearchAnime} />
      </section>
      {/* anime terbaru */}
    </div>
  );
};

export default Page;
// jika di element tidak ada tambahan atribut lainya maka bisa di ilangin <div> menjadi <>
