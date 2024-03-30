import React from "react";
import Header from "./Header";
import Menu from "./menu/Menu";
import CharacterSummary from "./summary/CharacterSummary";
import WindowInnerSize from "./WindowInnerSize";

import * as infoDataChapter1 from "../data/mainComponentsData/mainComponentsInfoDataChapter1.json";
import * as infoDataChapter2 from "../data/mainComponentsData/mainComponentsInfoDataChapter2.json";
import * as infoDataChapter3 from "../data/mainComponentsData/mainComponentsInfoDataChapter3.json";

import "../styles/main.css";

const Main = () => {
  const mainComponentsInfo = [
    infoDataChapter1,
    infoDataChapter2,
    infoDataChapter3,
  ];

  return (
    <main className="main" role="main">
      <div className="main_container main_container_menu">
        main_container__menu
        <Menu chapters_info={mainComponentsInfo} />
      </div>
      <div className="main_container">
        <Header />
        <div className="main_container-sections">main_container__sections</div>
      </div>
      <div className="main_container summary">
        main_container__summary{" "}
        <CharacterSummary chapters_info={mainComponentsInfo} />
      </div>
      <WindowInnerSize />
    </main>
  );
};

export default Main;
