import {css} from "@emotion/react";
import {useTheme} from "../../contexts/ThemeContext/ThemeContext.tsx";

type ButtonProps = {
  buttonName: string;
}

const Button: React.FC<ButtonProps> = ({buttonName}) => {
  const {theme} = useTheme();

  const buttonBase = css`
    background: none;
    border: none;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${theme.textColor};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      text-decoration: underline;
    }
  `;

  return (
    <button css={buttonBase}>{buttonName}</button>
  );
}

export default Button;
