const CharacterSummaryListItem = (props) => {
  return (
    <li className="menu__item" id={props.chapterId}>
      {props.chapterTitle}
      {props.children}
    </li>
  );
};

export default CharacterSummaryListItem;
