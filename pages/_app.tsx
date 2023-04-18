import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";
import "@edgebrix-sdk/react/dist/style.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
