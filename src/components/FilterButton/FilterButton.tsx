import {css} from "@emotion/react";

type FilterButtonProps = {
  filterName: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({filterName}) => {
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

    &:hover {
      font-weight: 700;
      background: linear-gradient(117.9deg, #4A14EA 1.2%, #D6377F 39.6%, #628EEB 69.98%, #63CA7B 111.25%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:active {
      background: linear-gradient(117.9deg, #4A14EA 1.2%, #D6377F 39.6%, #628EEB 69.98%, #63CA7B 111.25%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;

  return (
    <button css={FilterButtonBase}>{filterName}</button>
  )
}

export default FilterButton;
