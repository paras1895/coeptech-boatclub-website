// NavTop.tsx
import React from "react";

type NavTopProps = {
  name: string;
};

const NavTop: React.FC<NavTopProps> = ({ name }) => {
  return (
    <>
      <div
        style={{ fontFamily: "Roboto, Sans-serif" }}
        className="font-medium text-white text-[8px] sm:text-[12px] sm:pl-[12px] sm:pr-[12px]"
      >
        {name}
      </div>
    </>
  );
};

export default NavTop;
