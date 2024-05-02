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

const Lesson14 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 14: Sprite Characteristics & Movement";
  const agendaItems = [
    "Lesson Objective & Setup",
    "The Auto Destroy Block has Secrets",
    "Using Loops, Arrays, and Conditional Statements to make Complex Behavior",
    "Task: Enemies Stay on Platforms",
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
            In this lesson, we'll learn about using arrays, loops, and
            conditional statements together to make really complex behavior for
            our sprites.
          </h3>
          <br />
          <br />
          <Game src="" />
          <br />
          <br />
          <Title subtitle="Setup:" />
          <ul>
            <li>Duplicate your Lesson 13 Project and rename it Lesson 14.</li>
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
              Auto Destroy is a useful setting for our sprites in general. But,
              that Auto Destroy block also hides a lot of other useful
              properties as well.
            </li>
          </ul>
          <br />
          <Image src="/Lesson14/pic6.png" />
          <br />
          <ul>
            <li>
              Auto Destory makes a sprite be destroyed if it goes off screen.
            </li>
            <br />
            <li>
              Ghost makes a sprite visible, but not able to interact with
              anything, including other sprites, tiles, walls, etc.
            </li>
            <br />
            <li>
              Stay in Screen forces a sprite to stay within the camera window.
            </li>
            <br />
            <li>
              Bounce on wall makes a sprite move the opposite way if they hit a
              wall.
            </li>
            <br />
            <li>
              Show Physics desplays the position, velocity, and acceleration of
              a sprite. Useful for fixing problems.
            </li>
            <br />
            <li>
              Invisible makes a sprite invisible on the screen, but it is still
              going to interact with walls and overlap events.
            </li>
            <br />
            <li>
              Relative to Camera makes a sprite stay in a certain place on the
              screen no matter where the camera goes. This is useful for
              displays or maps, in fact, your score and life displays are
              relative to camera.
            </li>
            <br />
            <li>
              Ghost through Sprites makes all sprite overlap events no longer
              work for a certain sprite.
            </li>
            <br />
            <li>
              Ghost through Tiles makes all tile overlap events no longer work
              for a certain sprite.
            </li>
            <br />
            <li>
              Ghost through Walls makes the sprite be able to travel through any
              tiles designated as a wall on your tilemap. This is good for
              enemies that fly across the screen so they don't get stuck.
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
              In your tilemap, edit the platform to have a specific tile on the
              edges of the platform like:
            </li>
          </ul>
          <br />
          <Image src="/Lesson14/pic1.png" />
          <br />
          <ul>
            <li>We'll also give our enemies gravity:</li>
          </ul>
          <Image src="/Lesson14/pic2.png" />
          <ul>
            <li>
              Right now, the ghosts that follow the player do pretty well, but
              the bats just walk right off the platform.
            </li>
          </ul>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_MJq1WEWfKUCP" />
          <br />
          <ul>
            <li>
              In many games, we want our enemies to move around a bit. For
              example, enemies should walk back and forth on the platform to
              make it more difficult to avoid them.
            </li>
            <br />
            <li>
              To do this, we're going to use everything we've learned so far and
              also be a little clever about we create our tilemap.
            </li>
            <br />
            <li>
              We want the bats to constantly be checking if they've reached the
              end of the platform or not. This constant checking of position
              should be an <b>on game update</b> event:
            </li>
          </ul>
          <br />
          <Image src="/Lesson14/pic7.png" />
          <br />
          <ul>
            <li>
              Notice how my platform is made up of two kinds of tiles. One tile
              I'm specifically using to make the edges of the platform. If the
              enemy is above that tile, it should recognize that it is at the
              end of the platform and change velocity:
            </li>
          </ul>
          <br />
          <Image src="/Lesson14/pic3.png" />
          <br />
          <ul>
            <li>
              Now every time it is above the edge tile, its velocity becomes the
              opposite.
            </li>
          </ul>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_PqsEypUKx3op" />
          <br />
          <ul>
            <li>
              It doesn't work for all of the bats, just one of them, however.
            </li>
            <br />
            <li>
              This is where our ability to create arrays and use For Element
              loops helps:
            </li>
          </ul>
          <br />
          <Image src="/Lesson14/pic5.png" />
          <br />
          <ul>
            <li>
              With this array and loop, the game is making every sprite of a
              certain SpriteKind have this behavior.
            </li>
          </ul>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_Ra356YR4XPTK" />
          <br />
          <ul>
            <li>
              <b>Create the game shown above for your Lesson 14 project.</b>
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
              Recreate the game below using the strategies from this lesson:
            </li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_Ra356YR4XPTK" />
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <p>It should look something like:</p>
          <Game src="https://arcade.makecode.com/---run?id=_Ra356YR4XPTK" />
          <Submit
            field="Lesson14"
            title="Lesson 14: Sprite Characteristics & Movement"
          />
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
export default Lesson14;
