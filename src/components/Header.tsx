import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="bg-base-200 py-5 ">
      <div className=" libre-barcode container mx-auto text-3xl">
        GAS Trace | L0
      </div>
    </div>
  );
}

export default Header;
