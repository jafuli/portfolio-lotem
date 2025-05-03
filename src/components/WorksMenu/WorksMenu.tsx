import {css} from "@emotion/react";
import FilterButton from "../FilterButton/FilterButton.tsx";
import React from "react";

type WorksMenuProps = {
  activeFilter?: string;
  onFilter: (filterName: string) => void;
}

const WorksMenu: React.FC<WorksMenuProps> = ({activeFilter, onFilter}) => {
  const filters = ['All works', 'Product design', 'Branding'] as const;
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
      {filters.map(filter => (
        <FilterButton
          key={filter}
          filterName={filter}
          onFilterClick={onFilter}
          isActive={activeFilter === filter}
        />
      ))}
    </div>
  );
}

export default WorksMenu;
