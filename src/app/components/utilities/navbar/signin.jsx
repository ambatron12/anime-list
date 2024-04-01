import Link from "next/link";
import {authUser} from "../../../libs/auth-libs";

const Usersingin = async () => {
  const user = await authUser();
  const actionLabel = user ? "sign out" : "sign in";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex gap-2 justify-between text-center">
      {user ? (
        <Link href="/users/dashboard/" className="py-1">
          dashboard
        </Link>
      ) : null}
      <Link
        href={actionUrl}
        className="bg-color-dark text-color-accent py-1 px-12 inline-block">
        {actionLabel}
      </Link>
    </div>
  );
};

export default Usersingin;
