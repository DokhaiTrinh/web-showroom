import "../styles/globals.css";
import "../styles/variables/colors.css";
import type { AppProps } from "next/app";
import Layout from "../components/common/Layout";
import { Provider } from "react-redux";
import store from "redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
