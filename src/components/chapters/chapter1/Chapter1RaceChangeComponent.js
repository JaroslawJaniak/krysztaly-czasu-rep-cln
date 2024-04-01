import React, { useState } from 'react';
import CheckboxComponent from './CheckboxComponent';
import chp1_race_description from "./chp1_race_description";


const RaceSelection = () => {
  const [checkedElement, setCheckedElement] = useState(null);

  const handleElementChange = (element) => {
    setCheckedElement(element);
  };

  return (
    <form>
      {chp1_race_description.map((chp1_race_description) => (
        <div>
          <br />
          <CheckboxComponent
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

export default RaceSelection;