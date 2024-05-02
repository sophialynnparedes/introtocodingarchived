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

const Lesson9 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 9: Tilemaps & Tile Overlap Events";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Creating a Tilemap",
    "Adding a Player Character",
    "Tile Overlap Events",
    "Task: Treasure Chests Opening",
    "Submit Lesson 9 Project",
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
            In this lesson, we'll learn about tilemaps, how to create them, and
            how to create events when we reach certain tiles.
          </h3>
          <br />
          <Title subtitle="Setup" />
          <ul>
            <li>Create a new project for Lesson 9.</li>
          </ul>
        </>
      );
    }
    if (page == 1) {
      return (
        <>
          <ul>
            <li>
              {" "}
              Tilemaps are common in 2D games because they make the creation and
              design of an entire level or game easier.
            </li>
            <br />
            <li>
              To create a new tilemap, go to{" "}
              <b>Assets --&gt; Create New Asset --&gt; Tilemap</b>.
            </li>
          </ul>
          <br />
          <Image src="/Lesson9/pic10.png" />
          <br />
          <ul>
            {" "}
            <li>
              The tilemap editor looks similar to the sprite editor, but there
              are some important differences.
            </li>
          </ul>
          <br />
          <Image src="https://cdn.glitch.global/419328d4-c9d3-43f8-916d-f5b2d58949e1/tilemapeditor.png?v=1695678465450" />
          <br />
          <ul>
            <li>
              First, you aren't coloring individual pixels. Each tile you place
              is 16 pixels by 16 pixels.
            </li>
            <br />
            <li>
              Second, the dimensions in the bottom left corner are measuring
              tiles instead of pixels. So, a 16 tile tall and 16 tile wide
              tilemap is actually 256 pixels by 256 pixels.
            </li>
            <br />
            <li>
              Third, if there are parts of your tilemap you want to designate as
              walls, they have to be highlighted in red using this button:
            </li>
          </ul>
          <br />
          <Image src="https://cdn.glitch.global/419328d4-c9d3-43f8-916d-f5b2d58949e1/walls.png?v=1695678640600" />
          <br />
          <ul>
            <li>
              Play around with the tilemap editor and then make a simple map
              that has some treasure chest tiles like this:
            </li>
          </ul>
          <Image src="/Lesson9/pic1.png" />
          <br />
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          <ul>
            <li>Let's create a sprite and control it:</li>
          </ul>
          <Image src="/Lesson9/pic2.png" />
          <Game src="https://arcade.makecode.com/---run?id=_EmUM2LhYE6AV" />
          <ul>
            <li>
              You'll notice that you can't really see much of your tilemap.
              That's because the tilemap is so much bigger than the screen and
              the screen stays still while your sprite moves. To fix this:
            </li>
          </ul>
          <Image src="/Lesson9/pic3.png" />
          <Game src="https://arcade.makecode.com/---run?id=_hjpTWEc7MLkt" />
          <ul>
            <li>
              Now the screen should follow our sprite, letting us explore our
              tilemap.
            </li>
            <br />
            <li>
              Now let's give our sprite gravity so that it falls to the
              platform:
            </li>
          </ul>
          <Image src="/Lesson9/pic4.png" />
          <Game src="https://arcade.makecode.com/---run?id=_eV9drgh82618" />
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          {" "}
          <ul>
            <li>Tile Overlap Events are similar to Sprite Overlap Events.</li>
            <br />
            <li>
              They allow us to define interactions between sprites of a certain
              SpriteKind and a specific tile.
            </li>
          </ul>
          <Image src="https://cdn.glitch.global/419328d4-c9d3-43f8-916d-f5b2d58949e1/2788e749-1741-4d86-a15b-b0a1ed598a1a.image.png?v=1697574796741" />
          <br /> <br />
          <ul>
            <li>
              Keep in mind that since each tile on the tilemap is 16 pixels by
              16 pixels, if your sprite is 16 pixels by 16 pixels or larger, it
              may cause overlaps that you weren't expecting or not be able to
              squeeze through sections of the level that are too narrow.
            </li>
            <br />
            <li>
              We'll use this to make the treasure chest tile appear to open and
              produce a coin:
            </li>
          </ul>
          <Image src="/Lesson9/pic5.png" />
          <ul>
            <li>
              An annoying thing about MakeCode Arcade is that you can't select a
              tile that isn't on your tilemap already:
            </li>
          </ul>
          <Image src="/Lesson9/pic6.png" />
          <ul>
            <li>
              So we have to go into our tilemap and add an open treasure chest
              first:
            </li>
          </ul>
          <Image src="/Lesson9/pic7.png" />
          <ul>
            <li>
              Now we can select it AND we can also use the location parameter
              for the location instead of finding the exact coordinates:
            </li>
          </ul>
          <Image src="/Lesson9/pic8.png" />
          <Game src="https://arcade.makecode.com/---run?id=_Uzjh4oJeVhHj" />
          <ul>
            <li>Now every closed treasure chest will open!</li>
            <br />
            <li>
              Let's add a coin sprite that gets created when we do that and
              place it on the same tile using the location parameter:
            </li>
          </ul>
          <Image src="/Lesson9/pic9.png" />
          <Game src="https://arcade.makecode.com/---run?id=_U97YzEDKzHF8" />
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          <ul>
            <li>
              If you've been following along, this should already be done:
            </li>
          </ul>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_U97YzEDKzHF8" />
          <ul>
            <li>
              Each treasure chest should open and produce one coin on top of
              that same tile.{" "}
            </li>
          </ul>
        </>
      );
    }
    if (page == 5) {
      return (
        <>
          <p>It should look something like:</p>
          <Game src="https://arcade.makecode.com/---run?id=_U97YzEDKzHF8" />
          <Submit
            field="Lesson9"
            title="Lesson 9: Tilemaps & Tile Overlap Events"
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
export default Lesson9;
