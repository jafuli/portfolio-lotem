import {css} from "@emotion/react";
import WorksMenu from "../../components/WorksMenu/WorksMenu.tsx";
import BannerSelector from "../../components/BannerSelector/BannerSelector.tsx";

const Works = () => {

  const worksContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 100%;
  `;

  return (
    <>
      <div css={worksContainer}>
        <WorksMenu/>
        <BannerSelector/>
      </div>
    </>
  );
}

export default Works;
