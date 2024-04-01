import prisma from "@/app/libs/prisma";
export async function POST(request) {
  const {mal_id, user_email, anime_image, anime_title} = await request.json();
  const data = {mal_id, user_email, anime_image, anime_title};

  const createColl = await prisma.collection.create({data});
  if (!createColl) return Response.json({status: 500, isCreated: false});
  else return Response.json({status: 200, isCreated: true});
}
