import styles from "@/styles/Home.module.css";
import { EdgebrixStudio, useToken } from "@edgebrix-sdk/react";
import { useEffect } from "react";

import { SignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";

import fetcher from "./api/fetcher";
import useSWR from "swr";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  const { token, setToken } = useToken();
  const { isLoaded, isSignedIn, user } = useUser();
  const { data: EdgebirxToken } = useSWR<any>(
    isSignedIn ? "/api/EdgebrixToken" : null,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (!EdgebirxToken?.token) return;
    if (token) return;
    console.log("user", EdgebirxToken);
    setToken(EdgebirxToken?.token);
  }, [EdgebirxToken]);

  return (
    <>
      <Header />

      <div className="relative">
        <img
          src="https://logtail.com/packs/static/flare-de1d9ed43780c1e222fa.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <main
          className={styles.main}
          style={{
            backgroundColor: "#f5f5f5",
            //backgroundColor: "#121826",
            backgroundImage:
              "url(https://logtail.com/packs/static/flare-de1d9ed43780c1e222fa.png)",
          }}
        >
          <Navbar />

          <SignedIn>
            <div
              className={styles.center}
              style={{
                width: "100%",
                height: "70vh",
                margin: "20px",
                border: "1px solid #ccc",
              }}
            >
              {token && (
                <>
                  <EdgebrixStudio
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  ></EdgebrixStudio>
                </>
              )}
            </div>
          </SignedIn>
          <SignedOut>
            <main>
              <div className="flex">
                <div className="m-auto">
                  <SignIn redirectUrl="/" />
                </div>
              </div>
            </main>
          </SignedOut>
          <Footer />
        </main>
      </div>
    </>
  );
}
