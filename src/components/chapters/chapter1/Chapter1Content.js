import React, { useState } from "react";

import Chapter1GenderSelection from "./Chapter1GenderSelectionComponent";
import Chapter1RaceSelection from "./Chapter1RaceSelectionComponent";


const Chapter1Content = (props) => {

  return (
    <section>
      <Chapter1GenderSelection getGenderSelection={props.getGenderSelection} />
      <Chapter1RaceSelection
        getRaceSelection={props.getRaceSelection}
        getRaceDescription={props.getRaceDescription}
      />
    </section>
  );
};

export default Chapter1Content;
