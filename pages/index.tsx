import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const adress = useAddress()
  console.log(adress)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectWallet/>
       
      </main>
    </div>
  );
};

export default Home;
