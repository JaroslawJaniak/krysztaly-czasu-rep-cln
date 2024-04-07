import React, { useState } from "react";
import * as fs from "fs";

import Header from "./Header";
import Menu from "./menu/Menu";
//import CharacterSummary from "./summary/CharacterSummary";
import CharacterSummary from "./summaryJSON/CharacterSummary";
import WindowInnerSize from "./WindowInnerSize";

import * as infoDataChapter1 from "../data/mainComponentsData/mainComponentsInfoDataChapter1.json";
import * as infoDataChapter2 from "../data/mainComponentsData/mainComponentsInfoDataChapter2.json";
import * as infoDataChapter3 from "../data/mainComponentsData/mainComponentsInfoDataChapter3.json";

import test from "../data/test";

import Chapter1Content from "./chapters/chapter1/Chapter1Content";

import "../styles/main.css";

const Main = () => {
  const [stateChapterViewId, setStateChapterViewId] = useState("s1");
  const [stateGenderSelection, setStateGenderSelection] = useState("—");
  const [stateRaceSelection, setStateRaceSelection] = useState("—");
  const [stateRaceDescription, setStateRaceDescription] = useState("—");

  const getChapterViewId = (id) => {
    setStateChapterViewId(id);
  };
  const getGenderSelection = (gender) => {
    setStateGenderSelection(gender);
  };
  const getRaceSelection = (race) => {
    setStateRaceSelection(race);
  };
  const getRaceDescription = (raceDescription) => {
    setStateRaceDescription(raceDescription);
  };

  let summaryComponetData = [
    { text: "Płeć: ", value: `${stateGenderSelection}` },
    { text: "Rasa: ", value: `${stateRaceSelection}` },
    { text: "Opis rasy: ", value: `${stateRaceDescription}` },
    { text: "Charakter: ", value: "—" },
    { text: "Miejsce urodzenia: ", value: "—" },
    { text: "Wyjściowa klasa społeczna: ", value: "—" },
    { text: "Roczny dochód: ", value: "—" },
    { text: "Ułomności: ", value: "—" },
    { text: "Zdolności nadnaturalne: ", value: "—" },
    { text: "Profesja: ", value: "—" },
  ];

  const mainComponentsInfo = [
    infoDataChapter1,
    infoDataChapter2,
    infoDataChapter3,
  ];

  let defaultView = <div>- DEFAULT VIEW {stateChapterViewId} -</div>;

  if (stateChapterViewId === "s1") {
    defaultView = (
      <Chapter1Content
        getGenderSelection={getGenderSelection}
        getRaceSelection={getRaceSelection}
        getRaceDescription={getRaceDescription}
      />
    );
  }

  return (
    <main className="main main_container" role="main">
      <div className="main_container_menu">
        main_container__menu
        <Menu
          chapters_info={mainComponentsInfo}
          getChapterViewId={getChapterViewId}
        />
      </div>
      <div className="main_container">
        <Header />
        <div className="main_container-sections">
          main_container__sections 
          {defaultView}
        </div>
      </div>
      <div className="main_container_summary summary">
        main_container__summary{" "}
        <CharacterSummary
          className="summary"
          summaryData={summaryComponetData}
        />
      </div>
      <WindowInnerSize />
    </main>
  );
};

export default Main;
