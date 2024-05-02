import Title from "../components/Title";
import Page from "../components/Page";
import Navigate from "../components/Navigate";
import { useState } from "react";
import Rubric from "../components/Rubric";
import { AdventureGameRubric } from "../Rubrics";
import Game from "../components/Game";
import Submit from "../components/Submit";
import Video from "../components/Video";

const Project4 = (props) => {
  const lessonTitle = "Unit 4 Project: Adventure Game";
  const agendaItems = [""];
  const [page, setPage] = useState(0);

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
          In this project, we'll combine what we know about conditional
          statements, loops, arrays, and functions create an adventure game.
        </h3>
        <br />
        <br />
        <br />
        <Title subtitle="Overview:" />
        <p>
          Goal: You will create an adventure game that incorporates the
          following features as best you can:
        </p>

        <Rubric
          title="Adventure Game Rubric"
          rubric={AdventureGameRubric}
          scores={[]}
        />
        <br />
        <br />
        <br />
        <Title subtitle="Classic Examples:" />
        <ul>
          <li>
            Below are some examples of what we would refer to as belonging in
            the Adventure Game genre:
          </li>
        </ul>
        <Video src="https://www.youtube.com/embed/Z6hjG6MCcZ8?si=33-owrfgdV4hhmVX" />
        <br />
        <Video src="https://www.youtube.com/embed/v7dGc_eSg6k?si=HmAQbdS4NPaM8m0Y" />
        <br />
        <Video src="https://www.youtube.com/embed/Az-frcyb-_k?si=SxuA1SjFvbSt3tbL" />
        <br />

        <br />
        <Title subtitle="Submit Your Project:" />
        <h3>
          Get in the habit of submitting your project every time you work on it.
          This helps make sure you don't accidently lose progress (if and when)
          MakeCode runs into a problem.
        </h3>
        <Submit field="AdventureGame" title="Unit 4 Project: Adventure Game" />
      </Navigate>
    </Page>
  );
};
export default Project4;
