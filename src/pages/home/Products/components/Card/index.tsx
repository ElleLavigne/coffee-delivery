import { ShoppingCart } from "phosphor-react"
import { Product } from "../../../../../@types/product"
import { ButtonAdd } from "../../../../../components/ButtonAddItem"
import { ButtonCart, Buttoncontainer, CardProduct, Containerbuy, Identifier, Text } from "./styles"

interface Props {
  product: Product
}
export function Card(props: Props) {
  const { name, description, img, price, tags } = props.product
  return (
    <CardProduct>
      <Identifier>
        <img src={img} alt="" />
        <strong>{tags}</strong>
      </Identifier>

      <Text>
        <h3>{name}</h3>
        <p>{description}</p>
      </Text>

      <Containerbuy>
        <h4>{price}</h4>
        <Buttoncontainer>
          <ButtonAdd />
          <ButtonCart>
            <ShoppingCart size={22} weight="fill" />
          </ButtonCart>
        </Buttoncontainer>
      </Containerbuy>
    </CardProduct>
  )
}
