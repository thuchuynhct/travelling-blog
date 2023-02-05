import { useEffect } from "react"
import { BrowserRouter, NavLinkProps, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import Footer from "./components/Footer"
import Header, { NavLinkType } from "./components/Header"
import Routes from "./routes/Routes"
import StyledBase from "./styled/StyledBase"
import { theme } from "./styled/StyledTheme"

const navbarMenu: NavLinkType[] = [
  {
    display: "Blog",
    path: "/blog"
  },
  {
    display: "About Me",
    path: "/about"
  },
  {
    display: "Work With Me",
    path: "/work"
  },
  {
    display: "Contact",
    path: "/contact"
  }
]

const footerMenu: NavLinkType[] = [
  { display: "Home", path: "/" },
  { display: "About Me", path: "/about" },
  { display: "Work With Me", path: "/work" },
  { display: "As Featured In", path: "/featured" },
  { display: "Instagram", path: "#!" },
  { display: "Contact", path: "/contact" },
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* ========CSS========*/}
      {/* <StyledReset /> */}
      <StyledBase />
      {/* ========APP========*/}
      <Header links={navbarMenu} />
      <Routes />
      <Footer footerMenu={footerMenu} />
    </ThemeProvider>
  )
}

export default App
