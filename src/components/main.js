import React from "react";
import Header from "./Header";
import WindowInnerSize from "./WindowInnerSize";

import "../styles/main.css";

const Main = () => {
  const mainComponentsInfo = [
    {
      idChapter: "s1",
      titleChapter: "titleChapter1",
      anchorChapter: "#s1",
      subchaptersInfo: [
        {
          subchapterTitle: "subchapterTitle1",
          subchapterHref: "#subchapterHref1",
        },
        {
          subchapterTitle: "subchapterTitle1",
          subchapterHref: "#subchapterHref1",
        },
        {
          subchapterTitle: "subchapterTitle1",
          subchapterHref: "#subchapterHref1",
        },
      ],
      summaryComponetContent: [
        { text: "summaryComponetContent1", value: "—" },
        { text: "summaryComponetContent1", value: "—" },
      ],
      chapterComponent: "",
    },
    {
      id: "s2",
      titleChapter: "titleChapter2",
      anchorChapter: "#s1",
      subchaptersInfo: [
        {
          subchapterTitle: "subchapterTitle2",
          subchapterHref: "#subchapterHref2",
        },
        {
          subchapterTitle: "subchapterTitle2",
          subchapterHref: "#subchapterHref2",
        },
        {
          subchapterTitle: "subchapterTitle2",
          subchapterHref: "#subchapterHref2",
        },
      ],
      summaryComponetContent: [
        { text: "summaryComponetContent2", value: "—" },
        { text: "summaryComponetContent2", value: "—" },
      ],
      chapterComponent: "",
    },
  ];

  return (
    <body>
      <main className="main" role="main">
        <div class="main_container menu">main_container__menu</div>
        <div className="main_container">
          <Header />
          <div class="main_container-sections">main_container__sections</div>
        </div>
        <div class="main_container summary">main_container__summary</div>
        <WindowInnerSize />
      </main>
    </body>
  );
};

export default Main;
