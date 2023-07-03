import React from "react";
import { SectionWrapper } from "./hoc";

function OwnerShip() {
  return (
    <div className="flex h-screen justify-center items-center text-3xl font-semibold text-gray-400">
      <h2 className="bg-gray-800 p-3 rounded-md">
        This site is owned and operated by Md Saidul Mondol
      </h2>
    </div>
  );
}

export default SectionWrapper(OwnerShip, "ownership");
