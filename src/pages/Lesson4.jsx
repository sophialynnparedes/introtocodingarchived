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

const Lesson4 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 4: Text Elements & Animations";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Splashes & Text Boxes",
    "Animations",
    "Flying Ducks Task",
    "Submit Lesson 4 Project",
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
            In this lesson, we'll learn how to create text boxes and splashes to
            add story components to our game, as well as, how to create, start,
            and stop animations for sprites.
          </h3>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_9gJ6vjggh7Yk" />
          <br />
          <Row align="center">
            <Button
              className="button"
              label="Optional: Watch Lesson 4 Video"
              method={() => {
                window.open("https://youtu.be/9EjqEnuAZR4", "_blank");
              }}
            />
          </Row>
          <Title subtitle="Duplicate Lesson 3" />
          <p>
            <ul>
              <li>
                Duplicate your Lesson 3 Project and call it Lesson 4 by clicking
                on <b>View All</b>.
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
          </p>
        </>
      );
    }
    if (page == 1) {
      return (
        <>
          {" "}
          <ul>
            <li>
              There are two different ways besides speech bubbles to add text to
              our game. The first is called a Splash:
            </li>
          </ul>
          <br />
          <Image src="/Lesson4/pic1.png" />
          <br />
          <ul>
            <li>
              You can find the splash block under <b>Game</b>
            </li>
            <br />
            <li>Splashes are great for titles and short messages.</li>
            <br />
            <li>Let's add a Splash to our game:</li>
          </ul>
          <br />
          <Image src="/Lesson4/pic2.png" />
          <br />
          <Image src="/Lesson4/pic3.png" />
          <br />
          <ul>
            <li>
              Splashes and Text Boxes both pause until the player has pressed
              the "A" Button on the simulator (or Q or Z on the keyboard). You
              don't need to place pause blocks in between splashes.
            </li>
            <br />
            <li>
              Clicking the plus sign on the splash block allows you to enter a
              subtitle as well:
            </li>
          </ul>
          <br />
          <Image src="/Lesson4/pic4.png" />
          <br />
          <Image src="/Lesson4/pic5.png" />
          <br />
          <ul>
            <li>
              If the text for the splash is too long, it will automatically
              scroll left and right so you can read it.
            </li>
            <br />
            <li>For longer texts, we can use a text box:</li>
          </ul>
          <br />
          <Image src="/Lesson4/pic6.png" />
          <br />
          <ul>
            <li>
              You can type the text inside the quotation marks, and the dropdown
              menu afterwards let's you choose where to place it.
            </li>
            <br />
          </ul>
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          {" "}
          <ul>
            <li>Animations are used to really bring our sprites to life.</li>
            <br />
            <li>
              All of the animation blocks below are in the <b>Animations</b>{" "}
              folder.
            </li>
            <br />
            <li>
              This block starts an animation. The first option details which
              sprite it is you want to have this animation run for. The second
              option is for choosing the animation, the "interval" option is how
              many milliseconds you want in-between each frame of the animation,
              and the "loop" option determines whether the animation will
              continue or just play through once.
            </li>
          </ul>
          <br />
          <Image src="/Lesson4/pic7.png" />
          <br />
          <ul>
            <li>Let's add an animation for the yellow duck:</li>
          </ul>
          <br />
          <Image src="/Lesson4/pic8.png" />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_fRPXA21xufbc" />
          <br />
          <ul>
            <li>
              Notice how the yellow duck doesn't stop the animation because it
              is set on loop.
            </li>
            <br />
            <li>
              It doesn't make sense to make the duck flap even after landing on
              the lake, so we can use a block to stop the animation after our 2
              second pause, just like the velocity:
            </li>
          </ul>
          <br />
          <Image src="/Lesson4/pic9.png" />
          <br />
          <Image src="/Lesson4/pic10.png" />
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          <p>
            Finish the rest of the program so that the scene behaves as shown in
            the game below. <b>Then, submit it as your Lesson 4 Task.</b>
          </p>

          <Game src="https://arcade.makecode.com/---run?id=_9gJ6vjggh7Yk" />
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <p>It should look something like this:</p>
          <Game src="https://arcade.makecode.com/---run?id=_9gJ6vjggh7Yk" />
          <Submit
            field="Lesson4"
            title="Lesson 4: Text Elements & Animations"
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
export default Lesson4;
