import { configuredChains } from "@/configs/wagmi";
import { useFeeDatas } from "@/hooks/useFeeDatas";
import React, { useState } from "react";
import { useChains } from "wagmi";

type Props = {};

function DefaultGasArgs({}: Props) {
  const [_payload, set_payload] = useState("0x");
  const [_adapterParams, set_adapterParams] = useState("0x");
  const chains = useChains();
  const [selectedChain, setselectedChain] = useState(configuredChains["1"]);

  const chainMappedData = useFeeDatas(
    selectedChain,
    selectedChain?.custom?.V1_EID || 101
  );
  return (
    <div className="w-full ">
      [DEFAULT CONFIGS]
      <div className=" grid grid-cols-2 gap-2">
        <div className="join w-full ">
          <button className="btn join-item rounded-r-full w-[20em]">
            Source Chain
          </button>
          <div className="dropdown join-item w-full">
            <div
              tabIndex={0}
              role="button"
              className="w-full btn bg-base-100 flex justify-start items-center"
            >
              <p className=" w-full flex  items-center gap-3 ">
                <span>
                  <img
                    src={selectedChain?.custom?.logo}
                    alt={selectedChain?.name}
                    className="h-5 w-5 rounded-full"
                  />
                </span>
                {selectedChain?.name}
              </p>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content w-full z-[1] menu shadow bg-base-200 "
            >
              {chains?.map((chain) => {
                return (
                  <li
                    className="w-full  flex justify-start"
                    key={chain?.name}
                    onClick={() => {
                      setselectedChain(chain);
                    }}
                  >
                    <p className=" w-full  py-3">
                      <span>
                        <img
                          src={chain?.custom?.logo}
                          alt={chain?.name}
                          className="h-5 w-5 rounded-full"
                        />
                      </span>
                      {chain?.name}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="join w-full ">
          <button className="btn join-item rounded-r-full w-[20em]">
            _dstChainId (uint16)
          </button>

          <input
            className="input input-bordered join-item w-full "
            disabled
            placeholder="[DEID]"
          />
        </div>
        <div className="join">
          <button className="btn join-item rounded-r-full w-[20em]">
            _adapterParams (bytes)
          </button>

          <input
            className="input input-bordered join-item w-full "
            placeholder="_adapterParams (bytes)"
            defaultValue={_adapterParams}
            onChange={(e) => {
              // TODO: Validation
              set_adapterParams(e?.target?.value);
            }}
          />
        </div>
        <div className="join">
          <button className="btn join-item rounded-r-full w-[20em]">
            _userApplication (address)
          </button>

          <input
            className="input input-bordered join-item w-full "
            disabled
            placeholder="[ENDPOINT]"
          />
        </div>
        <div className="join">
          <button className="btn join-item rounded-r-full w-[20em]">
            _payload (bytes)
          </button>

          <input
            className="input input-bordered join-item w-full "
            placeholder="_payload (bytes)"
            defaultValue={_payload}
            onChange={(e) => {
              // TODO: Validation
              set_payload(e?.target?.value);
            }}
          />
        </div>
        <div className="join">
          <button className="btn join-item rounded-r-full w-[20em]">
            _payInZRO (bool)
          </button>

          <input
            className="input input-bordered join-item w-full "
            disabled
            placeholder="false"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={chainMappedData?.refetch}>
        {" "}
        Estimate Gas
      </button>
    </div>
  );
}

export default DefaultGasArgs;
