import "./CharacterSummary.css";
import map0 from "../../images/map0.jpg";

import CharacterSummaryListItem from "./CharacterSummaryListItem";
import CharacterSummarySublist from "./CharacterSummarySublist";

const CharacterSummary = (props) => {
  return (
    <div className="character__summary">
      <ol className="character__summary_list ordered-list">
        <li className="character__summary__item">
          <span className="character__summary_name">(Imię Postaci)</span>
          <ul className="unordered-list">
            {props.chapters_info.map((chapters, index) => (
              <CharacterSummaryListItem
                key={`summaryListItem${index}`}
                chapterId={`summaryListItem${index}`}
                chapterTitle={chapters.chapterTitle}
              >
                <CharacterSummarySublist
                  summaryInfo={chapters.summaryComponetContent}
                ></CharacterSummarySublist>
              </CharacterSummaryListItem>
            ))}
          </ul>
        </li>
        <li>
          <img
            id="summaryMap"
            src={map0}
            alt="map"
            className="mapImageSummary"
          />
        </li>
      </ol>
    </div>
  );
};

export default CharacterSummary;
