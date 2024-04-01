import prisma from "@/app/libs/prisma";

const CommentBox = async ({mal_id}) => {
  const comments = await prisma.comment.findMany({where: {mal_id}});
  console.log(comments);
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="text-color-dark bg-color-primary p-4">
            <p>{comment.user_name}:</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
