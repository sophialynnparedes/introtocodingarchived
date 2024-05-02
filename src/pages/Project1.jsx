import Title from "../components/Title";
import Page from "../components/Page";
import Navigate from "../components/Navigate";
import { useState, useEffect } from "react";
import Rubric from "../components/Rubric";
import { SpriteStoryRubric } from "../Rubrics";
import Game from "../components/Game";
import Submit from "../components/Submit";

const Project1 = (props) => {
  const lessonTitle = "Unit 1 Project: Sprite Story";
  const agendaItems = [""];
  const [page, setPage] = useState(0);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [page]);

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
        <h3>
          In this project, we'll combine what we know about positioning,
          velocity, story elements, and animations to create a short story.
        </h3>
        <br />
        <br />
        <br />
        <Title subtitle="Overview:" />
        <p>
          Goal: You will create a short story about anything you want (about 1
          minute in length) using sprites, backgrounds, position, velocity,
          animations, and various ways of displaying text.
        </p>
        <br />
        <br />
        <p>You will be graded on the following things:</p>

        <Rubric
          title="Sprite Story Rubric"
          rubric={SpriteStoryRubric}
          scores={[]}
        />
        <br />
        <br />
        <br />

        <Title subtitle="Examples:" />
        <p>
          Here's some great examples of Sprite Stories that were created by
          other students!
        </p>
        <Game src="https://arcade.makecode.com/---run?id=S61905-94257-73173-65652" />
        <Game src="https://arcade.makecode.com/---run?id=S86548-94385-92264-61219" />
        <Game src="https://arcade.makecode.com/---run?id=S05069-41676-08888-23202" />
        <br />
        <br />
        <br />
        <Title subtitle="Submit Your Project:" />
        <h3>
          Get in the habit of submitting your project every time you work on it.
          This helps make sure you don't accidently lose progress (if and when)
          MakeCode runs into a problem.
        </h3>
        <Submit field="SpriteStory" title="Unit 1 Project: Sprite Story" />
      </Navigate>
    </Page>
  );
};
export default Project1;
