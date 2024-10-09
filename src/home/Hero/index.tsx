import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react"
import { BaseIcon, Content, Img, Item, ItemsContainer, TitleContainer, Container } from "./styles"
import { defaultTheme } from "../../styles/themes/default"


interface Item {
  name: string
  Icon: typeof ShoppingCart
  weight?: "fill" | "regular"
  bgColor: string
  text: string
}

const items: Item[] = [
  {
    name: "ShoppingCart",
    Icon: ShoppingCart,
    weight: "fill",
    bgColor: defaultTheme["yellow-500"],
    text: "Compra simples e segura",
  },
  {
    name: "Box",
    Icon: Package,
    weight: "fill",
    bgColor: defaultTheme["gray-500"],
    text: "Embalagem mantém o café intacto",
  },
  {
    name: "Timer",
    Icon: Timer,
    weight: "fill",
    bgColor: defaultTheme["yellow-300"],
    text: "Entrega rápida e rastreada",
  },
  {
    name: "Coffee",
    Icon: Coffee,
    weight: "fill",
    bgColor: defaultTheme["purple-500"],
    text: "O café chega fresquinho até você",
  },
]
export function Hero() {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora{" "}
          </p>
        </TitleContainer>

        <ItemsContainer>
          {items.map((item) => {
            const { bgColor, Icon, name, weight, text } = item
            return (
              <Item key={name}>
                <BaseIcon style={{ backgroundColor: bgColor }}>
                  <Icon weight={weight} size={22} />
                </BaseIcon>
                <p>{text}</p>
              </Item>
            )
          })}
        </ItemsContainer>
      </Content>
      <Img src="hero-img.png" alt="" />
    </Container>
  )
}
