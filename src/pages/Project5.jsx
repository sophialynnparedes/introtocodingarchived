import Title from "../components/Title";
import Page from "../components/Page";
import Navigate from "../components/Navigate";
import { useState } from "react";
import Rubric from "../components/Rubric";
import { FinalGameRubric } from "../Rubrics";
import Game from "../components/Game";
import Submit from "../components/Submit";

const Project5 = (props) => {
  const lessonTitle = "Unit 5 Project: Your Game!";
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

        <Title subtitle="Overview:" />

        <h3>For our final project, you'll design and develop your own game.</h3>
        <br />
        <ul>
          <li>
            You can make any game you want. It doesn't have to be a specific
            genre or include specific features.
          </li>
          <br />
          <li>
            You will need to make use of all the different concepts we've
            learned about in this class, including:
          </li>
          <br />
          <ul>
            <li>Event Handlers</li>
            <br />
            <li>Loops</li>
            <br />
            <li>Conditional Statements</li>
            <br />
            <li>Arrays</li>
            <br />
            <li>Functions</li>
          </ul>

          <li>The Due Date for this project is the last day of class.</li>
          <br />
          <li>
            Please submit your project each day that you work on it below to
            save a copy of your work.
          </li>
        </ul>

        <br />
        <br />
        <p>You will be graded on the following things:</p>

        <Rubric title="Your Game Rubric" rubric={FinalGameRubric} scores={[]} />
        <br />
        <br />
        <br />

        <Title subtitle="Examples:" />
        <p>
          Here's some great examples of games that were created by other
          students!
        </p>

        <br />
        <br />
        <br />
        <Title subtitle="Submit Your Project:" />
        <h3>
          Get in the habit of submitting your project every time you work on it.
          This helps make sure you don't accidently lose progress (if and when)
          MakeCode runs into a problem.
        </h3>
        <Submit field="Final" title="Unit 5 Project: Your Game" />
      </Navigate>
    </Page>
  );
};
export default Project5;
