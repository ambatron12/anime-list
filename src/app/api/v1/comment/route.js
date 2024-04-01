import prisma from "@/app/libs/prisma";
export async function POST(request) {
  const {mal_id, user_email, comment, user_name, anime_title} =
    await request.json();
  const data = {mal_id, user_email, comment, user_name, anime_title};

  const createComment = await prisma.comment.create({data});
  if (!createComment) return Response.json({status: 500, isCreated: false});
  else return Response.json({status: 200, isCreated: true});
}
