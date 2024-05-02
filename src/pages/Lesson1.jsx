import Title from "../components/Title";
import Button from "../components/Button";
import Video from "../components/Video";
import Page from "../components/Page";
import Navigate from "../components/Navigate";
import Image from "../components/Image";
import { useState, useEffect } from "react";
import Row from "../components/Row";
import Submit from "../components/Submit";

const Lesson1 = (props) => {
  const [page, setPage] = useState(0);

  const lessonTitle = "Lesson 1: MakeCode Basics";

  const agendaItems = [
    "Lesson Objective & Setup",
    "What is this class?",
    "Getting Started with MakeCode Arcade",
    "Signing In to MakeCode Arcade",
    "Navigating MakeCode Arcade",
    "Creating a Me Sprite",
    "Submitting your Lesson 1 Project",
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
            In this lesson, we'll learn about this class, how to access MakeCode
            Arcade, and create a sprite.
          </h3>
          <br />
          <br />

          <Button
            className="button"
            label="Optional: Watch Lesson 1 Video"
            method={() => {
              window.open(
                "https://www.youtube.com/watch?v=8GqybcBVXp0",
                "_blank"
              );
            }}
          />
        </>
      );
    } else if (page == 1) {
      return (
        <>
          <p>
            <b>Intro to Coding</b> is a single-trimester class where students
            learn the foundations of coding and algorithms through the creation
            of two-dimensional arcade games using{" "}
            <div className="buttonRow">
              <Button
                className="button"
                label="Microsoft MakeCode Arcade"
                method={() => {
                  window.open("http://arcade.makecode.com", "_blank");
                }}
              />
            </div>
            <br />
          </p>
          <Title subtitle="Who should take this class?" />
          <p>
            This course is designed for students that want to dip their toes
            into computer programming to see if it is something that they like
            and may want to pursue further at a later date. Students that
            already know they are interested in computer programming may want to
            enroll in AP Computer Science Principles instead, which is a
            year-long introductory course in computer science and programming
            with no prior knowledge of computer programming needed.
          </p>
          <br />
          <Title subtitle="What skills would I develop?" />{" "}
          <p>Through engaging in this course, students will demonstrate:</p>
          <br />
          <ul>
            <li>
              <p>
                Increased ability in the components of Computational Thinking:
              </p>
              <ul>
                <li>
                  <p>
                    Decomposition: breaking down a larger problem into smaller
                    parts,
                  </p>
                </li>
                <li>
                  <p>
                    Pattern Recognition: identifying similarities withing
                    problems,
                  </p>
                </li>
                <li>
                  <p>
                    Abstraction: deriving general rules and concepts from the
                    usage and classification of specific examples,
                  </p>
                </li>
                <li>
                  <p>
                    and Algorithmic Thinking: developing step-by-step processes
                    or rules to follow to solve a problem.
                  </p>
                </li>
              </ul>
            </li>
            <br />
            <li>
              <p>Increased ability in the components of Design Thinking:</p>
              <ul>
                <li>
                  <p>Empathy,</p>
                </li>
                <li>
                  <p>Brainstorming,</p>
                </li>
                <li>
                  <p>Designing,</p>
                </li>
                <li>
                  <p>Prototyping,</p>
                </li>
                <li>
                  <p>and Testing.</p>
                </li>
              </ul>
            </li>
            <br />{" "}
            <li>
              <p>
                Increased understanding and skill in applying the algorithmic
                forms of Sequencing, Selection, and Iteration.
              </p>
            </li>
          </ul>
          <br />
          <Title subtitle="What would I learn?" />
          <p>
            Students will progress through five units, each focusing on a
            different genre or component of video games:
          </p>
          <br />
          <ul>
            <li>
              <p>
                <b>Unit 1: Sprite Story</b> has students learning the basics of
                working with MakeCode Arcade and how <b>sequencing</b>, the
                order of steps in an algorithm, plays a huge role in how
                computer programs function. Students will make a program that
                resembles a short story or cutscene in a video game.
              </p>
            </li>
            <br />
            <li>
              <p>
                <b>Unit 2: Scroller Game</b> has students learning about{" "}
                <b>event handlers</b> (also sometimes refered to as listeners)
                to incorporate user input and interactions between in-game
                objects. Students are introduced to <b>variables</b> through
                Life and Score, and perform operations on these variables to
                creates methods of winning and losing in the game.
              </p>
            </li>
            <br />
            <li>
              <p>
                <b>Unit 3: Platformer Game</b> has students learning about{" "}
                <b>iteration</b>, loops that repeat similar code, and{" "}
                <b>selection</b>, statements that choose certain commands to
                execute based on conditions. Students begin to learn about{" "}
                <b>abstraction</b> through using <b>arrays</b> (lists) and{" "}
                <b>functions</b> to simplify complex programs.
              </p>
            </li>
            <br />
            <li>
              <p>
                <b>Unit 4: Adventure Game</b> has students applying their
                knowledge and skills to design and develop an adventure game to
                meet certain criteria.{" "}
              </p>
            </li>
            <br />
            <li>
              <p>
                <b>Unit 5: Video Game Design Project</b> tasks students with
                developing a full game of their choice using all of the skills
                they have developed throughout the course.
              </p>
            </li>
          </ul>
        </>
      );
    } else if (page == 2) {
      return (
        <>
          <ul>
            <li>
              In this class, we use MakeCode Arcade to program small video
              games.
            </li>
            <br />
            <li>
              You can click this button to open a tab for MakeCode Arcade:
            </li>
          </ul>
          <br />
          <Row align="center">
            <Button
              className="button"
              label="MakeCode Arcade"
              method={() => {
                window.open("http://arcade.makecode.com", "_blank");
              }}
            />
          </Row>
          <br />
          <ul>
            <li>
              You can also get there by clicking the link in our Schoology
              course,
            </li>
            <br />
            <li>
              or by typing <b>arcade.makecode.com</b> in the address bar of your
              browser.
            </li>
          </ul>
        </>
      );
    } else if (page == 3) {
      return (
        <>
          <br />
          <Image src="/Lesson1/pic1.png" />
          <br />
          <ul>
            <li>
              At the top right corner of MakeCode Arcade, you will find the sign
              in button.
            </li>
            <br />
            <li>
              Click <b>Continue with Google</b>, and sign in using your
              MyPanthers account and password.
            </li>
          </ul>
        </>
      );
    } else if (page == 4) {
      return (
        <>
          <ul>
            <li>
              Watch the video below to get familiar with navigating through
              MakeCode Arcade:
            </li>
          </ul>
          <br />
          <Video src="https://www.youtube.com/embed/lYaeO1SF2OY?si=34prL1pTjULZFASr" />
        </>
      );
    } else if (page == 5) {
      return (
        <>
          <ul>
            <li>
              Create a new project called <b>Sprite Story</b>
            </li>
            <br />
            <li>Then navigate to the Assets folder at the top.</li>
            <br />
            <li>
              Then click <b>New Asset</b>.
            </li>
            <br />
            <li>
              Then click <b>Image</b>.
            </li>
          </ul>
          <br />
          <Image src="/Lesson1/pic2.png" />
          <br />
          <ul>
            {" "}
            <li>This is the Sprite Editor:</li>
          </ul>
          <Image src="/Lesson1/pic3.png" />
          <br />
          <ul>
            <li>
              Use the tools in the Sprite Editor to create your{" "}
              <b>"Me Sprite"</b> - a sprite that represent you or something
              about you.
            </li>
            <br />
            <li>
              You can watch the video below to learn more about the sprite
              editor as well.
            </li>
          </ul>
          <br />
          <br />
          <Video src="https://www.youtube.com/embed/ltytQi1phEs?si=4ukr5UHPpb2uFcNq" />
        </>
      );
    } else if (page == 6) {
      return (
        <>
          <Submit field="Lesson1" title="Lesson 1: MakeCode Basics" />
          <br />
          <br />
          <h3>
            Be aware that you won't see anything for your Lesson 1 Project,
            since you only made a single sprite.
          </h3>
        </>
      );
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
export default Lesson1;
