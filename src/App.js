import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/HeaderFooter/Home/Home";
import Header from "./components/HeaderFooter/Header";

function App() {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
