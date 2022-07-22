import { createTheme } from "@mui/material";
import globalThemeConfig from "./config";

const useCustomTheme = () => {
  const theme = createTheme({
    typography: {
      fontFamily: globalThemeConfig.fontFamily,
    },
  });

  return { theme };
};

export default useCustomTheme;
