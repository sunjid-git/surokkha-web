import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import Help from "./components/Help/Help";
import FAQ from "./components/FAQ/FAQ";
import Enroll from "./components/Enroll/Enroll";
import ForeignerEnroll from "./components/ForeignerEnroll/ForeignerEnroll";
import VaccineStatus from "./components/VaccineStatus/VaccineStatus";
import Certificate from "./components/Certificate/Certificate";
import Verify from "./components/Verify/Verify";
import VaccineCard from "./components/VaccineCard/VaccineCard";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/enroll" component={Enroll} />
        <Route path="/foreigner-enroll" component={ForeignerEnroll} />
        <Route path="/vaccine-status" component={VaccineStatus} />
        <Route path="/vaccine-card" component={VaccineCard} />
        <Route path="/certificate" component={Certificate} />
        <Route path="/verify" component={Verify} />
        <Route path="/help" component={Help} />
        <Route path="/faq" component={FAQ} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
