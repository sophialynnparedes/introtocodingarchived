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

const Lesson10 = (props) => {
  const [page, setPage] = useState(0);
  const lessonTitle = "Lesson 10: Loops";
  const agendaItems = [
    "Lesson Objective & Setup",
    "Loops & Iteration",
    "Repeat Loops",
    "Task (Part 1): Survive the Cars",
    "For Index Loops",
    "Managing Multiple Loops",
    "Task (Part 2): And the Asteroids!",
    "Submit Lesson 10 Project",
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
            In this lesson, we'll learn about "repeat" loops and "for index"
            loops and how we can use them to simplify our programming.
          </h3>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_PVvbAKf70eEM" />
          <br />
          <br />
          <Title subtitle="Setup" />
          <ul>
            <li>Create a new project for Lesson 10.</li>
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
              Loops repeat certain blocks of code a certain number of times.
            </li>
            <br />
            <li>
              MakeCode Blocks has a basic repeat loop that repeats a certain
              number of times:
            </li>
          </ul>
          <Image src="/Lesson10/pic4.png" />
          <br />
          <ul>
            {" "}
            <li>
              While loops run repeatedly as long as the Boolean condition
              specified is True:
            </li>
          </ul>
          <Image src="/Lesson10/pic5.png" />
          <br />
          <ul>
            <li>
              For index loops provide a parameter called "index" that can be
              used as a variable inside the loop. The value of index starts at 0
              and increases by 1 each time the loop repeats until it reaches a
              specified value.
            </li>
          </ul>
          <Image src="/Lesson10/pic6.png" />
          <br />
          <ul>
            <li>
              For element value loops are used with arrays (or lists) and will
              repeat a number of times depending on the number of elements in
              the array.
            </li>
          </ul>
          <Image src="/Lesson10/pic7.png" />
          <br />
          <ul>
            <li>
              In this lesson, we will only look at Repeat and For Index Loops.
              We'll introduce For Element Loops in the future after introducing
              Arrays and we'll introduce While Loops after introducing
              Conditional Statements.
            </li>
            <br />
            <li>
              Loops provide a structure called Iteration that allows our
              programs to reuse pieces of itself.
            </li>
            <br />
            <li>
              For example: take a look at this program:
              <br />
              Click the "Show Code" button to see the program code.
            </li>
          </ul>
          <br />
          <Game src="https://makecode.com/_79A64qabe4Ww" />
          <br />
          <ul>
            <li>
              Structuring my program like this isn't wrong, but if I want to
              make changes, like making the ghost go in the other direction,
              then I would have to edit each line.
            </li>
            <br />
            <li>Using loops, we can make this program simpler:</li>
          </ul>
          <br />
          <Game src="https://makecode.com/_RD7PD8iUeMr9" />
          <br />
          <ul>
            <li>Now changes involve changing only one or two statements.</li>
          </ul>
        </>
      );
    }
    if (page == 2) {
      return (
        <>
          <ul>
            <li>Repeat loops are the simplest loops but the least flexible.</li>
            <br />
            <li>
              This loop runs whatever is inside it a certain number of times.
            </li>
            <br />
            <li>
              We need to be careful when creating sprites or other things inside
              of a loop. Only the last sprite created retains its name.
            </li>
            <br />
            <li>
              So if we want all the sprites to have certain characteristics,
              this should be done inside the loop before the loop is able to
              repeat.
            </li>
            <br />
            <li>For example:</li>
          </ul>
          <br />
          <Image src="/Lesson10/pic8.png" />
          <br />
          <p>produces:</p>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_g5b4Hb7h4FsL" />
          <br />
          <p>But this code:</p>
          <br />
          <Image src="/Lesson10/pic9.png" />
          <br />
          <p>produces:</p>
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_JRsgMkXPiA4E" />
          <br />
          <p>
            There's actually three ducks placed in the center without animations
            because after 4 "mySprite" objects were created, the name "mySprite"
            only applied to the fourth duck created.
          </p>
        </>
      );
    }
    if (page == 3) {
      return (
        <>
          <ul>
            <li>Recreate the game below using repeat loops.</li>
            <br />
            <li>
              The snake has to survive for 5 seconds while 10 cars come from the
              right and 10 cars come from the left at random heights moving at a
              fast velocity.
            </li>
            <br />
            <li>
              Place a pause at the end of your repeat loop so there is a delay
              between one car and the next.
            </li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_T0YihmisHWRg" />
        </>
      );
    }
    if (page == 4) {
      return (
        <>
          {" "}
          <ul>
            <li>
              For Index Loops are used when we want to repeat statements that
              are <b>similar</b> but should be different depending on how many
              times we've repeated the loop.
            </li>
          </ul>
          <Image src="/Lesson10/pic10.png" />
          <br /> <br />
          <ul>
            <li>
              The word "index" is now a variable that can only be used in our
              loop. "index" starts at 0 and increases each time by 1.
            </li>
            <br />
            <li>
              We can use this "index" variable to make small changes in our
              loop. For example:
            </li>
          </ul>
          <br />
          <Image src="/Lesson10/pic11.png" />
          <br />
          <Game src="https://arcade.makecode.com/---run?id=_bcTddUMk0YWh" />
          <br />
          <ul>
            <li>
              In the example above, the For Index loop creates a duck 5 times
              and each time the value of index goes from 0 --&gt; 1 --&gt; 2
              --&gt; 3 --&gt; --&gt; 4.
            </li>
            <br />
            <li>
              The index variable is also used to determine the x position of the
              duck sprites. <br />
              When index is 0, the first duck is placed at 30. <br /> When index
              is 1, the second duck is placed at 60. <br />
              When index is 2, the third duck is placed at 90. <br /> When index
              is 3, the fourth duck is placed at 120. <br />
              And, finally, when index is 4, the last duck is placed at 150.
            </li>
            <br />
            <li>
              This results in all of the ducks being placed very methodically in
              a row.
            </li>
          </ul>
        </>
      );
    }
    if (page == 5) {
      return (
        <>
          <ul>
            <li>
              Loops can sometimes cause unintended problems, especially when
              they contain pauses. For example, this loop:
            </li>
          </ul>
          <Image src="/Lesson10/pic1.png" />
          <p>Creates a game like this:</p>
          <Game src="https://arcade.makecode.com/---run?id=_gRM0yCMvECYi" />
          <ul>
            <li>But this set of loops:</li>
          </ul>
          <Image src="/Lesson10/pic2.png" />
          <p>Creates the red cars first before ever creating any blue cars.</p>
          <Game src="https://arcade.makecode.com/---run?id=_axT8HhC15LHt" />
          <ul>
            <li>
              To avoid this problem, we can either try to merge the two loops
              together like the first example above, or we can make use of the
              helpful Timer extension again:
            </li>
            <br />
            <li>
              Placing each loop inside of a "separately do" block takes each
              loop out of the normal order of sequencing and works on those
              loops at the same time as the rest of the code.
            </li>
          </ul>
          <Image src="/Lesson10/pic3.png" />
          <Game src="https://arcade.makecode.com/---run?id=_Jdbcjq75D4qJ" />
        </>
      );
    }
    if (page == 6) {
      return (
        <>
          {" "}
          <ul>
            <li>
              Recreate the game below by adding asteroids that rain down from
              the top of the screen from left to right:
            </li>
            <br />
            <li>
              You may have an easier time using the Timer extension like on the
              previous page.
            </li>
          </ul>
          <Game src="https://arcade.makecode.com/---run?id=_PVvbAKf70eEM" />
        </>
      );
    }
    if (page == 7) {
      return (
        <>
          <p>It should look something like:</p>
          <Game src="https://arcade.makecode.com/---run?id=_PVvbAKf70eEM" />
          <Submit field="Lesson10" title="Lesson 10: Loops" />
        </>
      );
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
export default Lesson10;
