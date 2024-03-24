import kc_logo from "../images/kc_logo.JPG";

const Header = () => {
  return (
    <header id="header" className="main_content__header">
      <img id="kc_logo" className="kc_logo" src={kc_logo} alt="" />
    </header>
  );
};

export default Header;
