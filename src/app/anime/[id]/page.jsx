import Video from "@/app/components/utilities/video_player";
import {getAnimeRespon} from "../../libs/api";
import Image from "next/image";
import Collbtn from "@/app/components/AnimeList/colbtn";
import {authUser} from "@/app/libs/auth-libs";
import prisma from "@/app/libs/prisma";
import CommentInput from "@/app/components/AnimeList/commentInput";
import CommentBox from "@/app/components/AnimeList/commentBox";

const Page = async ({params: {id}}) => {
  const anime = await getAnimeRespon(`anime/${id}`);
  console.log({anime});
  const user = await authUser();
  const collection = await prisma.collection.findFirst({
    where: {user_email: user?.email, mal_id: id},
  });
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} ({anime.data.title_japanese}) - {anime.data.year}
        </h3>
        {!collection && user && (
          <Collbtn
            mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>score</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>populer</h3>
          <p>{anime.data.popularity}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>favorite</h3>
          <p>{anime.data.favorites}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-4 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div className="p-4">
        <h3 className="text-color-primary text-2xl mb-2">comment section</h3>
        <CommentBox mal_id={id} />
        {user && (
          <CommentInput
            mal_id={id}
            user_email={user?.email}
            user_name={user?.name}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div>
        <Video YouTubeid={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
