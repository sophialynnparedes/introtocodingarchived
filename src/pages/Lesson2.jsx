import Navigate from "../components/Navigate";
import Page from "../components/Page";
import Title from "../components/Title";
import Image from "../components/Image";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import Row from "../components/Row";
import Submit from "../components/Submit";
import Game from "../components/Game";

const Lesson2 = (props) => {
  const [page, setPage] = useState(0);

  const lessonTitle = "Lesson 2: Sprite Creation & Position";

  const agendaItems = [
    "Lesson Objective & Setup",
    "Introduction to MakeCode Blocks",
    "Setting",
    "Creating a Yellow Duck",
    "Creating a Green Duck",
    "Position",
    "Text Bubbles",
    "Submit Lesson 2 Task",
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
            In this lesson, we'll learn how to create the background and the
            sprites in our game and position them on-screen.
          </h3>
          <br />

          <Game src="https://arcade.makecode.com/---run?id=_Li4CFjWmmidX" />
          <Row align="center">
            <Button
              className="button"
              label="Optional: Watch Lesson 2 Video"
              method={() => {
                window.open(
                  "https://www.youtube.com/watch?v=do7fqUI_5OU",
                  "_blank"
                );
              }}
            />
          </Row>
          <br />
          <br />

          <Title subtitle="Create a New Project for Lesson 2" />
          <ul>
            <li>
              Create a new project and call it Lesson 2. You should now have two
              projects: One titled "Sprite Story" and one titled "Lesson 2"
            </li>
            <br />{" "}
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
    } else if (page == 1) {
      return (
        <>
          {" "}
          <Image src="/Lesson2/pic4.png" />
          <br />
          <ul>
            <li>The MakeCode screen is split into three sections:</li>
            <ul>
              <br />
              <li>
                On the left, is the simulator for your game. As you add blocks,
                the game will refresh and display the most recent changed.
              </li>
              <br />
              <li>
                On the right, there is a grid with a green block that says{" "}
                <b>on start</b>. This is where you will create your program.
              </li>
              <br />
              <li>
                Between the simulator and the program grid is a folder list that
                contains the many blocks we can use.
              </li>
            </ul>
            <br />
            <li>
              The blocks that we will be using in today's lesson are located
              under <b>Sprites</b> and <b>Scene</b>
            </li>
            <br />
            <li>
              Go to <b>Scene</b> and drag the block shown below to your grid.
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic5.png" />
          <br />
          <br />
          <ul>
            <li>
              You'll notice that it turns a different color. This is because the
              program isn't sure when to use this block.
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic6.png" />
          <br />
          <br />
          <ul>
            <li>
              The green <b>on start</b> block holds other blocks inside of it.
              It tells the program that the blocks inside <b>on start</b> should
              be done at the start of the game.
            </li>
            <br />
            <li>
              Move the block into <b>on start</b>.
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic7.png" />
          <br />
        </>
      );
    } else if (page == 2) {
      return (
        <>
          <ul>
            <li>
              Now the program knows that it should set the background image to
              something, but the image it is setting it to is blank.
            </li>
          </ul>
          <ul>
            <li>Click on the blank picture to set the background image.</li>
            <br />
            <li>You'll be taken to the Sprite Editor again.</li>
            <br />
            <li>
              In MakeCode Arcade, background images are 160 pixels horizontally,
              by 120 pixels vertically
            </li>
            <br />
            <li>
              As you continue making your own sprites, keep in mind that these
              are the maximum dimensions of our game screen.
            </li>
            <br />
            <li>
              You can create your own background image or you can choose one
              from the <b>Gallery</b>.
            </li>
          </ul>
          <br />
          <Image src="Lesson2/pic8.png" />
          <br />
          <ul>
            <li>
              <b>
                <u>Notes about creating settings:</u>
              </b>
            </li>
            <ul>
              <br />
              <li>
                Everything in MakeCode Arcade is layered on top of each other.
              </li>
              <br />
              <li>For now, think of the layering as follows:</li>
              <br />
              <li>
                Background <b>Color</b> is the back-most layer.
              </li>
              <br />
              <li>
                Background <b>Image</b> is layered on top of that.
              </li>
              <br />
              <li>Sprites are all layered on top of that.</li>
              <br />
              <li>
                If you have more than one sprite on the screen in the same
                position, the most recently created one will be layered on top.
              </li>
              <br />
              <li>
                For example, if I have a red background color with a background
                image that is half black and half transparent, the game will
                show:
              </li>
            </ul>
          </ul>
          <br />
          <Image src="/Lesson2/pic9.png" />
          <br />
          <ul>
            <li>
              Setting more than one background color or image right now will
              only result in the last one being shown and there can only be one
              background color at a time and there can only be one background
              image at a time.
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic10.png" />
          <br />
          <ul>
            <li>
              For now, let's make our background this image of a lake from the{" "}
              <b>Gallery</b>.
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic11.png" />
          <br />
          <ul>
            <li>
              Let's practice some layering techniques by creating a background
              color of pink and making the sky in the image transparent:
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic1.png" />
          <br />
          <Image src="/Lesson2/pic2.png" />
        </>
      );
    } else if (page == 3) {
      return (
        <>
          <ul>
            <li>
              To place a sprite on the screen, we first use the block shown
              here:
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic12.png" />
          <br />
          <ul>
            <li>
              Click on the blank image again to either create a sprite or choose
              one that has already been made.
            </li>
            <br />
            <li>
              For now, let's just create a duck from the <b>Gallery</b>.
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic13.png" />
          <br />
          <ul>
            <li>This block creates the duck in the center of my screen.</li>
          </ul>
        </>
      );
    } else if (page == 4) {
      return (
        <>
          <ul>
            <li>
              In this sceen, I want two ducks to be sitting on the lake and
              chatting with each other.
            </li>
            <br />
            <li>Let's create a new duck and this time make it green.</li>
            <ul>
              <br />
              <li>Grab another block:</li>
            </ul>
          </ul>
          <br />
          <Image src="/Lesson2/pic14.png" />
          <br />
          <ul>
            <ul>
              <li>
                Choose the duck sprite from the <b>Gallery</b> again.
              </li>
            </ul>
          </ul>
          <br />
          <Image src="/Lesson2/pic15.png" />
          <br />
          <ul>
            <ul>
              <li>
                Flip it horizontally to make it look like it's facing the other
                duck.
              </li>
            </ul>
          </ul>
          <br />
          <Image src="/Lesson2/pic16.png" />
          <br />
          <ul>
            <ul>
              <li>Use the paint can to paint yellow pixels to green.</li>
            </ul>
          </ul>
          <br />
          <Image src="/Lesson2/pic17.png" />
          <br />
          <ul>
            <ul>
              <li>
                Click <b>Done</b> to save it to your Assets.
              </li>
            </ul>
          </ul>
          <br />
        </>
      );
    } else if (page == 5) {
      return (
        <>
          <ul>
            <li>Now we can see both ducks, but they are too close together.</li>
          </ul>
          <br />
          <Image src="/Lesson2/pic18.png" />
          <ul>
            <li>
              To move a sprite to a different position, we use the block shown
              below:
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic19.png" />
          <br />
          <ul>
            <li>
              Remember how the background image was 160 pixels by 120 pixels?
              This is also how we are going to find the coordinates for the
              positions of our ducks.
            </li>
            <br />
            <li>
              Generally, computer graphics do not use the same coordinate system
              as we do in math. Usually, the origin (0, 0) is located in the
              top-left corner of the screen. Larger values of x move the
              position to the right. Larger values of y move the position down
              (instead of up).
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic20.png" />
          <br />
          <ul>
            <li>
              Looking at the coordinate system this way, I think the yellow duck
              should be at about (50, 80) and the green duck should be at about
              (100, 80).
            </li>
            <br />
            <li>
              Notice how the yellow duck is named "mySprite" and the green duck
              is named "mySprite2".
            </li>
            <br />
            <li>
              To change the position of each duck, one block needs to say
              "mySprite" and the other needs to say "mySprite2"
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic21.png" />
          <br />
          <ul>
            <li>
              Each sprite created is by default named "mySprite". This is not a
              good thing to keep doing as your programs group and become more
              complex.
            </li>
            <br />
            <li>
              It is always good practice (and part of your competency rubric for
              this class) that you regularly give variables, including sprites,
              names that are descriptive and relevant.{" "}
            </li>
            <br />
            <li>
              To change the name of a sprite (or any variable), click on
              "mySprite" and rename it to "yellowDuck". Rename "mySprite2" to
              "greenDuck".
            </li>
            <br />
            <li>
              <b>Variables should always be only word, no spaces.</b>
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic22.png" />
        </>
      );
    } else if (page == 6) {
      return (
        <>
          <ul>
            <li>
              Now that the sprites are positioned correctly, let's add the
              beginning of a conversation.
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic23.png" />
          <br />
          <ul>
            <li>
              Using this block, we can make each duck say something different.
              The smiley face ":)" can be replaced with whatever text you want.
            </li>
            <br />
            <li>The speech bubbles show up above the sprite.</li>
            <br />
            <li>
              Try to avoid putting too much text inside of a speech bubble at
              one time because they sometimes get cut off by the sides of the
              screen.
            </li>
          </ul>
          <br />
          <Image src="/Lesson2/pic24.png" />
          <br />
          <ul>
            <li>Add a speech bubble for each duck.</li>
            <br />
            <li>
              <b>
                Submit this project with the ducks and the speech bubbles for
                your Lesson 2 task.
              </b>
            </li>
          </ul>
        </>
      );
    } else if (page == 7) {
      return (
        <>
          <p>It should look something like this:</p>
          <Game src="https://arcade.makecode.com/---run?id=_Li4CFjWmmidX" />
          <Submit
            field="Lesson2"
            title="Lesson 2: Sprite Creation & Position"
          />
        </>
      );
    } else if (page == 8) {
      return <></>;
    } else if (page == 9) {
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
export default Lesson2;
