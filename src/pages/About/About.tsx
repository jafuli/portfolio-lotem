import {css} from "@emotion/react";
import img from './../../assets/images/about-img.png';

const About = () => {
  return (
    <>
      <div css={css`
        margin: auto;
        display: flex;
        flex-direction: column;
        width: 75%;
      `}>
        <div css={css`
          font-size: 3.75rem;
          letter-spacing: -0.08em;
          white-space: nowrap;
        `}>NEED A BIT MORE INFO HUH?
        </div>
        <div css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-end;
          gap: 10%;
        `}>
          <div css={css`
            letter-spacing: 0.06em;
          `}>
            <p>
              <span css={css`
                letter-spacing: 0.3em;
              `}
              >Hello hello,</span> I'm Lotem, a creative human.</p>
            <br/>
            <p css={css`
              padding-left: 116px;
              width: 50rem;
            `}>I have graduated from Shenkar's College-Israel as a communication designer.<br/> Over the past years,
              I've honed
              my skills in designing and directing digital products, enjoying the creative process and aiming to craft
              delightful, memorable experiences. </p>
            <br/>
            <p css={css`
              padding-left: 32px;
              width: 55rem;
            `}>My inspiration comes from treating the world as my sandbox, watching, observing and learning everyday
              experiences and transforming them into new and original ways. I express playfulness and surprise in my
              work,
              balancing aesthetics with practicality., I create with passion and love learning new things along the
              way</p>
          </div>
          <div css={css`
            display: flex;
            flex-direction: column;
          `}>
            <img src={img}
                 alt={'about-img'}
                 css={css`
                   width: 100%;
                   min-width: 340px;
                   height: auto;
                   max-width: 600px;
                   display: block;
                 `}/>
            <span css={css`
              text-align: right;
              margin-top: 10px;
              letter-spacing: 0.3em;
            `}>
            You may also download my <span css={css`
              letter-spacing: normal;
              font-weight: 700;
            `}>cv</span>
          </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
