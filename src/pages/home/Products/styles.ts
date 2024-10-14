import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3.375rem;
  padding: 5.75rem 0;
`

export const Title = styled.h2`
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["gray-500"]};
  font-size: 2rem;

`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5rem 2rem;
`