import {getIconByName} from "../../icon-cache.ts";
import {css} from "@emotion/react";
import {useNavigate} from "react-router-dom";

const Superwise = () => {
  const navigate = useNavigate();
  const Bullet = getIconByName('bullet');
  const Hero = getIconByName('superwise-hero');
  const Figure1 = getIconByName('superwise-figure1');
  const Figure2 = getIconByName('superwise-figure2');
  const Figure3 = getIconByName('superwise-figure3');
  const Figure4 = getIconByName('superwise-figure4');

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
            <p>Superwise is an AI reliability platform that helps companies to govern their AI systems and machine
              learning models, while streamlining the development of new AI applications and agents. Superwise serves a
              range of organizations, from small startups to large enterprises, and is designed for technical users,
              including data scientists, application developers, and business analysts.</p>
          </div>
          <div css={css`
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            flex: 1;
          `}>
            <h3>Role</h3>
            <p>As the Principal Lead Product Designer, I led the UX and UI for the entire product from the ground up. I
              conducted user research, defined the design system from scratch, created wireframes and user flows,
              prepared
              detailed design specs, and conducted acceptance testing. Additionally, I led product marketing design
              efforts, including videos, animations, presentations, and branding—demonstrating my versatility.</p>
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
                <p>Scaling the product usage and adoption to drive product engagement and growth</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Adapting a new UI that is modern and trendy while addressing and improving existing and new UX
                  issues</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Initiating a new, robust process to enhance overall quality and improve efficiency in collaboration
                  between engineering and product teams</p>
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
                <p>Prioritizing user needs, crafting intuitive designs, and getting feedback. Collaborating closely with
                  development, focusing on key features, and ensuring design consistency</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Exploring design trends and prototyping for usability. Refine with feedback and collaborating with
                  development team for appealing and functional design</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Setting UX/UI principles, documenting specs, defining design acceptance criteria, and implementing
                  Storybook Design system and product spec</p>
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
              <p>The Query Builder feature in the SW platform offers users a flexible and straightforward way to
                explore
                their data. It empowers users to make data-driven decisions, understand complex datasets, and
                transform
                raw data into valuable insights</p>
            </div>
            <p css={css`
              font-size: 1.5rem;
              flex: 2;
            `}>My challenge was to create a new interface that is based on the SQL querying code type, in a visual easy
              way, without requiring advanced technical knowledge.</p>
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
                <p>User research, and competitive analysis. Looking at references of SQL querying and identifying the
                  flow and reasoning of each step</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>Starting fast sketching, mapping and wireframing ideas and prototyping to come up with a solution</p>
              </div>
              <div css={css`
                display: flex;
                gap: 1rem;
                flex: 1;
              `}>
                <Bullet width={10} height={12} css={css`
                  flex: 1 0 auto;
                `}/>
                <p>After implementation, testing and getting feedback and conclusions for future concepts of the
                  feature</p>
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
          `}>
            Working on the platform allowed me to deliver an entirely new experience, enhancing client engagement and
            ultimately leading to Superwise’s acquisition by BlattnerTech Technologies. Since then, I have been working
            on various products within the larger organization, focusing on aligning product UX/UI standards and
            practices globally while continuing my design work on the Superwise product.</p>
        </div>
        <button onClick={() => navigate('/works/captain-credit')} css={css`
          font-size: 2.5rem;
          font-weight: 700;
          background: none;
          border: none;
          cursor: pointer;
        `}>NEXT PROJECT</button>
      </div>
    </>
  )
}

export default Superwise;
