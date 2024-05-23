import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NewNavbar from "./components/NewNavbar";
import Options from "./components/Options";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";

import NavBar from "./components/BookingPage/NavBar";
import Option from "./components/BookingPage/BookedOption";
import Scroll from "./components/BookingPage/ScrollToTop";

import Info from "./components/BookingPage/InfoCard";
//import NavBar from './components/BookingPage/NavBar';
//import {PaymentSummaryFinal1} from './components/PaymentSummaryFinal1';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

//added comment to try commit and push

function App() {
  const [selectedGuest, setSelectedGuest] = useState();

  const [modalState, setModal] = useState({
    state: false,
    index: 0,
  });

  const [setRight] = useState("-600px");

  return (
    <UserContext.Provider value={[modalState, setModal]}>
      <Router>
        <Switch>
          {/*  <Route path="/book">
            <PaymentSummaryFinal1 />
            </Route> */}
          <Route path="/book">
            <NavBar />
            <Option />
            <Info />
          </Route>

          <Route  exact path={["/", "/book"]}>
            <>
              <NewNavbar />
              <Hero setSelectedGuest={setSelectedGuest} />
              <Services />
              <Options selectedGuest={selectedGuest} />
              <ScrollToTop />
              <Footer />
              {/* <PaymentSummaryFinal1 />*/}
            </>

            <Scroll />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
