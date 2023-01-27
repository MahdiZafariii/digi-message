import AuthUserProvider from "@/Provider/AuthProvider";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthUserProvider>
        <Toaster />
        <Component {...pageProps} />
      </AuthUserProvider>
    </>
  );
}
