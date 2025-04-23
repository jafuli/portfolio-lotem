import {getIconByName} from "../../icon-cache.ts";
import {css} from "@emotion/react";
import {useNavigate} from "react-router-dom";

const Punct = () => {
  const navigate = useNavigate();
  const Bullet = getIconByName('bullet');
  const Hero = getIconByName('punct-hero');
  const Figure1 = getIconByName('punct-figure1');
  const Figure2 = getIconByName('punct-figure2');
  const Figure3 = getIconByName('punct-figure3');
  const Figure4 = getIconByName('punct-figure4');

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
            <p>PUNCT is a technology driven platform revolutionizing purchasing in the construction industry. It
              streamlines material orders, delivery management, and supplier coordination into a seamless, efficient
              system. By optimizing purchasing workflows, PUNCT helps construction professionals reduce costs, improve
              efficiency, and maintain better control over their projects.</p>
          </div>
          <div css={css`
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            flex: 1;
          `}>
            <h3>Role</h3>
            <p>As a Product Designer working with PUNCT company, I designed both mobile and desktop experiences,
              ensuring seamless integration between field workers using the app and managers using the desktop for
              oversight. I created a style guide to maintain consistency across both platforms, focusing on intuitive UI
              elements and clear workflows. My work included wireframing, prototyping, and delivering user-centric
              designs to improve efficiency for all users.</p>
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
                <p>Designing for two user types Simultaneously</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Handling complex data organization</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Balancing between functionality and simplicity</p>
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
                <p>Created intuitive workflows for both field workers and managers, ensuring a seamless experience
                  across mobile and desktop platforms</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Organizing large amounts of data in a clear, hierarchical structure, ensuring users could easily
                  access and understand the information</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>I ensured the platform was feature-rich yet simple, without compromising usability for either user
                  group.</p>
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
              <p>Enabling field users to manage orders efficiently by adding items to existing or new orders while
                maintaining clear visibility and navigability of a hierarchical product structure</p>
            </div>
            <p css={css`
              font-size: 1.5rem;
              flex: 2;
            `}>My challenge was to handle a hierarchy of products and sub-products in a way that allows the user to
              filter efficiently while still keeping all relevant information visible. </p>
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
                <p>Designed a hierarchical filtering system with clear UI and progressive disclosure to maintain
                  visibility.</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Focused on intuitive navigation, logical structure, and iterative testing to align with real
                  workflows.</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Implemented dynamic multi-level filtering with collapsible hierarchy and optimized search for better
                  usability.</p>
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
          `}>As a result, field users were able to manage orders more efficiently, with improved filtering and
            visibility. My design solution enhanced their workflow, leading to higher productivity and user
            satisfaction, and ultimately contributing to the app's overall success.</p>
        </div>
        <button onClick={() => navigate('/works/obli')} css={css`
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

export default Punct;
