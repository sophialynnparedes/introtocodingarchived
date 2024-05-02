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

const Lesson13 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 13: If-Else Statements and Conditions";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Changing States",
    "If, Else-If, and Else",
    "Jumping Like Mario Example",
    "Task: Super Maria Sisters",
    "Submit Lesson 13 Project",
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
            In this lesson, we'll learn how to use If-Else Statements and
            Conditions with Boolean variables to selectively choose which parts
            of our code will run.
          </h3>
          <br />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_cw2MaoFMgPyu" />
          <br />
          <br />
          <Title subtitle="Setup:" />
          <ul>
            <li>Duplicate your game from Lesson 12 and rename it Lesson13.</li>
          </ul>
        </>
      );
    }
    if (page == 1) {
      return (
        <>
          <ul>
            <li>
              The "state" of an object is the value of variables that describe
              its characteristics.
            </li>
            <br />
            <li>
              We often use Boolean variables to represent states that either are
              currently happening or not.
            </li>
            <br />
            <li>
              For example, a common feature in a lot of games is the ability to
              shoot projectiles in a direction based on which way the player
              character is facing.
            </li>
            <br />
            <li>
              We can create a Boolean variable called "facingRight" and set it
              to True whenever we press right on the control pad and False
              whenever we press left.
            </li>
            <br />
            <li>
              When we shoot the projectile using the B Button, the direction it
              travels is determined based on the value of "facingRight".
            </li>
          </ul>
          <br />
          <Image src="/Lesson13/pic1.png" />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_Y1k6vPa5JCaX" />
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          {" "}
          <ul>
            <li>
              The if-else statements help us pick and choose which section of
              code to run depending on the condition we define.
            </li>
            <br />
            <li>
              The IF statement is the first condition that is checked. If that
              condition is true, only the code contained in the IF section will
              be run. Everything else will be skipped.
            </li>
          </ul>
          <br />
          <Image src="/Lesson13/pic2.png" />
          <br />
          <ul>
            <li>We can add more than one condition however. For example:</li>
          </ul>
          <br />
          <Image src="/Lesson13/pic3.png" />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=S17245-57496-89523-79460" />
          <br />
          <ul>
            <li>
              The computer first checks the condition in the <b>IF</b>{" "}
              statement. If that condition isn't true, it then checks the next{" "}
              <b>ELSE IF</b> condition. If that isn't true either, it checks the
              next <b>ELSE IF</b> condition. Only if every condition is False,
              will it execute the code in the <b>ELSE</b> section.
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
              Conditional Statements and Boolean variables allow us to define
              much more complex interactions between sprites.
            </li>
            <br />
            <li>
              For example, if we look at the classic game, Mario Bros., we can
              use a conditional statment to ensure Mario cannot jump endlessly
              in the air like FlappyBird.
            </li>
          </ul>
          <br />
          <Image src="/Lesson13/pic4.png" />
          <br />
          <ul>
            <li>
              Since Mario should only be able to jump if he is on the ground, we
              could write a conditional statement like this:
            </li>
          </ul>
          <br />
          <Image src="/Lesson13/pic5.png" />
          <br />
          <ul>
            <li>
              If the sprite of Mario is hitting the wall on his bottom side,
              that means he is standing on the ground, the condition is True,
              and he should be able to jump now. After he jumps, if he is still
              in the air, the condition is False, and he won't be able to jump
              again.
            </li>
            <br />
            <li>Let's look at a another example from the same game:</li>
          </ul>
          <br />
          <Image src="/Lesson13/pic6.png" />
          <br />
          <ul>
            <li>
              Mario should only defeat the enemy if he is above the enemy on his
              way down from his jump.
            </li>
          </ul>
          <br />
          <Image src="/Lesson13/pic7.png" />
          <br />
          <ul>
            <li>
              Mario's velocity must be going downwards AND his height should be
              higher than the enemy's in order to destroy the enemy. If either
              of those conditions are False, Mario is going to take damage.
            </li>
          </ul>
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <ul>
            <li>
              Use the examples from the previous page to recreate the game
              below:
            </li>
            <br />
            <li>
              The player character can only jump once in the air. If the player
              character lands on top of an enemy, the enemy is destroyed. If the
              player character touches the enemy in any other way, the player is
              hurt. The projectiles also destroy the enemies.
            </li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_cw2MaoFMgPyu" />
        </>
      );
    }
    if (page == 5) {
      return (
        <>
          <p>It should look something like:</p>
          <Game src="https://arcade.makecode.com/---run?id=_cw2MaoFMgPyu" />
          <Submit
            field="Lesson13"
            title="Lesson 13: If-Else Statements & Conditions"
          />
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
export default Lesson13;
