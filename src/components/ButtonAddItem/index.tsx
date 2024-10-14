import { Minus, Plus } from "phosphor-react";
import { ButtonAddItem } from "./styles";

export function ButtonAdd() {
  return (
    <>
      <ButtonAddItem>
        <Minus color="#8047F8" weight="bold" />
        <p>1</p>
        <Plus color="#8047F8" weight="bold" />
      </ButtonAddItem>
    </>
  )
}