import {css} from "@emotion/react";

type FilterButtonProps = {
  filterName: string;
  onFilterClick: (filter: string) => void;
  isActive: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({filterName, onFilterClick, isActive}) => {
  const activeStyles = css`
    background: linear-gradient(117.9deg, #4A14EA 1.2%, #D6377F 39.6%, #628EEB 69.98%, #63CA7B 111.25%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  const FilterButtonBase = css`
    background: none;
    border: none;
    font-size: 1.25rem;
    font-weight: 400;
    color: #fff;
    cursor: pointer;
    text-align: left;
    padding: 5px;
    transition: color 0.3s ease;
    ${isActive && activeStyles}

    &:hover {
      font-weight: 700;
      ${activeStyles}
    }

    &:active {
      ${activeStyles}
    }
  `;

  return (
    <button onClick={() => onFilterClick(filterName)} css={FilterButtonBase}>{filterName}</button>
  )
}

export default FilterButton;
