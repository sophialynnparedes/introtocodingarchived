import Title from "../components/Title";
import Page from "../components/Page";
import Navigate from "../components/Navigate";
import { useState, useEffect } from "react";
import Rubric from "../components/Rubric";
import { ScrollerGameRubric } from "../Rubrics";
import Game from "../components/Game";
import Submit from "../components/Submit";
import Video from "../components/Video";

const Project2 = (props) => {
  const lessonTitle = "Unit 2 Project: Scroller Game";
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
          In this project, we'll combine what we know about event handlers,
          numerical variables, and SpriteKinds to create an arcade game.
        </h3>
        <br />
        <br />
        <br />
        <Title subtitle="Overview:" />
        <p>
          Goal: You will create a classic multiplayer arcade game using event
          handlers, SpriteKinds, and numerical variables. The goal of your game
          will to be to achieve as high of a score as possible before losing.
        </p>
        <br />
        <br />
        <p>You will be graded on the following things:</p>
        <Rubric
          title="Scroller Game Rubric"
          rubric={ScrollerGameRubric}
          scores={[]}
        />
        <br />
        <br />
        <br />
        <Title subtitle="Classic Examples:" />
        <p>Here's some classic examples of Scroller Games:</p>
        <br />
        <Video src="https://www.youtube.com/embed/dvjapcHsqXY?si=mgb7tWobwC5zWo0d" />
        <br />
        <Video src="https://www.youtube.com/embed/PlWhN-70zDA?si=DnxCcZjhKnpVlmM2" />
        <br />
        <Video src="https://www.youtube.com/embed/5Q5-QNfmsbQ?si=jLoy_Licxzid_8LA" />
        <br />
        <Video src="https://www.youtube.com/embed/WNrz9_Fe-Us?si=MEOMXtXL4cdQwOBS" />
        <br />
        <br />
        <Title subtitle="Examples:" />
        <p>
          Here's some great examples of Scroller Games that were created by
          other students! (Note: Many of these aren't multiplayer because it
          wasn't part of the rubric back then.)
        </p>
        <Game src="https://arcade.makecode.com/---run?id=_8CwUK299Ha1s" />
        <br />
        <Game src="https://arcade.makecode.com/---run?id=_YPqbFxXA9XdD" />
        <br />
        <Game src="https://arcade.makecode.com/---run?id=_Eja7UdDMdcCv" />
        <br />
        <Title subtitle="Submit Your Project:" />
        <h3>
          Get in the habit of submitting your project every time you work on it.
          This helps make sure you don't accidently lose progress (if and when)
          MakeCode runs into a problem.
        </h3>
        <Submit field="ScrollerGame" title="Unit 2 Project: Scroller Game" />
      </Navigate>
    </Page>
  );
};
export default Project2;
