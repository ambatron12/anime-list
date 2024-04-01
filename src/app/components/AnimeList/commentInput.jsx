"use client";

import {useRouter} from "next/navigation";
import {useState} from "react";

const CommentInput = ({mal_id, user_email, user_name, anime_title}) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };
  const handdlePosting = async (e) => {
    e.preventDefault();

    const data = {mal_id, user_email, comment, user_name, anime_title};

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const createComment = await response.json();
    if (createComment.isCreated) {
      setIsCreated(true);
      setComment(" ");
      router.refresh();
      // /collection.success
    }
    return;
  };
  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-color-primary">postingan terkirim</p>}
      <textarea
        onChange={handleInput}
        value={comment}
        className="h-32 w-full text-2xl p-4 "
      />
      <button
        className="w-52 py-2 px-3 bg-color-accent"
        onClick={handdlePosting}>
        posting commentar
      </button>
    </div>
  );
};

export default CommentInput;
