import React from "react";
import BigNumber from "bignumber.js";
type Props = {
  isLoading: boolean;
  price: number;
  priceUsd: number;
  ekey: string;
  eid: number;
  status: string;
  isFailed: boolean;
  reason?: any;
  endpoint?: string;
};

function Row({
  isLoading,
  eid,
  ekey,
  price,
  priceUsd,
  isFailed,
  status,
  endpoint,
  reason,
}: Props) {
  if (isLoading) {
    return (
      <div className="bg-base-200/50 hover:bg-base-200 transition-color grid grid-cols-5  gap-5 p-5 duration-700">
        <div className=" flex h-4 w-1/2 items-center gap-2 p-2">[{eid}] </div>
        <div className=" flex h-4 w-1/2 items-center gap-2 p-2">{ekey} </div>

        <div className="bg-base-300 animate pulse h-4 w-1/2 p-2"></div>

        <div className="bg-base-300 animate pulse h-4 w-1/2 p-2"></div>
        <div className="bg-base-300 animate pulse h-4 w-1/2 p-2"></div>
      </div>
    );
  }
  return (
    <div className="bg-base-200/50 hover:bg-base-200 transition-color grid grid-cols-5  items-center gap-5 p-5 duration-700">
      <div className=" animate pulse flex h-4 w-1/2 items-center gap-2 p-2 ">
        [{eid}]{" "}
        {isFailed && (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          </span>
        )}
      </div>
      <div className="flex h-4 w-1/2 items-center p-2"> {ekey}</div>
      <div className="flex h-4 w-1/2 items-center  overflow-hidden text-ellipsis p-2  px-3">
        {endpoint}...
      </div>
      <div className="flex h-4 w-1/2  items-center p-2">
        {Number(price)?.toFixed(5) || ""}
      </div>
      <div className=" flex h-4 w-1/2  items-center p-2">
        {" "}
        {new BigNumber(priceUsd)?.multipliedBy(price || 0)?.toFixed(5)}{" "}
      </div>
    </div>
  );
}

export default Row;
