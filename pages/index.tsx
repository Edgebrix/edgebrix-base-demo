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
    if (token) return;
    if (!EdgebirxToken?.token) return;
    setToken(EdgebirxToken?.token);
  }, [EdgebirxToken]);

  return (
    <>
      <Header />
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dhwxfvlrn/image/upload/f_auto,q_auto/flare-de1d9ed43780c1e222fa_mvkqvk.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <main
          className={styles.main}
          style={{
            backgroundColor: "#f5f5f5",
            backgroundImage:
              "url(https://res.cloudinary.com/dhwxfvlrn/image/upload/f_auto,q_auto/flare-de1d9ed43780c1e222fa_mvkqvk.png)",
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
