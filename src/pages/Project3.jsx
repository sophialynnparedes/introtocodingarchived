import Title from "../components/Title";
import Page from "../components/Page";
import Navigate from "../components/Navigate";
import { useState } from "react";
import Rubric from "../components/Rubric";
import { PlatformerGameRubric } from "../Rubrics";
import Game from "../components/Game";
import Submit from "../components/Submit";
import Video from "../components/Video";

const Project3 = (props) => {
  const lessonTitle = "Unit 3 Project: Platformer Game";
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
          statements, loops, arrays, and functions create a platformer game.
        </h3>
        <br />
        <br />
        <br />
        <Title subtitle="Overview:" />
        <p>
          Goal: You will create a classic platformer game that requires you to
          reach the end of each level filled with enemies, items, hazards, etc.
          The game will have various power ups to collect to gain abilities,
          multiple levels to explore, and at least one boss battle.
        </p>
        <br />
        <br />
        <p>You will be graded on the following things:</p>

        <Rubric
          title="Platformer Game Rubric"
          rubric={PlatformerGameRubric}
          scores={[]}
        />
        <br />
        <br />
        <br />
        <Title subtitle="Classic Examples:" />
        <ul>
          <li>
            Below are some examples of what we would refer to as belonging in
            the Platformer Game genre:
          </li>
        </ul>
        <br />
        <Video src="https://www.youtube.com/embed/Gx5--eK2k6Y?si=95tIhzJb_Uup_2uj" />
        <br />
        <Video src="https://www.youtube.com/embed/_Eug8PRZWlc?si=ZQchNylTkIX4p6-3" />
        <br />
        <Video src="https://www.youtube.com/embed/Gsa_4s3CjmI?si=n_BscUOEGz3Do5Ie" />
        <br />
        <Video src="https://www.youtube.com/embed/KnYN7h-l8w0?si=-qGb90Ch4s22MNtZ" />

        <br />
        <ul>
          <li>You'll notice that some of the common features are:</li>
          <br />
          <ul>
            <li>The level is viewed from the side.</li>
            <br />
            <li>The objects in the game experience gravity.</li>
            <br />
            <li>
              There are items, objects, and enemies placed at various locations
              in each level.
            </li>
            <br />
            <li>After completing one level, you move on to the next.</li>
            <br />
            <li>
              At the end of a level or set of levels, there's usually some form
              of boss fight against a stronger enemy.
            </li>
          </ul>
        </ul>

        <Title subtitle="Examples:" />
        <p>
          Here's some great examples of Platformer Games that were created by
          other students!
        </p>
        <Game src="https://arcade.makecode.com/---run?id=_0LzdX1P3iauz" />
        <br />
        <Game src="https://arcade.makecode.com/---run?id=_0gt1Y49p8VKK" />
        <br />
        <Game src="https://arcade.makecode.com/---run?id=_4vTRJ10ziXgd" />
        <br />
        <Game src="https://arcade.makecode.com/---run?id=_TMk6wjJdC3p3" />
        <br />
        <Game src="https://arcade.makecode.com/---run?id=_b2HUJEEjJ76D" />

        <Title subtitle="Submit Your Project:" />
        <h3>
          Get in the habit of submitting your project every time you work on it.
          This helps make sure you don't accidently lose progress (if and when)
          MakeCode runs into a problem.
        </h3>
        <Submit
          field="PlatformerGame"
          title="Unit 3 Project: Platformer Game"
        />
      </Navigate>
    </Page>
  );
};
export default Project3;
