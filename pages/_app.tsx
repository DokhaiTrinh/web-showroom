import "../styles/globals.css";
import "../styles/variables/colors.css";
import type { AppProps } from "next/app";
import Layout from "../components/common/Layout";
import { Provider } from "react-redux";
import store from "redux/store";
import useCustomTheme from "themes";
import { ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useCustomTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
