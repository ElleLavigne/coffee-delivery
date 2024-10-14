import styled from "styled-components"

export const CardProduct = styled.div`
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.25rem;

  background-color: ${(props) => props.theme["white-200"]};
  border-radius: 6px 36px;

  strong {
    background-color: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-500"]};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-family: "Roboto", sans-serif;
    line-height: 130%;
    font-size: 0.625rem;
    text-transform: uppercase;
    width: fit-content;
  }
  img {
    max-width: 7.5rem;
    object-fit: cover;
  }
  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
  }
  h4 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-400"]};
  }
  p {
    color: ${(props) => props.theme["gray-200"]};
    font-size: 0.875rem;
    font-family: "Baloo 2", sans-serif;
    font-weight: 500;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`

export const Identifier = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
`
export const Containerbuy = styled.div`
  display: flex;
  gap: 1.5rem;
`
export const Buttoncontainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const ButtonCart = styled.button`
  background-color: ${(props) => props.theme["purple-500"]};
  color: ${(props) => props.theme["white"]};

  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
`
