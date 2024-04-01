import Header from "@/app/components/Dashboard/Header";
import {authUser} from "@/app/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/app/libs/prisma";

const Page = async () => {
  const user = await authUser();
  const collection = await prisma.collection.findMany({
    where: {user_email: user.email},
  });

  console.log({collection});
  return (
    <>
      <section className="mt-4 w-full">
        <Header title={"My Collection"} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collection.map((collect, index) => {
            return (
              <Link
                key={index}
                href={`/anime/${collect.mal_id}`}
                className=" relative ">
                <Image
                  className="w-full"
                  src={collect.anime_image}
                  width={250}
                  height={250}
                />
                <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                  <h5 className="text-xl text-center ">
                    {collect.anime_title}
                  </h5>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Page;
