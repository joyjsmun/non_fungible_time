import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Mint() {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "just",
          minHeight: "15vh",
          fontSize: "20px",
        }}
      >
        <div>
          <span>
            <img
              src="/logo.jpg"
              style={{
                padding: "3px",
                width: "22px",
              }}
            />
          </span>
          NonFungible Time
        </div>
        <div>
          <ConnectWallet
            theme="light"
            btnTitle="Login SplashX"
            className={styles.customWallet}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          minHeight: "90vh",
        }}
      >
        <div className=" p-5 rounded flex flex-col justify-center items-center  w-auto font-bold space-y-6 mb-10 text-3xl">
          <span>
            {" "}
            <img
              src="/logo.jpg"
              style={{
                padding: "3px",
                width: "10rem",
              }}
            />
          </span>
          <div>Please! Verify Whether You are Human or Not</div>{" "}
          <div className="text-xl">Team. NonFungible Time</div>
        </div>
      </div>
    </div>
  );
}
