import { Switch, Route } from "wouter";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";
import Learn from "../pages/Learn";
import Projects from "../pages/Projects";
import Grades from "../pages/Grades";
import Help from "../pages/Help";
import Update from "../pages/Update";
import Lesson1 from "../pages/Lesson1";
import Lesson2 from "../pages/Lesson2";
import Lesson3 from "../pages/Lesson3";
import Lesson4 from "../pages/Lesson4";
import Project1 from "../pages/Project1";
import Lesson5 from "../pages/Lesson5";
import Lesson6 from "../pages/Lesson6";
import Lesson7 from "../pages/Lesson7";
import Lesson8 from "../pages/Lesson8";
import Project2 from "../pages/Project2";
import Lesson9 from "../pages/Lesson9";
import Lesson10 from "../pages/Lesson10";
import Lesson11 from "../pages/Lesson11";
import Lesson12 from "../pages/Lesson12";
import Lesson13 from "../pages/Lesson13";
import Lesson14 from "../pages/Lesson14";
import Lesson15 from "../pages/Lesson15";
import Lesson16 from "../pages/Lesson16";
import Project3 from "../pages/Project3";
import Lesson17 from "../pages/Lesson17";
import Lesson18 from "../pages/Lesson18";
import Lesson19 from "../pages/Lesson19";
import Lesson20 from "../pages/Lesson20";
import Lesson21 from "../pages/Lesson21";
import Project4 from "../pages/Project4";
import Project5 from "../pages/Project5";

const PageRouter = (props) => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/register2" component={Register2} />
    <Route path="/learn" component={Learn} />
    <Route path="/projects" component={Projects} />
    <Route path="/grades" component={Grades} />
    <Route path="/help" component={Help} />
    <Route path="/update" component={Update} />
    <Route path="/lesson1" component={Lesson1} />
    <Route path="/lesson2" component={Lesson2} />
    <Route path="/lesson3" component={Lesson3} />
    <Route path="/lesson4" component={Lesson4} />
    <Route path="/project1" component={Project1} />
    <Route path="/lesson5" component={Lesson5} />
    <Route path="/lesson6" component={Lesson6} />
    <Route path="/lesson7" component={Lesson7} />
    <Route path="/lesson8" component={Lesson8} />
    <Route path="/project2" component={Project2} />
    <Route path="/lesson9" component={Lesson9} />
    <Route path="/lesson10" component={Lesson10} />
    <Route path="/lesson11" component={Lesson11} />
    <Route path="/lesson12" component={Lesson12} />
    <Route path="/lesson13" component={Lesson13} />
    <Route path="/lesson14" component={Lesson14} />
    <Route path="/lesson15" component={Lesson15} />
    <Route path="/lesson16" component={Lesson16} />
    <Route path="/project3" component={Project3} />
    <Route path="/lesson17" component={Lesson17} />
    <Route path="/lesson18" component={Lesson18} />
    <Route path="/lesson19" component={Lesson19} />
    <Route path="/lesson20" component={Lesson20} />
    <Route path="/lesson21" component={Lesson21} />
    <Route path="/project4" component={Project4} />
    <Route path="/project5" component={Project5} />
  </Switch>
);
export default PageRouter;
