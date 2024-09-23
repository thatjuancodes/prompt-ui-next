import styled from "styled-components";
import { theme } from "../constants/theme"

const PrimaryButton = ({
  label = 'Submit',
  className = '',
  type = 'button',
  color = theme.colors.primary.main,
  hoverColor = theme.colors.primary.highlight,
  onClick = () => {},
} : ButtonProps ) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      className={`${className} ${defaultTailwindClasses}`}
      color={color}
      hoverColor={hoverColor}
    >
      {label}
    </StyledButton>
  )
}

const defaultTailwindClasses = 'mt-5 w-full p-5 text-white transition duration-300 rounded'

const StyledButton = styled.button<{ color: string, hoverColor: string }>`
  background-color: ${props => props.color};

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

export default PrimaryButton