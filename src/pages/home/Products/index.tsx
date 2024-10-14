import { allProducts } from "../../../data/products"
import { Card } from "./components/Card"
import { CardContainer, Container, Title } from "./styles"

export function Products() {
  return (
    <Container>
      <Title>Nossos cafés</Title>
      <CardContainer>
        {allProducts.map((product) => {
          return <Card key={product.name} product={product} />
        })}
      </CardContainer>
    </Container>
  )
}
