import styled from "styled-components"



export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

export const TagLocation = styled.div`
  background-color: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-500"]};
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  p{
    font-weight: 500;
  }
`
export const ButtonCart = styled.button`
  background-color: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-500"]};

  border: none;
  padding: 0.5rem;
  border-radius: 6px;
`

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`