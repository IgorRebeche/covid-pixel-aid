import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 1.4rem;
  flex-direction: column;
`;


export const Button = styled.button`
  border-radius: 10px;
  background-color: transparent;
  border-color: ${props => props.theme.colors.secondary};
  border-style: solid;
  color: ${props => props.theme.colors.white};
`

export const CollectedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: right;
  p:first-child {
    font-size: ${props => props.theme.fontSizes.small}
  }
`

interface financeProps {
  size?: "medium" | "large" | "small"
}

export const FinanceNumber = styled.span<financeProps>`
  value : ${props => props.size};
  padding: 4px;
  font-size: ${props => props.size ? props.theme.fontSizes[props.size] : `` };
`

export const Section = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
`