import {css} from "@emotion/react";
import WorksMenu from "../../components/WorksMenu/WorksMenu.tsx";
import BannerSelector from "../../components/BannerSelector/BannerSelector.tsx";
import {useState} from "react";

const Works = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All works');

  const worksContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    //height: 100%;
    flex: 1;
    position: relative;
  `;

  const handleFilterClick = (filterName: string) => {
    setSelectedFilter(filterName);
  }

  return (
    <>
      <div css={worksContainer}>
        <WorksMenu activeFilter={selectedFilter} onFilter={handleFilterClick}/>
        <BannerSelector filter={selectedFilter}/>
      </div>
    </>
  );
}

export default Works;
