import {authUser} from "@/app/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
const Page = async () => {
  const user = await authUser();
  console.log(user);
  return (
    <>
      <div className="mt-6 text-color-primary flex flex-col justify-center items-center">
        <h5 className="text-2xl font-bold ">welcome {user.name}</h5>
        <Image src={user.image} width={250} height={250} />
        <div className="py-8 flex-wrap flex gap-4">
          <Link
            className="bg-color-accent text-color-dark font-bold px-4 py-2 text-xl"
            href="/users/dashboard/collection">
            my colection
          </Link>
          <Link
            className="bg-color-accent text-color-dark font-bold px-4 py-2 text-xl"
            href="/users/dashboard/comment">
            my comment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
