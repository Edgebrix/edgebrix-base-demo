import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function Footer() {
  return (
    <div className={styles.grid}>
      <a
        href="https://docs.edgebrix.com/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Docs <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Find in-depth information about Edgebrix features and&nbsp;API.
        </p>
      </a>

      <a
        href="https://www.youtube.com/channel/UCFHNhsqQIdR0wan30tEqGzQ"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Video Toturias<span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Learn About Edgebrix With Our Video Tutorials!
        </p>
      </a>

      <a
        href="https://discord.gg/wjWR7vGx"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Join the Community <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Expand Your Skills and Build Connections in Our Thriving Egebrix
          Community.
        </p>
      </a>

      <a
        href="https://www.linkedin.com/company/edgebrix"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Follow Us on LinkedIn <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Keep Up With the Latest Updates Stay Connected.
        </p>
      </a>
    </div>
  );
}

export default Footer;
