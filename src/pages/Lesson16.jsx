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

const Lesson16 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 16: Boss Battle";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Setting Up Our Boss",
    "Checking if the Boss has Zero Health",
    "Task: Create your Boss Battle",
    "Submitting your Lesson 16 Project",
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
            In this lesson, we'll plan out how to add an exciting boss battle to
            our game.
          </h3>
          <br />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_DrXVkLLwuccj" />
          <br />
          <br />
          <Title subtitle="Setup:" />
          <ul>
            <li>Duplicate your Lesson 15 project and rename it Lesson 16.</li>
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
              Bosses usually appear towards the end of levels and generally have
              to be defeated in order to progress. This can be done in many
              different ways, for example, look at all the different ways Mario
              games have included a boss fight with Bowser:
            </li>
          </ul>
          <br />
          <Video src="https://www.youtube.com/embed/H-THEvEzZtM?si=3bm30esBBHm4Hfqm" />
          <br />
          <ul>
            <li>
              In some of the examples, you don't even have to attack the boss
              directly, making it past them, and reaching a certain item is
              enough to make the boss battle challenging.
            </li>
            <br />
            <li>
              Similarly to how we create our enemies and items, we can create
              and place a boss using a specific tile to represent their starting
              location.
            </li>
            <br />
            <li>
              Let's make a third level tilemap and add a tile specifically for
              the boss' location:
            </li>
          </ul>
          <br />
          <Image src="/Lesson16/pic1.png" />
          <ul>
            <li>
              Many of the sprites in MakeCode are quite small, but you can scale
              them up using a scale block:
            </li>
          </ul>
          <br />
          <Image src="/Lesson16/pic8.png" />
          <br />
          <ul>
            <li>
              We'll use the same technique as how we created our enemies before
              to create the boss:
            </li>
          </ul>
          <Image src="/Lesson16/pic3.png" />
          <ul>
            <li>
              <b>Tip:</b> If you don't want to play through every level of your
              game to get to the level you want, you can just change your{" "}
              <b>level</b> variable to the level you want to start on. This is
              another reason why we also use Functions!
            </li>
          </ul>
          <Image src="/Lesson16/pic4.png" />
          <Game src="https://arcade.makecode.com/---run?id=_MuqEws9zdfY1" />
          <ul>
            <li>
              Bosses generally take more than one attack to defeat. To keep
              track of the health of our boss, we can create a new variable like
              "bossHealth" and set it equal to its starting health when it is
              created:
            </li>
          </ul>
          <Image src="/Lesson16/pic5.png" />
          <p>
            (I also turned the laserPowerup to true because I'm skipping the
            first couple levels where you could collect coins to shoot lasers.)
          </p>
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          <ul>
            <li>
              Checking the health of the boss and making it shoot projectiles,
              etc., can be a little tricky since the boss is most likely not on
              the screen (or even the current level) much of the time.
            </li>
            <br />
            <li>
              To deal with this, we'll use an array of all sprites of kind
              "Boss".{" "}
            </li>
            <br />
            <li>
              The reason this works, is because if the boss currently exists,
              then our events can check its status, shoot projectiles, etc. If
              it doesn't exist yet, the array is empty until the boss is
              created.
            </li>
            <br />
            <li>
              For example, if we want to check if the boss's health is 0 and the
              boss is defeated, we could structure it like:
            </li>
          </ul>
          <br />
          <Image src="/Lesson16/pic9.png" />
          <ul>
            <li>Using arrays like this helps avoid NullPointerExceptions:</li>
          </ul>
          <Image src="/Lesson16/pic6.png" />
          <p>
            Because it allows the possibility that there is nothing inside of
            the array.
          </p>
          <br />
          <ul>
            <li>This is also a great way to give the boss actions:</li>
          </ul>
          <Image src="/Lesson16/pic7.png" />
          <Game src="https://arcade.makecode.com/---run?id=_DrXVkLLwuccj" />
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          <ul>
            <li>Create a boss battle in your project like this one:</li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_DrXVkLLwuccj" />
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <p>It should look something like this:</p>
          <Game src="https://arcade.makecode.com/---run?id=_DrXVkLLwuccj" />
          <Submit field="Lesson16" title="Lesson 16: Boss Battle" />
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
export default Lesson16;
