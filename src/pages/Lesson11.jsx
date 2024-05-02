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

const Lesson11 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 11: Arrays";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Arrays",
    "For Element Loops",
    "Task: Creating Enemies",
    "Submit Lesson 11 Project",
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
            In this lesson, we'll learn about arrays (also called lists) and how
            they can help us create our levels quickly and efficiently.
          </h3>
          <br />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_WExd973TiUf2" />
          <br />
          <br />
          <Title subtitle="Setup:" />
          <ul>
            <li>Duplicate your project from Lesson 9 (Not Lesson 10!)</li>
            <br />
            <li>Rename it Lesson 11.</li>
          </ul>
        </>
      );
    }
    if (page == 1) {
      return (
        <>
          <ul>
            <li>
              An array (also called a list) is an ordered set of items. Arrays
              can contain a list of numbers, words, sprites, tiles, etc.
            </li>
            <br />
            <li>
              <b>But,</b> an array can only contain one type of variable. So, if
              an array currently contains sprites, I can't add a number or word
              to that same array.
            </li>
            <br />
            <li>In lesson 9, we created a tilemap like the following:</li>
          </ul>
          <br />
          <Image src="/Lesson9/pic1.png" />
          <br />
          <ul>
            <li>
              Let's place some tiles to represent the starting locations for my
              enemies:
            </li>
          </ul>
          <br />
          <Image src="/Lesson11/pic1.png" />
          <br />
          <ul>
            <li>To create an array, we'll start by making a new variable:</li>
          </ul>
          <br />
          <Image src="/Lesson11/pic2.png" />
          <ul>
            <li>And then we'll grab this block from Scene:</li>
          </ul>
          <Image src="/Lesson11/pic3.png" />
          <ul>
            <li>
              Putting them together creates a list of all the tiles that look
              like that one that already exist on the screen.
            </li>
          </ul>
          <Image src="/Lesson11/pic4.png" />
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          <ul>
            <li>Arrays are usually paired with our For Element Loops.</li>
          </ul>
          <Image src="/Lesson11/pic5.png" />
          <br />
          <ul>
            <li>
              Now that we have a list of tiles, I can use the For Element Loop
              to give instructions for each tile in the list. For example:
            </li>
          </ul>
          <br />
          <Image src="/Lesson11/pic6.png" />
          <br />
          <ul>
            <li>
              Now, each value (tile location) is turned transparent and has an
              enemy bat placed on top of that location.
            </li>
            <br />
            <li>
              This is useful for planning out where your enemies and items will
              be on your tilemap, since we can't add sprites themselves to the
              tilemap and we don't want to have to individually place each
              sprite either.
            </li>
          </ul>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_2dfhkVE3gAJ1" />
          <ul>
            <li>
              We can create arrays of other things as well, not just tile
              locations.
            </li>
            <br />
            <li>
              For example, we can use a sprite array to give directions to all
              sprites of a certain SpriteKind:
            </li>
          </ul>
          <Image src="/Lesson11/pic7.png" />
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          <ul>
            <li>Recreate the game below as best you can:</li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_WExd973TiUf2" />
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <p>It should look something like:</p>
          <Game src="https://arcade.makecode.com/---run?id=_WExd973TiUf2" />
          <Submit field="Lesson11" title="Lesson 11: Arrays" />
        </>
      );
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
export default Lesson11;
