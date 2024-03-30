import CharacterSummarySublistItem from "./CharacterSummarySublistItem";

const CharacterSummarySublist = (props) => {
  return (
    <ul className="unordered-list">
      {props.summaryInfo.map((summaryContent,index) => (
        <CharacterSummarySublistItem
          key={`summary${index}`}
          summaryText={summaryContent.text}
          summaryValue={summaryContent.value}
        ></CharacterSummarySublistItem>
      ))}
    </ul>
  );
};

export default CharacterSummarySublist;
