import styles from "@/styles/Home.module.css";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.description}>
      {/* <p>
          npm install&nbsp;
          <code className={styles.code}>@edgebrix-sdk/react</code>
        </p> */}
      {/* <a href="https://edgebrix.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="https://res.cloudinary.com/dhwxfvlrn/image/upload/v1671793138/logo/e1.svg"
          alt="Edgebrix Logo"
          className={styles.vercelLogo}
          width={100}
          height={28}
          priority
        />
      </a> */}

      <div className="justify-end">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
