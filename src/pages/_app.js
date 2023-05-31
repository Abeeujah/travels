import "@/styles/globals.css";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const josefin = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={josefin.className}>
      <Component {...pageProps} />
    </main>
  );
}
