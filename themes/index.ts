type GlobalThemeConfig = {
  fontFamily: string;
  colors: ColorPalette;
};

type ColorPalette = {
  primary: string;
};

const globalThemeConfig: GlobalThemeConfig = {
  fontFamily: "Montserrat",
  colors: {
    primary: "#DD8500",
  },
};

export default globalThemeConfig;
