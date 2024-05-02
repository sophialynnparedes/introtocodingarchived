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

const Lesson19 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 19: Limited Projectiles";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Looking at a Classic Example",
    "Tips & Strategies",
    "Submit your Lesson 19 Project",
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
            In this lesson, we'll add the ability to shoot projectiles and have
            limited ammunition to our Adventure Game.
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
              In the game, <u>The Legend of Zelda: A Link to the Past</u>, the
              player character Link is able to obtain a bow and shoot arrow
              projectiles as long as he has arrows. When he runs out of arrows,
              he's no longer able to shoot arrows.
            </li>
          </ul>
          <br />
          <Image src="/Lesson19/pic1.jpeg" />
          <br />
          <ul>
            <li>
              <b>
                Your task is to grant a similar ability to shoot projectiles to
                your player character and ensure it only works if the player has
                ammunition of some sort.
              </b>
            </li>
          </ul>
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          {" "}
          <ul>
            <li>
              You will want a new numerical variable to represent the
              ammunition.
            </li>
            <br />
            <li>
              Generally, we want the direction of the projectile to go in the
              direction we are facing, so having some way of telling the
              direction we are facing is important.
            </li>
            <br />
            <li>
              All projectiles have the same SpriteKind: "Projectile" by default.
              If you already have other projectiles in your game, you may need
              to set the SpriteKind to something else like "PlayerProjectiles".
            </li>
            <br />
            <li>
              Adding an indicator representing the current amount of ammunition
              is optional. The arcade-text extension can be useful in creating
              this display as well:{" "}
            </li>
          </ul>
          <br />
          <Image src="/Lesson19/pic2.png" />
          <br />
          <ul>
            <li>
              <b>
                When you are finished, submit your Adventure Game Project for
                Lesson 19.
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
            When you have incorporated limited projectiles into your Adventure
            Game, submit it here for Lesson 19:
          </p>
          <Submit field="Lesson19" title="Lesson 19: Limited Projectiles" />
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
export default Lesson19;
