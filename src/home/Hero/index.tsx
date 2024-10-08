import { Container } from "../../components/Header/styles";
import { Title } from "./styles";

export function Hero() {
  return (
    <Container>
      <img src="hero-img.png" alt="" />
      <Title>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora </p>
      </Title>
    </Container>
  )
}