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

const Lesson7 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 7: Life & Score";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Setting and Changing Numerical Variables",
    "Changing Numerical Variables in Event Handlers",
    "Life and Score Events",
    "Task: Flappy Bird Score & Life",
    "Submit Lesson 7 Task",
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
            In this lesson, we'll learn how to use and control numerical
            variables like Life and Score.
          </h3>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_6AsgtYeF37au" />
          <br />
          <Title subtitle="Setup:" />
          <ul>
            <li>Duplicate your Flappy Bird game from Lesson 6.</li>
            <br />
            <li>Rename it Lesson 7.</li>
          </ul>
        </>
      );
    }
    if (page == 1) {
      return (
        <>
          <ul>
            <li>
              Numerical Variables can be used for a wide variety of things. One
              of the main things we often use numerical variables for in games
              is keeping track of life and score.
            </li>
            <br />
            <li>
              Score & Life are special numerical variables. They have their own
              indicators on the screen in the top left and right corners.
            </li>
          </ul>
          <br />
          <Image src="/Lesson7/pic8.png" />
          <br />
          <ul>
            <li>
              SET means that we are going to make the value for the variable a
              specific number. It's common to use these in our "on start" event
              handler to give our character a starting score and a starting
              life, etc.
            </li>
          </ul>
          <br />
          <Image src="/Lesson7/pic9.png" />
          <br />
          <ul>
            <li>
              CHANGE means to change the current value of the variable by adding
              or subtracting a certain amount. It's common to use these in our
              overlap events to raise score and to lower life as needed.
            </li>
          </ul>
          <br />
          <Image src="/Lesson7/pic10.png" />
          <br />
          <ul>
            <li>
              We can create other numerical variables any time we want. To do
              this, we would go to Variables:
            </li>
          </ul>
          <br />
          <Image src="/Lesson7/pic11.png" />
          <br />
          <ul>
            <li>Then click "Make a Variable..."</li>
            <br />
            <li>
              Once you give it a name, this new variable is by default a
              numerical variable, so you can set and change its value using the
              blocks in the Variable folder.
            </li>
          </ul>
          <br />
          <Image src="/Lesson7/pic12.png" />
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          <ul>
            <li>
              Typically, you'll want to set Score and Life to their initial
              values On Start:
            </li>
          </ul>
          <br />
          <Image src="/Lesson7/pic1.png" />
          <br />
          <ul>
            <li>
              You'll also typically change Score and Life in event handlers:
            </li>
          </ul>
          <br />
          <Image src="/Lesson7/pic2.png" />
          <br />
          <ul>
            <li>
              But we need to be careful when changing Score and or Life inside
              event handlers. For example, right now, my duck dies instantly
              when it overlaps with the enemy, despite the fact the block says
              to decrease life only by 1.
            </li>
          </ul>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_K6M6hTVkUg3v" />
          <br />
          <ul>
            <li>
              This is because again, our computer reads our code way too quickly
              and says that we have already overlapped with the enemy multiple
              times.
            </li>
            <br />
            <li>
              This is a common problem and we have a few main ways to try to
              solve it:
            </li>
          </ul>
          <br />
          <h3>Strategy #1: Add a Pause</h3>
          <ul>
            <li>
              Adding a pause at the end of the event handler is often enough to
              solve these issues:
            </li>
          </ul>
          <Image src="/Lesson7/pic3.png" />
          <ul>
            <li>
              This way, we have a one second time frame to leave the overlap
              before it takes off another life.
            </li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_9eAK7tf0F1Lq" />
          <br />
          <br />
          <h3>Strategy #2: Destroy the Sprite</h3>
          <ul>
            <li>
              If we destroy the sprite we overlap with, it can only overlap with
              it once.
            </li>
          </ul>
          <Image src="/Lesson7/pic4.png" />
          <Game src="https://arcade.makecode.com/---run?id=_aR3ggeFge1Pe" />
          <br />
          <br />
          <h3>Strategy #3: Use the Timer Extension</h3>
          <ul>
            <li>
              The Extensions tab in MakeCode has a few useful things that you
              can add to your games.
            </li>
            <br />
            <li>
              It is important to note, however, that many of the extensions are
              not created by MakeCode Arcade and do not have much for
              documentation and may not always work correctly.
            </li>
            <br />
            <li>
              The Timer Extension adds some blocks that act pretty similarly to
              pauses:
            </li>
          </ul>
          <Image src="/Lesson7/pic5.png" />
          <br />
          <Image src="/Lesson7/pic6.png" />
          <ul>
            <li>
              We can help stop our duck from losing life so quickly by doing
              this:
            </li>
          </ul>
          <Image src="/Lesson7/pic7.png" />
          <Game src="https://arcade.makecode.com/---run?id=_W1k8VJT3b927" />
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          {" "}
          <ul>
            <li>
              Both life & score have various event handlers that can be used:
            </li>
            <br />
            <li>Player 1 Score Event:</li>
          </ul>
          <Image src="/Lesson7/pic13.png" />
          <br />{" "}
          <ul>
            <li>Player 1 Life Zero Event:</li>
          </ul>
          <Image src="/Lesson7/pic14.png" />
          <br />
          <br />
          <ul>
            <li>
              By default, when your life reaches zero, it is automatically Game
              Over. If you use this event handler, you will change what happens
              when your life reaches zero, so something different can happen.
            </li>
            <br />
            <li>
              The "on score" event handler is a little misleading. As soon as
              your score reaches that number or higher, the statements inside
              the event handler will execute ONCE.
            </li>
          </ul>
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <ul>
            <li>Edit your Flappy Bird game from Lesson 6:</li>
            <br />
            <ul>
              <li>Flappy Bird starts with 3 Lives and 0 Score.</li>
              <br />
              <li>When Flappy Bird hits an obstacle, reduce Life by 1.</li>
              <br />
              <li>
                When Flappy Bird touches the gap in the middle, Score increases
                by 1.
              </li>
            </ul>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_6AsgtYeF37au" />
        </>
      );
    }
    if (page == 5) {
      return (
        <>
          <p>It should look something like this:</p>
          <Game src="https://arcade.makecode.com/---run?id=_6AsgtYeF37au" />
          <Submit field="Lesson7" title="Lesson 7: Life & Score" />
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
export default Lesson7;
