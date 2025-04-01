import {getIconByName} from "../../icon-cache.ts";
import {css} from "@emotion/react";
import {useTheme} from "../../contexts/ThemeContext/ThemeContext.tsx";
import Button from "../../components/Button/Button.tsx";

const TopMenu = () => {
  const {theme} = useTheme();
  // console.log(theme.darkTheme);
  const IconComponent = getIconByName(theme.darkTheme ? 'logo-lotem' : 'logo-lotem-dark'); // TODO: conditionally render dark/light icon based on location.pathname from useLocation()

  return (
    <>
      <div css={css`
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        height: 4.125rem;
        padding: 1.25rem;
      `}>
        <IconComponent width={61} height={26}/>
        <div css={css`
          display: flex;
          gap: 3.3125rem;
        `}>
          <Button buttonName={'About'}/>
          <Button buttonName={'Contact'}/>
        </div>
      </div>
    </>
  );
}

export default TopMenu;
