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
        className="font-medium text-white text-[12px] pl-[12px] pr-[12px]"
      >
        {name}
      </div>
    </>
  );
};

export default NavTop;
