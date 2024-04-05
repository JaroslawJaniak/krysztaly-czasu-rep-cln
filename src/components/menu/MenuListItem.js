import React from "react";

const MenuListItem = (props) => {
  

  const clickHandler = () => {
    props.getChapterViewId(props.chapterId);
  };

  return (
    <li role="menuitem" className="menu__item">
      <button
        id={`menu__item_${props.chapterId}`}
        className="menu__link"
        onClick={clickHandler}
      >
        {props.chapterTitle}
      </button>
      {props.children}
    </li>
  );
};

export default MenuListItem;
