import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";
import "@/styles/globals.css";
import store from "@/store/index";

export default function App({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
