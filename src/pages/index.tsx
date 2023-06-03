import { CredentialType, IDKitWidget } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const onSuccess = (result: ISuccessResult) => {
    // This is where you should perform frontend actions once a user has been verified, such as redirecting to a new page
    router.push("https://aquamarine-behavior-626947.framer.app/");
  };

  const handleProof = async (result: ISuccessResult) => {
    const reqBody = {
      merkle_root: result.merkle_root,
      nullifier_hash: result.nullifier_hash,
      proof: result.proof,
      credential_type: result.credential_type,
      action: process.env.NEXT_PUBLIC_WLD_ACTION_NAME,
      signal: "",
    };
    fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }).then(async (res: Response) => {
      if (res.status == 200) {
        console.log("Successfully verified credential.");
      } else {
        throw (
          new Error("Error: " + (await res.json()).code) ?? "Unknown error."
        );
      }
    });
  };

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
        <IDKitWidget
          action={process.env.NEXT_PUBLIC_WLD_ACTION_NAME!}
          onSuccess={onSuccess}
          handleVerify={handleProof}
          app_id={process.env.NEXT_PUBLIC_WLD_APP_ID!}
          credential_types={[CredentialType.Orb, CredentialType.Phone]}
        >
          {({ open }) => (
            <button
              onClick={open}
              className="text-black p-6 rounded-3xl text-white"
              style={{ padding: "20px 41px", backgroundColor: "#1e1d30" }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src="/right-arrow.png"
                  className="bg-[#E8A62E]"
                  style={{
                    padding: "3px",
                    borderRadius: "50%",
                    width: "22px",
                    fontWeight: "bold",
                  }}
                />
                <div style={{ marginLeft: "10px" }}>Verify with World ID</div>
              </div>
            </button>
          )}
        </IDKitWidget>
      </div>
    </div>
  );
}
