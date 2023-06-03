import styled from "styled-components";
import { darkTheme } from "../../utils/theme";

type ButtonProps = {
  active?: boolean;
  color?: string;
  current?: boolean;
  theme: typeof darkTheme;
}

const SButton = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  width: 10rem;
  height: 5rem;
  font-family: inherit;
  background-color: ${({theme }) => theme.btnColor};
  color: ${({current, theme})=> current ? 'orange' : theme.text };
  font-weight: ${({theme})=> theme.font.regular};
  font-size: 3rem;

  &:hover{
    color: ${({active})=>active ? 'orange' : ''};
    cursor: ${({active})=>active ? 'pointer' : 'default'};
  }
`

export default SButton;