import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export function DefaultLaayout() {
  return(
    <LayoutContainer>
      <Header/>
      <Outlet/>
    </LayoutContainer>
  )
}