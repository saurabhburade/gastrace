import { useFeeDatas } from "@/hooks/useFeeDatas";
import useEthPrice from "@/hooks/useUsdPrice";
import React, { useState } from "react";
import { formatEther } from "viem";
import BigNumber from "bignumber.js";
import _ from "lodash";
import Row from "./components/Row";
import { useChains } from "wagmi";
import { zkSync } from "wagmi/chains";
import { configuredChains, wagmiconfig } from "@/configs/wagmi";
import DefaultGasArgs from "./components/DefaultGasArgs";
import { useAppSelector } from "@/state/hooks";
import Rows from "./components/Rows";
type Props = {};

function GasTable({}: Props) {
  return (
    <div className="space-y-3">
      <DefaultGasArgs />
      <Rows />
    </div>
  );
}

export default GasTable;
GasTable;
