import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/HeaderFooter/Home/Home";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";

function App() {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
