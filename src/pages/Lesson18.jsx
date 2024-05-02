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

const Lesson18 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 18: Attacking";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Looking at a Classic Example",
    "Tips & Strategies",
    "Submitting your Lesson 18 Project",
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
            In this lesson, we'll add a short-range method of attacking for our
            player character to defeat enemies.
          </h3>
          <br />
          <br />
          <Title subtitle="Setup:" />
          <ul>
            <li>
              Duplicate your Adventure Game Project (so you don't accidentally
              mess up or lose the progress you've made so far.
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
              player character, Link, has a sword to swing to defeat enemies. In
              reality, that sword swing is commonly created in one of two main
              ways:
            </li>
          </ul>
          <br /> <Image src="/Lesson18/pic1.png" />
          <br />
          <ul>
            <li>
              Method 1: In <u>A Link to the Past</u>, the animation frames above
              are played on each press of the B Button.
            </li>
            <br />
            <li>
              The computer then checks to see if the enemy in a certain area
              next to Link.{" "}
            </li>
          </ul>
          <br />
          <Image src="/Lesson18/pic2.png" />
          <br />
          <ul>
            <li>
              Method 2: A second method that's common for attacking is to make
              the sword or weapon a separate sprite.
            </li>
            <br />
            <li>
              In the game, <u>The Legend of Zelda: Oracle of Seasons</u>, Link's
              sword swing animation is missing a sword.
            </li>
          </ul>
          <br />
          <Image src="/Lesson18/pic3.png" />
          <br />
          <ul>
            <li>
              The sword is a separate sprite that is created next to Link when
              the B button is pressed, and is destroyed at the end of animation.
            </li>
            <br />
            <li>
              If the sword makes contact with an enemy, the enemy takes damage.
            </li>
          </ul>
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          <ul>
            <li>
              Method 1 is more visually appealing and realistic, but requires
              quite a few conditional statements.
            </li>
            <br />
            <li>
              Method 2 is usually a bit easier and actually looks pretty good
              too if you have a character that uses something like a spear or
              lance instead.
            </li>
            <br />
            <li>
              In either method, you will need to reference the player
              character's position. For example, if I want to place the sword to
              the right of my sprite, I could structure my button press similar
              to this:
            </li>
          </ul>
          <br />
          <Image src="/Lesson18/pic4.png" />
          <br />
          <ul>
            <li>
              <b>
                Your task for this lesson is to add the ability to attack with
                short-range weapon to your player character. When you finish,
                submit your Adventure Game Project for Lesson 18.
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
            When you have successfully incorporated attacking into your
            Adventure Game Project, submit it here for Lesson 18:
          </p>
          <Submit field="Lesson18" title="Lesson 18: Attacking" />
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
export default Lesson18;
