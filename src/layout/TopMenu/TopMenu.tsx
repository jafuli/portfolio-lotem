import {getIconByName} from "../../icon-cache.ts";

const TopMenu = () => {
  const IconComponent = getIconByName('logo-lotem');
  return (
    <>
      <h1>Top Menu</h1>
      <IconComponent width={240} height={240} fill="black" />
    </>
  );
}

export default TopMenu;
