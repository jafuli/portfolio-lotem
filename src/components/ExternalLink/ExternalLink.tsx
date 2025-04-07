import {css} from "@emotion/react";
import {useTheme} from "../../contexts/ThemeContext/ThemeContext.tsx";

type ExternalLinkProps = {
  buttonName: string;
  link: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({buttonName, link}) => {
  const {theme} = useTheme();

  const buttonBase = css`
    background: none;
    border: none;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${theme.textColor};
    cursor: pointer;
    transition: color 0.3s ease;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      text-decoration: underline;
    }
  `;

  return (
    <a href={link}
       target="_blank"
       rel="noopener noreferrer"
       css={buttonBase}>
      {buttonName}
    </a>
  );
}

export default ExternalLink;
