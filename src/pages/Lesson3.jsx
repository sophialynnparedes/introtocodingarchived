import Page from "../components/Page";
import Title from "../components/Title";
import Game from "../components/Game";
import Navigate from "../components/Navigate";
import Button from "../components/Button";
import Video from "../components/Video";
import Image from "../components/Image";
import { useState, useEffect } from "react";
import Row from "../components/Row";
import Submit from "../components/Submit";

const Lesson3 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 3: Velocity & Pauses";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Velocity",
    "How Pauses Work",
    "Talking Ducks Task",
    "Submit Lesson 3 Task",
  ];

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [page]);

  const Section = (props) => {
    if (page == 0) {
      return (
        <>
          {" "}
          <h3>
            In this lesson, we'll learn how to use velocity methods to have our
            sprites move and pauses to help time their movements.
          </h3>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_XWVDETDXE0w7" />
          <br />
          <Row align="center">
            <Button
              className="button"
              label="Optional: Watch Lesson 3 Video"
              method={() => {
                window.open("https://youtu.be/RPu2e3D0cD0", "_blank");
              }}
            />
          </Row>
          <br />
          <br />
          <Title subtitle="Duplicate Lesson 2" />
          <ul>
            <li>
              Duplicate your Lesson 2 Project and call it Lesson 3 by clicking
              on <b>View All</b>. You should now have three projects: One titled
              "Sprite Story", one titled "Lesson 2", and now one titled
              "Lesson3".
            </li>
            <br />
            <li>
              In most lessons, you'll be asked to try out new things in a
              separate project.
            </li>
            <br />
            <li>
              This is so you don't accidentally mess up your unit project.
            </li>
            <br />
            <li>
              After you've submitted the program for the lesson, you can start
              applying what you've learned to your unit project.
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
            <li>Modify the program to look like this:</li>
          </ul>
          <br />
          <Image src="/Lesson2/pic3.png" />
          <br />
          <ul>
            <li>
              For this scene, I want the ducks to fly down from the corners and
              land on the lake before starting their conversation.
            </li>
          </ul>
          <br />
          <Image src="/Lesson3/pic1.png" />
          <br />
          <ul>
            <li>
              To do this, we need to set their velocity in the correct
              direction.
            </li>
          </ul>
          <br />
          <Image src="/Lesson3/pic2.png" />
          <br />
          <ul>
            <li>Velocity describes an object's speed and direction.</li>
            <br />
            <li>
              Just like position, our velocity doesn't work exactly like the
              coordinate grids you see in your math classes: Down increases the
              y-value, Up decreases the y-value.
            </li>
          </ul>
          <br />
          <Image src="/Lesson3/pic3.png" />
          <br />
          <ul>
            <li>
              For the yellow duck, we want to go from an x-value of 0 to 60 in
              two seconds. The velocity of the yellow duck in the x-direction
              should be 30.
            </li>
            <br />
            <li>
              For the y-value, we start at 0 and want to go to 82 in two
              seconds, so the y-velocity should be 41.
            </li>
            <br />
            <li>
              For the green duck, we want to go from an x-value of 160 to 100 in
              two seconds, so the x-velocity should be -30.
            </li>
            <br />
            <li>
              For the green duck's y-value, we want to go from 0 to 82 again, so
              the y-velocity should be 41 as well.
            </li>
          </ul>
          <br />
          <Image src="/Lesson3/pic4.png" />
          <br />
          <ul>
            <li>
              Now they're flying! And they reach the desired spot in two
              seconds! .....but they don't stop!
            </li>{" "}
          </ul>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_Cjdf9mYEcY7i" />
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          {" "}
          <ul>
            <li>
              Pauses stop the program from reading any other blocks or
              statements for a certain amount of time.
            </li>
          </ul>
          <br />
          <Image src="/Lesson3/pic5.png" />
          <br />
          <ul>
            <li>
              The length of time that the program pauses is in milliseconds.{" "}
            </li>
            <br />
            <li>
              If I just use the velocity blocks again to stop the ducks, they
              won't move.
            </li>
          </ul>
          <br />
          <Image src="/Lesson3/pic6.png" />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_26EYPX9gXEM9" />
          <br />
          <ul>
            <li>
              This is because the computer reads through each part of the
              program <b>VERY quickly</b>.
            </li>
            <br />
            <li>
              To make the ducks only fly for 2 seconds, we add a pause for 2000
              milliseconds.
            </li>
          </ul>
          <br />
          <Image src="/Lesson3/pic7.png" />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_KWHgby9Ld8rx" />
          <br />
          <ul>
            <li>
              We can also use pauses to continue the conversation between the
              two ducks.
            </li>
            <br />
            <li>
              Use the <b>say</b> block to have the yellow duck say "Hello!".
            </li>
            <br />
            <li>
              Click on the <b>+</b> sign to add an amount of time for the speech
              bubble to show.
            </li>
            <br />
            <li>
              If we want to follow that up with another speech bubble that says
              "How are you?", we'll set a pause for the same length that the
              first speech bubble shows, but before the second speech bubble.
            </li>
          </ul>
          <br />
          <Image src="/Lesson3/pic8.png" />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_cdsHHbKpx3wD" />
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          {" "}
          <p>
            Using velocity, say, and pause blocks, recreate the game shown
            below:
          </p>
          <Game src="https://arcade.makecode.com/---run?id=_XWVDETDXE0w7" />
          <p>
            <b>When you're done, submit this project for your Lesson 3 Task.</b>
          </p>
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <p>It should look something like:</p>
          <Game src="https://arcade.makecode.com/---run?id=_XWVDETDXE0w7" />
          <Submit field="Lesson3" title="Lesson 3: Velocity & Pauses" />
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
export default Lesson3;
