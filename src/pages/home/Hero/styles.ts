import styled from "styled-components"

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 5.75rem 0;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`
export const TitleContainer = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-300"]};
  }
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 900;
    line-height: 130%;
    font-size: 3rem;
    color: ${(props) => props.theme["gray-500"]};
  }
`
export const Img = styled.img`
  width: 476px;
`
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`

export const BaseIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  color: ${(props) => props.theme["white-100"]};
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 0.75rem;

  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: ${(props) => props.theme["gray-300"]};
`
