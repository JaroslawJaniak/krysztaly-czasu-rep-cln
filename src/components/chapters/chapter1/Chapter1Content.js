import React, { useState } from "react";

import Chapter1GenderSelection from "./Chapter1GenderSelectionComponent";
import Chapter1RaceSelection from "./Chapter1RaceSelectionComponent";


const Chapter1Content = () => {

  return (
    <div>
      <Chapter1GenderSelection />
      <Chapter1RaceSelection/>
    </div>
  );
};

export default Chapter1Content;
