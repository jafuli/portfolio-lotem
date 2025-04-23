import {getIconByName} from "../../icon-cache.ts";
import {css} from "@emotion/react";
import {useNavigate} from "react-router-dom";

const Obli = () => {
  const navigate = useNavigate();
  const Bullet = getIconByName('bullet');
  const Hero = getIconByName('obli-hero');
  const Figure1 = getIconByName('obli-figure1');
  const Figure2 = getIconByName('obli-figure2');
  const Figure3 = getIconByName('obli-figure3');
  const Figure4 = getIconByName('obli-figure4');

  return (
    <>
      <div css={css`
        width: min-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.75rem;
        margin: auto;
        padding: 60px 0;
      `}>
        <Hero/>
        <div css={css`
          display: flex;
          justify-content: space-between;
          gap: 13%;
        `}>
          <div css={css`
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            flex: 1;
          `}>
            <h3>Overview</h3>
            <p>Obli is an Israeli company providing digital non-bank guarantees without requiring a deposit.</p>
          </div>
          <div css={css`
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            flex: 1;
          `}>
            <h3>Role</h3>
            <p>I led the development of the brand’s identity, crafting a strong design concept and refreshing their
              branding. My work included redesigning the company’s logo, designing the website, tailored iconography,
              illustrations creating an animated commercial, producing animations across all assets, and designing
              creative covers for social media and the company’s blog.</p>
          </div>
        </div>
        <Figure1/>
        <div css={css`
          display: flex;
          flex-direction: column;
          gap: 36px;
          width: 100%;
          background-color: #F7F7F7;
          border-radius: 0.5rem;
          padding: 50px;
        `}>
          <div css={css`
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          `}>
            <h3>Brand evolution</h3>
            <div css={css`
              display: flex;
              gap: 2rem;
            `}>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Obli’s original branding lacked a distinct identity and a strong visual language. Through research
                  and strategic design decisions, I developed a refined, bold, and modern brand that aligns with their
                  vision and values.</p>
              </div>
            </div>
          </div>

        </div>
        <Figure2/>
        <div css={css`
          display: flex;
          flex-direction: column;
          gap: 36px;
          width: 100%;
          background-color: #F7F7F7;
          border-radius: 0.5rem;
          padding: 50px;
        `}>
          <div css={css`
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          `}>
            <h3>Website & Mobile experience</h3>
            <div css={css`
              display: flex;
              gap: 2rem;
            `}>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>The UX/UI redesign focused on clarity, usability, and engagement. I redefined the user journey,
                  optimized accessibility, and introduced a fresh, intuitive interface. </p>
              </div>
            </div>
          </div>
        </div>
        <Figure3/>
        <div css={css`
          display: flex;
          flex-direction: column;
          gap: 36px;
          width: 100%;
          background-color: #F7F7F7;
          border-radius: 0.5rem;
          padding: 50px;
        `}>
          <div css={css`
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          `}>
            <h3>Marketing materials</h3>
            <div css={css`
              display: flex;
              gap: 2rem;
            `}>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>To support the brand’s online presence, I designed various hand tailored marketing materials,
                  including:
                  Social media banners for Facebook & LinkedIn, one-pagers & presentations, ad creatives that align with
                  the new visual identity
                  This helped to enhance brand visibility and create a consistent, recognizable look across
                  platforms.</p>
              </div>
            </div>
          </div>
        </div>
        <Figure4/>
        {/*</div>*/}
        <div css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        `}>
          <h4>The results</h4>
          <p css={css`
            font-size: 1.5rem;
            text-align: center;
            padding: 13px 88px;
            border: 1px solid #ECECEC;
            border-radius: 0.5rem;
          `}>Since the rebrand, Obli has seen increased engagement and conversion rates. The fresh visual identity and
            improved user experience have contributed to a stronger, more professional brand presence.</p>
        </div>
        <button onClick={() => navigate('/works/superwise')} css={css`
          font-size: 2.5rem;
          font-weight: 700;
          background: none;
          border: none;
          cursor: pointer;
        `}>NEXT PROJECT
        </button>
      </div>
    </>
  )
}

export default Obli;
