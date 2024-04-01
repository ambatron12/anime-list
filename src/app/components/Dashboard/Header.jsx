"use client";
import {Backspace} from "@phosphor-icons/react";
import {useRouter} from "next/navigation";
const Header = ({title}) => {
  const router = useRouter();
  const BAck = (e) => {
    e.preventDefault();
    router.back();
  };
  return (
    <>
      <div className="flex justify-between item-center mb-4">
        <button
          onClick={BAck}
          className="text-color-primary text-2xl font-bold">
          <Backspace size={32} />
        </button>
        <h3 className="text-2xl text-color-primary mb-4 font-bold">{title}</h3>
      </div>
    </>
  );
};

export default Header;
