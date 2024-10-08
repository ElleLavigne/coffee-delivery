import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { Hero } from "./home/Hero";

 export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Hero/>
    </ThemeProvider>
  )
}


