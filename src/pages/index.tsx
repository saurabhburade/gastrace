import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useFeeDatas } from "@/hooks/useFeeDatas";
import Header from "@/components/Header";
import GasTable from "@/views/GasTable/GasTable";
import { useChains } from "wagmi";

const Home: NextPage = () => {
  const chains = useChains();
  return (
    <div className="dark">
      <Header />
      <div className="container mx-auto my-5">
        <GasTable />
      </div>
    </div>
  );
};

export default Home;
