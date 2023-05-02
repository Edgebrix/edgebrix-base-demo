import Image from "next/image";

import styles from "@/styles/Home.module.css";
// @ts-ignore
import { EdgebrixStudio, useToken } from "@edgebrix-sdk/react";
import { useEffect } from "react";
import {
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import fetcher from "./api/fetcher";
import useSWR from "swr";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Link from "next/link";
import ExpandingArrow from "@/components/expanding-arrow";
import { Background } from "reactflow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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

      <main
        className={`${inter.variable} "relative flex min-h-screen flex-col items-center justify-center"`}
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dhwxfvlrn/image/upload/f_auto,q_auto/flare-de1d9ed43780c1e222fa_mvkqvk.png)",
        }}
      >
        <SignedIn>
          <div className="mt-20 mb-10 ">
            {token && (
              <>
                <div className="bg-transparent  shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg ">
                  <div className="justify-between items-center ">
                    <EdgebrixStudio
                      style={{
                        width: "70vw",
                        height: "80vh",
                      }}
                    ></EdgebrixStudio>
                  </div>
                </div>
              </>
            )}
          </div>
        </SignedIn>
        <SignedOut>
          <main>
            <div className="flex h-screen ">
              <div className="m-auto">
                <SignIn redirectUrl="/" />
              </div>
            </div>
          </main>
        </SignedOut>

        <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
          <Link href="https://vercel.com">
            <Image
              src="https://res.cloudinary.com/dhwxfvlrn/image/upload/v1671793138/logo/e1.svg"
              alt="Edgebrix Logo"
              width={100}
              height={24}
              priority
            />
          </Link>
          <Link
            href="https://github.com/vercel/examples/tree/main/storage/kv-redis-starter"
            className="flex items-center space-x-2"
          >
            {/* <Image
              src="/github.svg"
              alt="GitHub Logo"
              width={24}
              height={24}
              priority
            /> */}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Link>
        </div>
      </main>
    </>
  );
}
