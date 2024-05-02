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

const Lesson12 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 12: Boolean Variables & Power Ups";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Using Boolean Values as States",
    "Fire Flower Example",
    "Projectile Power Up Task",
    "Submit Lesson 12 Project",
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
            In this lesson, we'll learn about Boolean variables and basic If
            statements.
          </h3>
          <br />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_UD3UCy08qT5X" />
          <br />
          <br />
          <Title subtitle="Setup:" />
          <ul>
            <li>Duplicate your Lesson 11 Project.</li>
            <br />
            <li>Rename it Lesson 12.</li>
          </ul>
        </>
      );
    }
    if (page == 1) {
      return (
        <>
          <ul>
            <li>
              Boolean variables are variables that are only <b>True</b> or{" "}
              <b>False</b>.
            </li>
            <br />
            <li>
              Boolean variables can be created the same way as other variables,
              but must result in being True or False.
            </li>
          </ul>
          <Image src="/Lesson12/pic1.png" />
          <br />
          <ul>
            <li>
              Boolean values can be created using various comparisons and
              inequalities as well.
            </li>
            <br />
            <li>
              To see if two values are equal, whether they are numbers, Strings,
              or Booleans, we can use:
            </li>
          </ul>
          <Image src="/Lesson12/pic2.png" />
          <br />
          <ul>
            <li>For inequalities, we use:</li>
          </ul>
          <Image src="/Lesson12/pic3.png" />
          <Image src="/Lesson12/pic4.png" />
          <Image src="/Lesson12/pic5.png" />
          <Image src="/Lesson12/pic6.png" />
          <Image src="/Lesson12/pic7.png" />

          <ul>
            <li>
              Some statements return true or false and can be used for
              conditions and Boolean variables.
            </li>
            <br />
            <li>
              The following statement returns true if the designated sprites are
              overlapping:
            </li>
          </ul>
          <Image src="/Lesson12/pic8.png" />
          <br />
          <ul>
            <li>
              The following statement returns true if the designated button is
              being pressed:
            </li>
          </ul>
          <Image src="/Lesson12/pic9.png" />
          <br />
          <ul>
            <li>
              The following statement returns true if the player pressed A and
              false if they press B:
            </li>
          </ul>
          <Image src="/Lesson12/pic10.png" />
          <br />
          <ul>
            <li>
              The following statement returns true if the player specified has
              more life than 0:
            </li>
          </ul>
          <Image src="/Lesson12/pic11.png" />
          <br />
          <ul>
            <li>
              The following statement returns true if the designated percent
              likelihood and false otherwise:
            </li>
          </ul>
          <Image src="/Lesson12/pic12.png" />
          <br />
          <ul>
            <li>
              The following statement returns true if the String specified has
              no characters and false if it does:
            </li>
          </ul>
          <Image src="/Lesson12/pic13.png" />
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          {" "}
          <ul>
            <li>Let's take a look at a classic example:</li>
          </ul>
          <Image src="/Lesson12/pic14.png" />
          <br />L
          <ul>
            <li>
              When Mario touches a Fire Flower, he is then able to shoot
              fireballs. The setup for this would be:
            </li>
          </ul>
          <Image src="/Lesson12/pic15.png" />
          Note: There are some pieces of the program that are excluded for
          simplicity.
          <br />
          <br />
          <br />
          <ul>
            <li>
              When Mario touches the FireFlower, the Boolean variable
              FireballPowerUp is changed from False to True.
            </li>
            <br />
            <li>
              The A Button Pressed Event only creates a fireball sprite if
              FireballPowerUp is true, and does nothing if False.
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
              Use the example on the previous page to incorporate a projectile
              power up like the game below:
            </li>
            <br />
            <li>
              On B Button pressed, the player character is able to shoot
              projectiles, but only after having collected a coin from the
              treasure chests.
            </li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_UD3UCy08qT5X" />
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <p>It should look something like:</p>
          <Game src="https://arcade.makecode.com/---run?id=_UD3UCy08qT5X" />
          <Submit
            field="Lesson12"
            title="Lesson 12: Boolean Variables & Power Ups"
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
export default Lesson12;
