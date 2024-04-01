import React, { useState } from "react";

import GenderSelection from "./Chapter1GenderChangeComponent";
import RaceSelection from "./Chapter1RaceChangeComponent";

const ChapterContent1 = () => {
  return (
    <div>
      <GenderSelection />
      <RaceSelection />
    </div>
  );
};

export default ChapterContent1;
