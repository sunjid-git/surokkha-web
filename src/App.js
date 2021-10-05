import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import Help from "./components/Help/Help";
import FAQ from "./components/FAQ/FAQ";

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

        <Route path="/help">
          <Help />
        </Route>

        <Route path="/faq">
          <FAQ />
        </Route>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
