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

const Lesson8 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 8: Multiplayer";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Creating Multiple Players",
    "Multiplayer Controls",
    "Managing Events & SpriteKinds in Multiplayer",
    "Keeping our Game Running Smoothly",
    "Task: Multiplayer FlappyBird",
    "Submit Lesson 8 Task",
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
            In this lesson, we'll learn how to add multiplayer components to our
            games.
          </h3>
          <br />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_3abi2bivmUkv" />
          <br />
          <br />
          <Title subtitle="Setup" />
          <ul>
            <li>Duplicate your Flappy Bird project from Lesson 7.</li>
            <br />
            <li>Rename it "Lessosn 8".</li>
          </ul>
        </>
      );
    }
    if (page == 1) {
      return (
        <>
          <ul>
            <li>
              When we create multiplayer games, keep in mind that Player 2 has
              their own methods and event handlers in Controller, and their own
              score and life in Info.
            </li>
            <br />
            <li>
              To start making a multiplayer game, we just need to use one block
              that says Player 2 and let's make a sprite for them to control:
            </li>
          </ul>
          <Image src="/Lesson8/pic2.png" />
          <br />
          <ul>
            <li>
              To control our second player, we'll need an event handler for
              player 2's A button pressed:
            </li>
          </ul>
          <Image src="/Lesson8/pic4.png" />
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          {" "}
          <ul>
            <li>
              When we add a second player to our game, it's important to
              understand that the players have different controls.
            </li>
          </ul>
          <br />
          <br />
          <Title subtitle="On a Keyboard:" />
          <ul>
            <li>
              When we add a second player to our game, it's important to
              understand the controls on the keyboard for each player.
            </li>
            <br />
            <li>Player 1 uses:</li>
            <ul>
              <li>W for up,</li>
              <li>A for left,</li>
              <li>S for down,</li>
              <li>D for right,</li>
              <li>Q or Z for the A Button,</li>
              <li>E or X for the B Button.</li>
            </ul>
            <br />
            <li>Player 2 uses:</li>
            <ul>
              <li>I for up,</li>
              <li>J for left,</li>
              <li>K for down,</li>
              <li>L for right,</li>
              <li>U for the A Button,</li>
              <li>O (the letter, not the number) for the B Button.</li>
            </ul>
          </ul>
          <br />
          <br />
          <Title subtitle="On the Simulator:" />
          <ul>
            <li>
              As soon as a second player control is started in your program,
              you'll notice that your simulator changes colors:
            </li>
          </ul>
          <Image src="/Lesson8/pic1.png" />
          <br />
          <ul>
            <li>
              Clicking on the icons below will switch the simulator between
              players:
            </li>
            <br />
            <ul>
              <li>Red is Player 1,</li>
              <br />
              <li>Blue is Player 2,</li>
              <br />
              <li>Yellow is Player 3,</li>
              <br />
              <li>Green is Player 4,</li>
            </ul>
          </ul>
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          <ul>
            <li>
              If you try to play as Player 2, you'll notice that even if player
              2 hits an obstacle, Player 1's life decreases. Also when Player 2
              touches the gap in between obstacles, Player 1's score increases,
              and not Player 2's.
            </li>
            <br />
            <li>This is because they both have the same SpriteKind: Player.</li>
            <br />
            <li>
              It becomes necessary in multiplayer games to create new
              SpriteKinds for your different players so that each player can
              keep track of events that happen to them specifically.
            </li>
          </ul>
          <Image src="/Lesson8/pic5.png" />
          <ul>
            <li>
              We can then duplicate some of our overlap event handlers so that
              there is one copy for player 1 and one for player 2. For example:
            </li>
          </ul>
          <Image src="/Lesson8/pic6.png" />
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <ul>
            <li>
              You've probably noticed by now that our Flappy Bird game tends to
              start lagging after playing for more than a few seconds.
            </li>
            <br />
            <li>
              This is because your game has to keep track of all the sprites and
              variables in your game, even when they are not shown on the
              screen.
            </li>
            <br />
            <li>
              So all of the dozens of obstacles that have moved off our screen
              are still being remembered and their positions calculated, even
              though they are not part of our game anymore.
            </li>
            <br />
            <li>To avoid this, we have a tool:</li>
          </ul>
          <Image src="/Lesson8/pic7.png" />
          <ul>
            <li>
              Auto Destroy tells the game to destroy the sprite as soon as it
              leaves the screen.
            </li>
            <br />
            <li>
              This is useful for projectiles and things that are created
              repeatedly.
            </li>
            <br />
            <li>
              It's not recommended for everything though, because sometimes, we
              might go off the screen as well, and we don't want our sprite to
              be destroyed.
            </li>
          </ul>
          <Image src="/Lesson8/pic8.png" />
          <ul>
            <li>
              Auto Destroy is something you can just set as soon as a sprite is
              created.
            </li>
            <br />
            <li>
              That same block also has a lot of useful properties as well like
              to make our gaps invisible.
            </li>
            <br />
            <li>
              Now our game will continue to run smoothly and we won't see the
              gaps anymore.
            </li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_3abi2bivmUkv" />
        </>
      );
    }
    if (page == 5) {
      return (
        <>
          <ul>
            <li>Recreate the game below as best you can.</li>
            <br />
            <li>
              Each player's score should only increase if their duck makes it
              past the obstacles.
            </li>
            <br />
            <li>
              Each player's life should decrease only if their duck hits an
              obstacle.
            </li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_3abi2bivmUkv" />
        </>
      );
    }
    if (page == 6) {
      return (
        <>
          <p>It should look something like:</p>
          <Game src="https://arcade.makecode.com/---run?id=_3abi2bivmUkv" />
          <Submit field="Lesson8" title="Lesson 8: Multiplayer" />
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
export default Lesson8;
