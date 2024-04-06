import "./CharacterSummary.css";
import map0 from "../../images/map0.jpg";

import * as summaryJSON from "../../data/summaryDATA.json";
import CharacterSummarySublistItem from "./CharacterSummarySublistItem";

const CharacterSummary = (props) => {
  const dataJSON = summaryJSON;

  const summaryData = ["Płeć", "Rasa", "Opis rasy", "Miejsce urodzenia"];

  return (
    <div className="character__summary">
      <ol className="character__summary_list ordered-list">
        <li className="character__summary__item">
          <span className="character__summary_name">(Imię Postaci)</span>
          <ul className="unordered-list">
            {summaryData.map((text, index) => (
              <CharacterSummarySublistItem
                key={`summarySublistItem${index}`}
                summaryText={text}
                summaryValue={dataJSON[`text${index+1}`]}
              ></CharacterSummarySublistItem>
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
