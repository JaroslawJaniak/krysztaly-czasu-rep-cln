import MenuUnorderedList from "./MenuUnorderedList";
import "../../styles/menu.css";

const Menu = (props) => {
  return (
    <nav className="">
      <MenuUnorderedList
        chapters_info={props.chapters_info}
        getChapterViewId={props.getChapterViewId}
      ></MenuUnorderedList>
    </nav>
  );
};

export default Menu;
