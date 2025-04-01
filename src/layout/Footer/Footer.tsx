import {css} from "@emotion/react";
import Button from "../../components/Button/Button.tsx";

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
        <Button buttonName={'Instagram'}/>
        <Button buttonName={'Linkedin'}/>
      </div>
    </>
  );
}

export default Footer;
