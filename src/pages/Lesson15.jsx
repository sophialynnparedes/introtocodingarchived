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

const Lesson15 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 15: Functions";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Functions",
    "Creating a ChangeLevel Function",
    "Calling Functions",
    "Task: Changing Levels",
    "Submit Lesson 15 Project",
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
            In this lesson, we'll learn how to create and call functions to
            reuse parts of our code more easily.
          </h3>
          <br />
          <br />
          <Game src="" />
          <br />
          <br />
          <Title subtitle="Setup:" />
          <ul>
            <li>Duplicate your Lesson 14 project and rename it Lesson 15.</li>
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
              Functions are used to define similarly repeated sections of our
              program so that we don't have to create that section of code over
              and over.
            </li>
          </ul>
          <Image src="/Lesson15/pic10.png" />
          <ul>
            <li>
              Before we make a function, let's create an ending to our first
              level and create a second tilemap for the second level.
            </li>
            <br />
            <li>We'll have a blue tile represent the end of our level:</li>
          </ul>
          <Image src="/Lesson15/pic1.png" />
          <ul>
            <li>
              And a second tilemap that looks a bit different from the first:
            </li>
          </ul>
          <Image src="/Lesson15/pic2.png" />
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          <ul>
            <li>
              One commonly reused section of code we have in platformer games is
              setting up the next level after you complete the current level.
            </li>
            <br />
            <li>
              Specifically, there are three things that need to be done in order
              to move to a new level:
            </li>
            <br />
            <ul>
              <li>
                The enemies, items, etc. from the current level need to be
                destroyed.
              </li>
              <br />
              <li>The tilemap needs to change to the appropriate level.</li>
              <br />
              <li>
                Enemies, items, (and you) have to be recreated and placed in the
                appropriate locations.
              </li>
            </ul>
            <br />
            <li>Let's create a function called "changeLevel".</li>
          </ul>
          <br />
          <Image src="/Lesson15/pic11.png" />
          <br />
          <ul>
            <li>
              In this function, we'll start by destroying all sprites, so they
              don't carry over to the next level:
            </li>
          </ul>
          <br />
          <Image src="/Lesson15/pic3.png" />
          <br />
          <ul>
            <li>
              Next, we'll create a variable called "level" and depending on the
              value of "level", the corresponding tilemap will be set:
            </li>
            <br />
            <li>
              We'll also remove the tilemap for level 1 from the On Start event
              handler into this function.
            </li>
          </ul>
          <br />
          <Image src="/Lesson15/pic4.png" />
          <br />
          <ul>
            <li>
              And then finally, we'll recreate the new enemies and items for
              these levels by removing the blocks that do this from On Start
              into this function:
            </li>
          </ul>
          <br />
          <Image src="/Lesson15/pic5.png" />
          <br />
          <ul>
            <li>
              You'll notice that currently our levels are not shown on our game.
              This is because functions need to be "called".
            </li>
          </ul>
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          <ul>
            <li>
              Functions are not the same as event handlers. Event handlers
              automatically run when a certain event occurs.
            </li>
            <br />
            <li>
              Functions do not know when they are supposed to run. They have to
              be told. This is called "calling" a function.
            </li>
            <br />
            <li>
              To call a function, we go back to the function tab and we'll see
              some new blocks to use:
            </li>
          </ul>
          <Image src="/Lesson15/pic6.png" />
          <ul>
            <li>
              We want to call our changeLevel function at the start of our game
              in order to create the first level:
            </li>
          </ul>
          <Image src="/Lesson15/pic7.png" />
          <ul>
            <li>
              And we'll also want to call our changeLevel function when we
              overlap with the blue tile to move to the next level:
            </li>
          </ul>
          <Image src="/Lesson15/pic8.png" />
          <ul>
            <li>
              Here's what the entire changeLevel implementation looks like:
            </li>
          </ul>
          <Image src="/Lesson15/pic9.png" />
          <Game src="https://arcade.makecode.com/---run?id=_8v754ofKEPvA" />
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <ul>
            <li>
              Work on getting a successful changeLevel function set up that
              looks like:
            </li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_8v754ofKEPvA" />
        </>
      );
    }
    if (page == 5) {
      return (
        <>
          <p>It should look something like:</p>
          <Game src="https://arcade.makecode.com/---run?id=_8v754ofKEPvA" />
          <Submit field="Lesson15" title="Lesson 15: Functions" />
        </>
      );
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
export default Lesson15;
