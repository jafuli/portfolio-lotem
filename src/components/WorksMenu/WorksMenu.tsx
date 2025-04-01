import {css} from "@emotion/react";
import FilterButton from "../FilterButton/FilterButton.tsx";

const WorksMenu = () => {
  const menuContainer = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 36px;
    padding: 20px;
    min-width: 200px;
    height: 100%;
  `;

  return (
    <div css={menuContainer}>
      <FilterButton filterName={'All works'}/>
      <FilterButton filterName={'Product design'}/>
      <FilterButton filterName={'Branding'}/>
      <FilterButton filterName={'Others'}/>
    </div>
  );
}

export default WorksMenu;
