import React, { useState } from "react";
import CheckboxComponent from "./CheckboxComponent";

const Chapter1GenderSelection = (props) => {
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);

  const handleMaleChange = () => {
    setMaleChecked(!maleChecked);
    setFemaleChecked(false);
  };

  const handleFemaleChange = () => {
    setFemaleChecked(!femaleChecked);
    setMaleChecked(false);
  };

  if (maleChecked) {
    props.getGenderSelection("mężczyzna");
  } else if (femaleChecked) {
    props.getGenderSelection("kobieta");
  }

  return (
    <form>
      <CheckboxComponent
        id={"male"}
        class={"checkbox__gender"}
        name={"Mężczyzna"}
        type={"checkbox"}
        checked={maleChecked}
        onChange={handleMaleChange}
      />
      <CheckboxComponent
        id={"female"}
        class={"checkbox__gender"}
        name={"Kobieta"}
        type={"checkbox"}
        checked={femaleChecked}
        onChange={handleFemaleChange}
      />
    </form>
  );
};

export default Chapter1GenderSelection;
