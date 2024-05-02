import { Link } from "wouter";
import Title from "../components/Title";
import { lessons } from "../Lessons";
import Button from "../components/Button";
import Page from "../components/Page";

const Learn = (props) => {
  const LessonCard = (props) => {
    return (
      <Link href={props.href}>
        <div className="lessonCard" id={props.id}>
          <Title subtitle={props.lesson} />
          <p>{props.objective}</p>
        </div>
      </Link>
    );
  };

  let LessonCards = lessons.map((item, key) => {
    return (
      <LessonCard
        lesson={item[0]}
        objective={item[1]}
        key={key}
        href={item[2]}
        id="upcoming"
        dueDate={item[4]}
      />
    );
  });

  return (
    <Page>
      <Title title="Intro to Coding" />
      <ul>
        <li>This is the archived version of my Intro to Coding course.</li>{" "}
        <br />
        <li>
          It's missing many features from my active course, but feel free to use
          the curriculum, lessons, and materials below however you want.
        </li>
        <br />
        <li>
          If you're interested in using the active version of the course, using
          Google Firebase to authenticate and store data, and be able to give
          feedback to students, you can contact me at
          sophialynnparedes@gmail.com
        </li>
      </ul>

      <Button
        className="button"
        label="MakeCode Arcade"
        method={() => {
          window.open("http://arcade.makecode.com", "_blank");
        }}
      />

      <>{LessonCards}</>
    </Page>
  );
};
export default Learn;
