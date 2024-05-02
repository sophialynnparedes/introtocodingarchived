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

const Lesson6 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 6: SpriteKinds";
  const agendaItems = [
    "Lesson Objective & Setup",
    "What are SpriteKinds?",
    "Overlap Events",
    "Example: Chameleon/Duck Hybrid",
    "Event Parameters",
    "Task: Flappy Bird Continued",
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
            In this lesson, we'll use SpriteKinds to help us define interactions
            between different sprites better.
          </h3>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_iULHcHY22Li6" />
          <br />
          <Title subtitle="Setup:" />
          <ul>
            <li>Duplicate your lesson 5 project and title it Lesson 6.</li>
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
              Have you noticed that every time we create a new sprite, it asks
              us what kind we want it to be?
            </li>
          </ul>
          <br />
          <Image src="/Lesson6/pic3.png" />
          <br />
          <ul>
            <li>
              We use these SpriteKinds to specify what interactions should occur
              for this sprite. For example, in a game, our player sprite may
              overlap with enemies and be hurt, or may overlap with coins and
              gain money. If all of my sprites were "of kind Player", this would
              be impossible to do.
            </li>
            <br />
            <li>
              MakeCode has some pre-defined SpriteKinds already: Player, Enemy,
              Projectile, and Food.
            </li>
            <br />
            <li>
              We can add as many SpriteKinds as we need. In order to create new
              SpriteKinds, it depends on the programming language:
            </li>
            <br />
            <li>
              For Blocks: we just click on Player and choose "Add a new
              kind...".
            </li>
          </ul>
          <br />
          <Image src="/Lesson6/pic4.png" />
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          {" "}
          <ul>
            <li>
              Overlap Event Handlers define the interactions between different
              sprites based on their SpriteKinds.
            </li>
          </ul>
          <br /> <Image src="/Lesson6/pic5.png" />
          <br />
          <br />
          <ul>
            <li>
              You can only have one overlap event handler for each pair of
              SpriteKinds, so if you make a new one and it doesn't work, it
              means you already have one made. For example:
            </li>
          </ul>
          <br />
          <Image src="/Lesson6/pic6.png" />
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          <ul>
            <li>
              Let's take a look at an example that uses different SpriteKinds:
            </li>
          </ul>
          <br />
          <Image src="/Lesson6/pic1.png" />
          <br />
          <Image src="/Lesson6/pic2.png" />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_bk8YEP8yu0PX" />
          <br />
          <br />
          <ul>
            <li>
              Each food is labeled a different SpriteKind and each SpriteKind
              has an overlap event with the player. Whenever you want something
              different to happen, you'll need to create a sprite with a
              different SpriteKind.
            </li>
          </ul>
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          {" "}
          <ul>
            <li>
              Notice how the Overlap Event Handler (and a few other types of
              Event Handlers too) have these red portions called "sprite" and
              "otherSprite"?
            </li>
            <br />
            <li>
              These are called parameters which are variables that can be used
              inside of the event handler.
            </li>
            <br />
            <li>
              The main reason we use these, is because when I create multiple
              sprites with the same name, that name can only refer to one sprite
              at a time. For example:
            </li>
          </ul>
          <br />
          <Image src="/Lesson6/pic7.png" />
          <br />
          <ul>
            <li>
              In my game, a new strawberry is created every two seconds that is
              called mySprite2. When my player overlaps with the strawberry,
              however, notice what happens:
            </li>
          </ul>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_AYq3DkEaA7eR" />
          <br />
          <ul>
            <li>
              <b>It often destroys the wrong strawberry.</b> This is because as
              my game creates more strawberries, the name "mySprite2" can only
              refer to the most recent strawberry that was created.
            </li>
            <br />
            <li>
              To avoid this problem, we use the parameter "otherSprite" to refer
              to the specific strawberry that I overlapped with:
            </li>
          </ul>
          <br />
          <Image src="/Lesson6/pic8.png" />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_10PTMK3gMYLH" />
          <br />
          <ul>
            <li>
              Now my game destroys the strawberry that the duck came in contact
              with.
            </li>
          </ul>
        </>
      );
    }
    if (page == 5) {
      return (
        <>
          <ul>
            <li>Add to your Flappy Bird game from Lesson 5:</li>
            <br />
            <ul>
              <li>
                Sprites representing the gap in between the obstacles are now
                here.
              </li>
              <br />
              <li>AND when you touch an obstacle, it's Game Over!</li>
            </ul>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_iULHcHY22Li6" />
        </>
      );
    }
    if (page == 6) {
      return (
        <>
          <p>It should look something like this:</p>
          <Game src="https://arcade.makecode.com/---run?id=_iULHcHY22Li6" />
          <Submit field="Lesson6" title="Lesson 6: SpriteKinds" />
        </>
      );
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
export default Lesson6;
