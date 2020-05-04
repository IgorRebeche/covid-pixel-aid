import styled from "styled-components";
interface CardProps {
  width?: string,
  height?: string,
}
export const Wrapper = styled.div<CardProps>`
  display: flex;
  padding: 3rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  height: ${props => props.height};
  width: ${props => props.width};
`;
