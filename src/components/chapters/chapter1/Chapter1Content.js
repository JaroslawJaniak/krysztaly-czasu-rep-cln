import React, { useState } from "react";

import GenderSelection from "./Chapter1GenderChangeComponent";
import RaceSelection from "./Chapter1RaceChangeComponent";

const ChapterContent_I = () => {
  return (
    <div>
      <GenderSelection />
      <RaceSelection />
    </div>
  );
};

export default ChapterContent_I;
