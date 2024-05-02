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
import Rubric from "../components/Rubric";
import { AdventureGameRubric } from "../Rubrics";
import LinkButton from "../components/LinkButton";

const Lesson17 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 17: World Creation";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Introducing your Adventure Game Project",
    "Creating your Overworld",
    "Populating the World with Enemies and Items",
    "Submitting your Lesson 17 Project",
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
            In this lesson, we'll create an overworld for our Adventure Game
            Project and populate it with enemies, items, and objects.
          </h3>
          <Title subtitle="Setup:" />
          <ul>
            <li>
              Create a new project for your Unit 4 - Adventure Game Project.
            </li>
          </ul>
        </>
      );
    }
    if (page == 1) {
      return (
        <>
          <ul>
            <li>Here's some examples of 2D Adventure Games:</li>{" "}
          </ul>
          <Video src="https://www.youtube.com/embed/Z6hjG6MCcZ8?si=33-owrfgdV4hhmVX" />
          <br />
          <Video src="https://www.youtube.com/embed/v7dGc_eSg6k?si=HmAQbdS4NPaM8m0Y" />
          <br />
          <Video src="https://www.youtube.com/embed/Az-frcyb-_k?si=SxuA1SjFvbSt3tbL" />
          <br />
          <Title subtitle="Criteria:" />
          <Rubric
            rubric={AdventureGameRubric}
            scores={[]}
            title="Unit 4 Project: Adventure Game"
          />
          <br />
          <Title subtitle="This Unit Will Be A Bit Different" />
          <ul>
            <li>
              Each lesson in this unit will most likely take 2 to 3 days and no
              new topics or concepts will be taught.
            </li>
            <br />
            <li>
              The lessons provide examples, tips, and suggestions, but you are
              going to have to use what you know (and possibly work together and
              help each other) to incorporate the needed criteria into your
              project.
            </li>
            <br />
            <li>
              You will submit incomplete drafts of your Adventure Game Project
              for each lesson as you try to incorporate each feature.
            </li>
            <br />
            <li>
              <b>
                Your task for this lesson is to create the overworld tilemap and
                procedurally create your enemies and items in your overworld for
                your project.
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
              Your overworld is a large tilemap or set of tilemaps that make up
              the world of the game in between the specific locations that you
              will travel to.
            </li>
            <br />
            <li>
              For example, <u>The Legend of Zelda: A Link to the Past</u>, uses
              the tilemap below:
            </li>
          </ul>
          <br />
          <Image src="/Lesson17/pic1.webp" />
          <br />
          <ul>
            <li>
              This overworld has enemies, houses, caves, dungeons, and other
              things all over it. Many of the tiles, like doors, cave openings,
              etc., lead to different tilemaps that the player can explore.
              Enemies in the overworld are procedurally generated so that the
              same enemies always appear in the same locations.
            </li>
            <br />
            <li>Your overworld gives your game a sense of scale.</li>
          </ul>
          <br />
          <Title subtitle="Tips & Advice" />
          <ul></ul>
          <ul>
            <li>
              Your overworld can be large, but it is not recommended to make it
              as large as the one in <u>A Link to the Past</u>.
            </li>
            <br />
            <li>
              Overworlds that are too large are too hard to fill with
              interesting things and make the player explore lots of empty,
              generic looking areas, which makes the game less exciting.
            </li>
            <br />
            <li>
              Be specific about your tile use. A tile that is made into a wall
              on the tilemap should always be a wall in the game, to not confuse
              players.
            </li>
            <br />
            <li>
              Use specific tiles to place your future enemies and objects. In{" "}
              <u>A Link to the Past</u>, for example, certain tiles were placed
              to even generate plants and grass that the player could cut down,
              revealing items.
            </li>

            <br />
            <li>
              Include at least one location that looks like your character could
              enter. We won't add the ability to enter and exit a location yet,
              but it will be there for when we do.
            </li>
          </ul>
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          {" "}
          <ul>
            <li>
              Using arrays of tiles and our For Element loops, we can add our
              enemies and items to our tilemap.
            </li>
            <br />
            <li>
              Check out{" "}
              <LinkButton
                className="button"
                label="Lesson 11: Arrays"
                href="/lesson11"
              />{" "}
              again if you need help with that again.
            </li>
            <br />
            <li>
              Do not set AutoDestroy on your enemies or items because they
              almost will always be off camera.
            </li>
            <br />
            <li>
              A lot of enemies have patterns to their movements, moving back and
              forth, wandering around aimlessly, or approaching the player when
              the player gets closer.
            </li>
            <br />
            <li>
              If you set enemies to follow your player, they will do so
              everywhere on the map. This may not be what you want your enemies'
              behavior to be.{" "}
            </li>
            <br />
            <li>
              Using a the distance formula from geometry, we can check an
              enemy's proximity to the player and set it to follow if we are
              within a certain distance to the enemy.
            </li>
            <br />
            <li>The distance formula is: </li>
          </ul>
          <br />
          <Image src="/Lesson17/pic2.png" />
          <br />
          <ul>
            <li>So in MakeCode, we could create an event like this:</li>
          </ul>
          <br />
          <Image src="/Lesson17/pic3.png" />
          <br />
          <ul>
            <li>
              Where the enemies will follow the player if the player is within a
              distance of 30 pixels.
            </li>
          </ul>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_UiePzP81Yhw7" />
          <br />
          <ul>
            <li>We can also stop the following with the Else clause:</li>
          </ul>
          <br />
          <Image src="/Lesson17/pic4.png" />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_JvT90YTy3acY" />
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <ul>
            <li>
              You are not recreating a game for this lesson, you are starting
              your Adventure Game Project.
            </li>
            <br />
            <li>
              Once you feel that you have an overworld populated with enemies
              and items, you can go ahead and submit your project for Lesson 17.
            </li>
          </ul>
          <Submit field="Lesson17" title="Lesson 17: World Creation" />
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
export default Lesson17;
