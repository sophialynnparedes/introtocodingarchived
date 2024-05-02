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

const Lesson5 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 5: Events & Event Handlers";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Event Handlers",
    "Decomposing Flappy Bird",
    "Task: Recreating Flappy Bird",
    "Submit your Lesson 5 Task",
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
            In this lesson, we'll learn how to use event handlers to allow user
            input and program what should happen as different events occur.
          </h3>
          <br />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_KjfPz0che55i" />
          <br />
          <br />
          <Title subtitle="Setup:" />
          <ul>
            <li>Create a new project for Lesson 5.</li>
          </ul>
        </>
      );
    }
    if (page == 1) {
      return (
        <>
          <ul>
            <li>
              Event Handlers (also called Event Listeners) run a selected piece
              of code EVERY TIME a condition is met.
            </li>
            <br />
            <li>In Blocks, Event Handlers look like this:</li>
          </ul>
          <br />
          <Image src="/Lesson5/pic4.png" />
          <br />
          <ul>
            <li>Below is a list of all of our Event Handlers:</li>
            <br />
            <li>Sprite Overlap Event:</li>
          </ul>
          <Image src="/Lesson5/pic5.png" />
          <br />
          <ul>
            <li>Sprite Creation Event:</li>
          </ul>
          <Image src="/Lesson5/pic6.png" />
          <br />
          <ul>
            <li>Sprite Destroyed Event:</li>
          </ul>
          <Image src="/Lesson5/pic7.png" />
          <br />
          <ul>
            <li>Player 1 Button Press Event:</li>
          </ul>
          <Image src="/Lesson5/pic8.png" />
          <br />
          <ul>
            <li>Player 2 Button Press Event:</li>
          </ul>
          <Image src="/Lesson5/pic9.png" />
          <br />
          <ul>
            <li>On Game Update Event:</li>
          </ul>
          <Image src="/Lesson5/pic10.png" />
          <br />
          <ul>
            <li>On Game Update Interval Event:</li>
          </ul>
          <Image src="/Lesson5/pic11.png" />
          <br />
          <ul>
            <li>Sprite/Tile Overlap Event:</li>
          </ul>
          <Image src="/Lesson5/pic12.png" />
          <br />
          <ul>
            <li>Sprite Wall Contact Event:</li>
          </ul>
          <Image src="/Lesson5/pic13.png" />
          <br />
          <ul>
            <li>Player 1 Score Event:</li>
          </ul>
          <Image src="/Lesson5/pic14.png" />
          <br />
          <ul>
            <li>Player 2 Score Event:</li>
          </ul>
          <Image src="/Lesson5/pic15.png" />
          <br />
          <ul>
            <li>Player 1 Life Zero Event:</li>
          </ul>
          <Image src="/Lesson5/pic16.png" />
          <br />
          <ul>
            <li>Player 2 Life Zero Event:</li>
          </ul>
          <Image src="/Lesson5/pic17.png" />
          <br />
          <ul>
            <li>Countdown End Event:</li>
          </ul>
          <Image src="/Lesson5/pic18.png" />
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          <ul>
            <li>
              Decomposition is one of the main aspects of Algorithmic Thinking
              that we want to learn to develop throughout this class.
            </li>
            <br />
            <li>
              Decomposition is the breaking apart of larger, more complex
              things, into smaller, more manageable pieces. Event Handlers help
              us decompose our program into smaller pieces.
            </li>
            <br />
            <li>
              As programs become more and more complex, the need for planning
              becomes more and more apparent. Software Engineers spend the
              majority of their time planning algorithms and rarely ever start
              writing code right away. One way in particular we can plan and use
              decomposition is through a flowchart.
            </li>
            <br />
            <li>Flowcharts are a tool to map out a set of steps:</li>
          </ul>
          <br />
          <Image src="/Lesson5/pic19.png" />
          <br />
          <ul>
            <li>
              The start of the this flowchart is when an event occurs: when the
              lamp doesn't work.
            </li>
            <br />
            <li>
              Each step that we take following this event is connected with a
              line and we can also ask questions and respond accordingly with
              branching paths.
            </li>
            <br />
            <li>
              Let's think about the events that occur in a popular game like
              FlappyBird:
            </li>
          </ul>
          <br />
          <Video src="https://www.youtube.com/embed/fQoJZuBwrkU?si=y_TPWKdg-VS-BzRB" />
          <br />
          <ul>
            <li>
              We'll make a separate piece of the flowchart for each event.
            </li>
          </ul>
          <br />
          <Image src="/Lesson5/pic20.png" />
          <br />
          <ul>
            <li>Like this:</li>
          </ul>
          <Image src="/Lesson5/Pic1.png" />
          <br />
          <ul>
            <li>
              Now that we have a flowchart we can see what actions need to
              happen with each event handler and which handlers we'll need:
            </li>
          </ul>
          <Image src="/Lesson5/pic3.png" />
          <ul>
            <li>
              We'll worry about the score and running into obstacles in later
              lessons, but for now, try to use these event handlers to recreate
              this game:
            </li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_KjfPz0che55i" />
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          <ul>
            <li>
              Do your best to try to recreate this game below and then submit it
              for your Lesson 5 Task.
            </li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_KjfPz0che55i" />
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          {" "}
          <p>It should look something like this:</p>
          <Game src="https://arcade.makecode.com/---run?id=_KjfPz0che55i" />
          <Submit field="Lesson5" title="Lesson 5: Events & Event Handlers" />
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
export default Lesson5;
