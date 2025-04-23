import {getIconByName} from "../../icon-cache.ts";
import {css} from "@emotion/react";
import {useNavigate} from "react-router-dom";

const CaptainCredit = () => {
  const navigate = useNavigate();
  const Bullet = getIconByName('bullet');
  const Hero = getIconByName('captain-credit-hero');
  const Figure1 = getIconByName('captain-credit-figure1');
  const Figure2 = getIconByName('captain-credit-figure2');
  const Figure3 = getIconByName('captain-credit-figure3');
  const Figure4 = getIconByName('captain-credit-figure4');

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
            <p>Captain Credit is a company committed to transforming credit ratings into empowering tools that enhance
              financial management for users. The service provide personalized recommendations aimed at improving the
              users financial strategies. The tools assist in increasing the users credit rating and securing better
              terms from credit providers.</p>
          </div>
          <div css={css`
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            flex: 1;
          `}>
            <h3>Role</h3>
            <p>As a Lead Product Designer at Captain Credit, I collaborated with the Product Manager to create seamless
              user flows and vibrant designs. I expanded the UI with relatable illustrations to enhance visual appeal
              and user engagement. My work also included designing emails, app screenshots, and animations to improve
              user interactions. By focusing on user-centric design and staying updated with trends, I delivered
              innovative solutions that aligned with the company's goals.</p>
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
            <h3>The challenges</h3>
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
                <p>Handling complex data, such as credit scores and financial information, and presenting it in a
                  simplified and understandable way to users</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Maintaining a consistent design language across a growing product while expanding its feature set</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Optimizing user experience by seamlessly integrating new features into the existing design</p>
              </div>
            </div>
          </div>

          <div css={css`
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          `}>
            <h3>The approach</h3>
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
                <p>Researched user needs to guide the design of intuitive visuals. Presenting information step-by-step
                  and gathering continuous user feedback to refine and enhance how data is presented</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Establishing style guidelines and regularly reviewing new features to maintain cohesion as the
                  product grows</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Maintaining consistency with design patterns, gathering user feedback, and collaborating with the
                  Product Manager</p>
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
            gap: 25%;
          `}>
            <div css={css`
              display: flex;
              flex-direction: column;
              gap: 1rem;
              flex: 1;
            `}>
              <h3>Dive into a use case</h3>
              <p>Users often find credit scores confusing and are unsure about what factors impact their scores. They
                lack clear guidance on how to improve their financial health and feel like they don’t know how to manage
                their credit.</p>
            </div>
            <p css={css`
              font-size: 1.5rem;
              flex: 2;
            `}>My challenge was to create a user friendly experience that educates users on the factors influencing
              their credit scores and providing them with actionable steps to improve them.</p>
          </div>
          <Figure3/>
          <div css={css`
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          `}>
            <h3>The approach</h3>
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
                <p>Identifying the key steps in the user's journey by mapping their journey and creating sketches that
                  grouped related data into intuitive categories, ensuring a clear and logical flow.</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Ensuring that the data presented was not overwhelming. By leveraging collapsible sections and
                  prioritizing information hierarchy.</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Using visualizations like graphs, emojis, and color-coding that were chosen to create a clear and
                  immediate understanding of credit factors.</p>
              </div>
            </div>
          </div>
          <Figure4/>
        </div>
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
          `}>As a result, customer engagement and satisfaction saw significant improvement. My contributions played a
            key role in refining the platform’s design and usability, helping positioning the company for sustained
            growth and success in the fintech industry.</p>
        </div>
        <button onClick={() => navigate('/works/punct')} css={css`
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

export default CaptainCredit;
