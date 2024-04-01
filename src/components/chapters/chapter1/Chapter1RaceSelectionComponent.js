import React, { useState } from "react";
import CheckboxComponent from "./CheckboxComponent";
import chp1_race_description from "./chp1_race_description";

const Chapter1RaceSelection = (props) => {
  const [checkedElement, setCheckedElement] = useState(null);

  const handleElementChange = (element) => {
    setCheckedElement(element);
  };

  return (
    <form>
      {chp1_race_description.map((chp1_race_description) => (
        <div key={`chp1_div_checkbox${chp1_race_description.id}`}>
          <br />
          <CheckboxComponent
            key={`chp1_checkbox${chp1_race_description.id}`}
            id={chp1_race_description.id}
            class={chp1_race_description.class}
            name={chp1_race_description.name}
            type={chp1_race_description.type}
            checked={checkedElement === `${chp1_race_description.name}`}
            onChange={() =>
              handleElementChange(`${chp1_race_description.name}`)
            }
          />
          {chp1_race_description.text.map((chapterText) => (
            <p>{chapterText}</p>
          ))}
        </div>
      ))}
    </form>
  );
};

export default Chapter1RaceSelection;
