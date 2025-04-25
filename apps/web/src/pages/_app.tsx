import type { AppProps } from "next/app";
import "@packages/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}