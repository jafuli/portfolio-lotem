import {getIconByName} from "../../icon-cache.ts";
import {css} from "@emotion/react";
import {useTheme} from "../../contexts/ThemeContext/ThemeContext.tsx";
import Button from "../../components/Button/Button.tsx";
import {useNavigate} from "react-router-dom";

const TopMenu = () => {
  const {theme} = useTheme();
  const navigate = useNavigate();

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
        <IconComponent css={css`
          cursor: pointer;
        `} width={61} height={26} onClick={() => {navigate('/works')}}/>
        <div css={css`
          display: flex;
          gap: 3.3125rem;
        `}>
          <Button route={'/about'} buttonName={'About'}/>
          <Button route={'/contact'} buttonName={'Contact'}/>
        </div>
      </div>
    </>
  );
}

export default TopMenu;
