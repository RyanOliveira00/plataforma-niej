import { type AppType } from "next/dist/shared/lib/utils";

import { AppProvider } from "@/contexts/AppProvider";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
