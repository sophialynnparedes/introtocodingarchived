import PageRouter from "./components/PageRouter";
import "./Styles.css";
import { Router } from "wouter";

const App = () => {
  return (
    <>
      <div className="background"></div>
      <div className="wrapper">
        <Router>
          <PageRouter />
        </Router>
      </div>
    </>
  );
};
export default App;
