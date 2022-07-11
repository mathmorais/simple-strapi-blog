import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { AppStructure } from "../components/templates/AppStructure/AppStructure";
import { Global } from "../styles/Global";
import { EThemes, useAppTheme } from "../themes/theme";

const App = ({ Component, pageProps }: AppProps) => {
  const theme = useAppTheme(EThemes.classic);

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <AppStructure>
        <Component {...pageProps} />
      </AppStructure>
    </ThemeProvider>
  );
};

export default App;
