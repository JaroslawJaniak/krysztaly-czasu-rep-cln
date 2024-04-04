const CharacterSummaryListItem = (props) => {
  return (
    <li className="summaryList__item" id={props.chapterId}>
      {props.chapterTitle}
      {props.children}
    </li>
  );
};

export default CharacterSummaryListItem;
