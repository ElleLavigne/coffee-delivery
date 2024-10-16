import { NavLink } from "react-router-dom"
import { ButtonCart, Container, HeaderContainer, NavHeader, TagLocation } from "./styles"
import { MapPin, ShoppingCart } from "phosphor-react"
export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <img src="Logo.svg" alt="" />
        <NavHeader>
          <TagLocation>
            <MapPin size={22} weight="fill" />
            <p>Porto Alegre</p>
          </TagLocation>

            <NavLink to='/checkout' title="Checkout">
          <ButtonCart>
              <ShoppingCart size={22} weight="fill" />
          </ButtonCart>
            </NavLink>
        </NavHeader>
      </HeaderContainer>
    </Container>
  )
}
