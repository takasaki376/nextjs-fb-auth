import "../styles/globals.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { initAuth } from "src/context/user/initAuth";

initAuth();

const MyApp: NextPage<AppProps> = (props) => {
  return <props.Component {...props.pageProps} />;
};
export default MyApp;
