import "./CharacterSummary.css";
import map0 from "../../images/map0.jpg";

import CharacterSummarySublistItem from "./CharacterSummarySublistItem";

const CharacterSummary = (props) => {
  return (
    <div className="character__summary">
      <ol className="character__summary_list ordered-list">
        <li className="character__summary__item">
          <span className="character__summary_name">(Imię Postaci)</span>
          <ul className="unordered-list">
            {props.summaryData.map((data, index) => (
              <CharacterSummarySublistItem
                key={`summarySublistItem${index}`}
                summaryText={data.text}
                summaryValue={data.value}
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
