import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Alert } from "reactstrap";
import { useState } from "react";

// const ATTRIBUTES = ["health", "attack", "speed"];

export default function CreateTweet() {
  const [showAlert, setShowAlert] = useState(false);

  const alertClick = () => {
    setShowAlert(true); // Show the alert by setting the state
  };
  return (
    <div className={styles.container} style={{ fontSize: "22px" }}>
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
          paddingTop: "10vh",
          minHeight: "90vh",
        }}
      >
        {showAlert && (
          <div className="bg-green-400 p-5 rounded">
            <Alert color="success">
              <strong>Success!</strong> This is a success alert—{" "}
              <Link
                className="underline underline-offset-8"
                href={
                  "https://aquamarine-behavior-626947.framer.app/today-uploaded"
                }
              >
                check it out!
              </Link>
            </Alert>
          </div>
        )}
        <div className="w-3/4 h-[50vh] flex pt-4 ">
          <form className="w-full  ">
            <div className=" sm:rounded-md sm:overflow-hidden ">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label
                    htmlFor="Title"
                    className="block text-sm font-medium text-gray-700"
                    style={{ fontSize: "22px" }}
                  >
                    Title
                  </label>
                  <div className="mt-1 flex rounded-md border-solid border-2 border-gray-300 ">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder="Title of time event"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                    style={{ fontSize: "22px" }}
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Some time event description..."
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description Time Tweet
                  </p>
                </div>
                {/* Has Image? */}
                {false ? (
                  <img
                    src="https://eincode.mypinata.cloud/ipfs/QmaQYCrX9Fg2kGijqapTYgpMXV7QPPzMwGrSRfV9TvTsfM/Creature_1.png"
                    alt=""
                    className="h-40"
                  />
                ) : (
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700"
                      style={{ fontSize: "22px" }}
                    >
                      Upload Files
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-sm !mt-2 text-gray-500">
                  Choose value from 0 to 100
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="text-black p-1 rounded-3xl text-white"
                  onClick={(e) => alertClick()}
                  style={{ padding: "20px 41px", backgroundColor: "#1e1d30" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
