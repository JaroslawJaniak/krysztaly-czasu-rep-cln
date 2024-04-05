import React, { useState } from "react";
import CheckboxComponent from "./CheckboxComponent";
import chp1_race_description from "./chp1_race_description";

import * as chp1JSON from "../../../data/chaptersCompnentsData/chapter1Data/chp1_data.json"; //wymagawłaściwego formatu danych w pliku JSON -> TO-DO
import * as chp1JSON_race1 from "../../../data/chaptersCompnentsData/chapter1Data/chp1_race1.json";

const Chapter1RaceSelection = (props) => {
  const [checkedElement, setCheckedElement] = useState(null);

  const handleElementChange = (element) => {
    setCheckedElement(element);
  };

   

  const chp1JSONrace1 = chp1JSON_race1;
  console.log(chp1JSONrace1);

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
            onChange={() => {
              handleElementChange(`${chp1_race_description.name}`)
              props.getRaceSelection(chp1_race_description.name);
              props.getRaceDescription(chp1_race_description.text);
            }
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
