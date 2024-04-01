import {authUser} from "@/app/libs/auth-libs";
import prisma from "@/app/libs/prisma";
import Link from "next/link";
import Header from "@/app/components/Dashboard/Header";
import React from "react";

const page = async () => {
  const user = await authUser();
  const comments = await prisma.comment.findMany({
    where: {user_email: user.email},
  });
  console.log(comments);
  return (
    <section className="mt-4 w-full">
      <Header title={"My Comment"} />
      <div className="grid grid-cols-1 py-4 gap-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.mal_id}`}
              key={comment.id}
              className="bg-color-primary text-color-dark p-4">
              <p className="text-sm">{comment.anime_title}</p>
              <p className="monospace">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
