import Title from "../components/Title";
import Button from "../components/Button";
import Video from "../components/Video";
import Page from "../components/Page";
import Navigate from "../components/Navigate";
import Image from "../components/Image";
import { useState, useEffect } from "react";
import Row from "../components/Row";
import Game from "../components/Game";
import Submit from "../components/Submit";

const Lesson21 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 21: Boss Battle with Weak Point";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Looking at a Classic Example",
    "Tips & Strategies",
    "Submitting your Lesson 21 Project",
  ];
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [page]);

  const Section = (props) => {
    if (page == 0) {
      return (
        <>
          <h3>
            {" "}
            In this lesson, we'll create a boss battle that has a weak point
            similar to many classic games.
          </h3>
          <br />
          <br />
          <Title subtitle="Setup:" />
          <ul>
            <li>
              Duplicate your Adventure Game Project (so you don't accidentally
              mess up or lose progress).
            </li>
          </ul>
        </>
      );
    }
    if (page == 1) {
      return (
        <>
          <ul>
            <li>
              Many classic boss battles make the battle more difficult by having
              a specific method or weak point to hit. Here's some examples:
            </li>
          </ul>
          <br />
          <Video src="https://www.youtube.com/embed/k7UVEhie8Rs?si=60glODaqw5qp6ggo" />
          <br />
          <Video src="https://www.youtube.com/embed/w5NFsx1Ztmw?si=aCOEbyseL7dNMuch" />
          <br />
          <Video src="https://www.youtube.com/embed/9x2OiYtrv3s?si=p_EFmaSaQR1JXuWa" />
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          <ul>
            <li>
              One of the tricks to create a boss battle like this is to make the
              boss using multiple sprites.
            </li>
            <br />
            <li>
              For example, the weak point is a sprite and the rest of the body
              is a different sprite with a different SpriteKind.
            </li>
            <br />
            <li>
              If the boss moves, the positioning of the weak point needs to be
              placed while referencing the position of the rest of the boss.
            </li>
            <br />
            <li>
              For example, if you want the weak point to be in the center of the
              boss, we could set up its placement like:
            </li>
          </ul>
          <br />
          <Image src="/Lesson21/pic1.png" />
          <br />
          <ul>
            <li>
              <b>
                Your task is to incorporate a boss battle that has some sort of
                weak point into your Adventure Game. When you're done, you can
                submit your Adventure Game Project for this lesson.
              </b>
            </li>
          </ul>
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          <p>
            When you've got your boss battle, submit your Adventure Game project
            for Lesson 21:
          </p>
          <Submit
            field="Lesson21"
            title="Lesson 21: Boss Battle with Weak Point"
          />
        </>
      );
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
export default Lesson21;
