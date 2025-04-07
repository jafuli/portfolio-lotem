import {css} from "@emotion/react";
import ExternalLink from "../../components/ExternalLink/ExternalLink.tsx";

const Footer = () => {
  return (
    <>
      <div css={css`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 3.3125rem;
        height: 5.125rem;
        padding: 1.25rem;
      `}>
        <ExternalLink link={'https://www.instagram.com/lottie______s/'} buttonName={'Instagram'}/>
        <ExternalLink link={'https://www.linkedin.com/in/lotemsha'} buttonName={'Linkedin'}/>
      </div>
    </>
  );
}

export default Footer;
