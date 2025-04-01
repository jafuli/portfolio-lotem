import {css} from "@emotion/react";

const Contact = () => {
  return (
    <>
      <div css={css`
        display: flex;
        flex-direction: column;
        gap: 1.75rem;
        justify-content: center;
        align-items: center;
        font-size: 1.875rem
      `}>
        <div css={css`font-size: 3.75rem`}>GET IN TOUCH</div>
        <a href="mailto:lotemsharabani@gmail.com"
          css={css`
               color: #fff;
               text-decoration: underline;
               cursor: pointer;
             `}>lotemsharabani@gmail.com</a>
        <div>Direct to &nbsp;
          <a aria-label="Chat on WhatsApp"
             href="https://wa.me/972585077708"
             css={css`
               color: #fff;
               text-decoration: underline;
               cursor: pointer;
             `}>WhatsApp</a>
        </div>
        <div>+972585077708</div>
      </div>
    </>
  );
}

export default Contact;
