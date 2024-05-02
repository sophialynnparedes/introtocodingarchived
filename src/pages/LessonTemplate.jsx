import Title from "../components/Title";
import Button from "../components/Button";
import Video from "../components/Video";
import Page from "../components/Page";
import Navigate from "../components/Navigate";
import Image from "../components/Image";
import { useState } from "react";
import Row from "../components/Row";
import Game from "../components/Game";
import Submit from "../components/Submit";

const LessonTemplate = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson Title";
  const agendaItems = ["Lesson Objective & Setup"];

  const Section = (props) => {
    if (page == 0) {
      return <></>;
    }
    if (page == 1) {
      return <></>;
    }
    if (page == 2) {
      return <></>;
    }
    if (page == 3) {
      return <></>;
    }
    if (page == 4) {
      return <></>;
    }
    if (page == 5) {
      return <></>;
    }
    if (page == 6) {
      return <></>;
    }
    if (page == 7) {
      return <></>;
    }
    if (page == 8) {
      return <></>;
    }
    if (page == 9) {
      return <></>;
    }
  };

  return (
    <Page>
      <Navigate
        page={page}
        agendaItems={agendaItems}
        changeBack={() => {
          setPage(page - 1);
        }}
        changeForward={() => {
          setPage(page + 1);
        }}>
        <Title title={page == 0 ? lessonTitle : agendaItems[page]} />
        <Section />
      </Navigate>
    </Page>
  );
};
export default LessonTemplate;
