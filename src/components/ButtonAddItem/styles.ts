import styled from "styled-components"

export const ButtonAddItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme["white-400"]};

  p {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["gray-500"]};
  }
`
