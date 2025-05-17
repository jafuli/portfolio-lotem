import {css} from "@emotion/react";
import Button from "../../components/Button/Button.tsx";

const NotFound = () => {

  return (
    <>
      <div css={css`
        margin: auto;
        display: flex;
        gap: 2rem;
        flex-direction: column;
        width: 75%;
      `}>
        <div css={css`
          font-size: 3.75rem;
          letter-spacing: -0.08em;
          white-space: nowrap;
          text-align: center;
        `}>I HAVE NO IDEA HOW YOU <br/>GOT HERE
        </div>
        <Button route={'/works'} buttonName={'Go to a better place'}/>
      </div>
    </>
  );
}

export default NotFound;
