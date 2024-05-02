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

const Lesson20 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 20: Entries & Exits";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Looking at a Classic Example",
    "Tips & Strategies",
    "Submit your Lesson 20 Project",
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
            In this lesson, we'll add more places to explore than just the
            overworld in our Adventure Game.
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
          {" "}
          <ul>
            <li>
              In the game, <u>The Legend of Zelda: A Link to the Past</u>, the
              player character, Link could find places, like houses, caves, and
              dungeons to explore that weren't seen from the overworld map.
            </li>
            <br />
            <li>
              For example, Link could enter through a door and end up inside of
              a completely new tilemap:
            </li>
          </ul>
          <br />
          <Image src="/Lesson20/pic1.png" />
          <br />
          <ul>
            <li>
              <b>
                Your task, is to add at least one location that your player
                character can enter and explore.
              </b>
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
              It starts with a Tile Overlap event and a specific tile you want
              to represent the entrance to this new location.
            </li>
            <br />
            <li>
              Once the player character overlaps with the tile, the tilemap is
              swapped out for a new one and the player character is positioned
              at the entrance of this new area.
            </li>
            <br />
            <li>
              When the player character overlaps with the exit in this new area,
              again, the tilemap is swapped out, but this time the player
              character is positioned in front of the specific entrance they had
              entered.
            </li>
            <br />
            <li>
              The arcade-tile-util extension has some useful tools to manage all
              of this as well, but it is not necessary.
            </li>
          </ul>
          <br />
          <Image src="/Lesson20/pic2.png" />
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          <p>
            When you have at least one example of entering and exiting locations
            in your game, submit it here for your Lesson 20 Project:
          </p>
          <Submit field="Lesson20" title="Lesson 20: Entries & Exits" />
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
export default Lesson20;
