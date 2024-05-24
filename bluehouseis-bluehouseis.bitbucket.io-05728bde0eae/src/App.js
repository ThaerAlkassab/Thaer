import "./App.css";
import Header from "./components/header";
import HomePage from "./views/homePage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cookies from "./components/Cookies";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import HouseRules from "./views/houseRules";
import Footer from "./components/Footer/Footer";
import Notfound from "./views/Notfound";
import Aboutus from "./views/AboutUs";
import ViewGalery from "./views/viewGalery";
import PrivacyandPolicy from "./views/ImportAndP&P";
import ScrollToTop from "./ScrollToTop";
import Map from "./components/map/Map";
import SliderPhoto from "./components/SliderPhoto";
import { useState } from "react";
import { createContext } from "react";
//import Home from "./components/Home/Home/Home";
//import BookingPage from "./components/BookingPage/BookingPage";
import EnquirePage from "./components/BookingPage/EnquirePage";
//import Payment from "./components/PaymentPage/Payment";
import ThankYou from "./thankyou/index.js";
import {RedirectBlog, RedirectTripAdv} from "./redirect/Redirect";

export const UserContext = createContext();

function App() {
  const [modalState, setModal] = useState({
    state: false,
    index: 0,
  });
  const [room, setRoom] = useState(false);

  const [right, setRight] = useState("-600px");

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={[modalState, setModal, room, setRoom]}>
        <Router>
          <Switch>
          {/*  <Route exact path="/beds24">
              <Home />
            </Route> 

            <Route path="/book">
              <BookingPage />
            </Route> 
           
           <Route path="/payment">
              <Payment /> 
            </Route>
            */}
             <Route exact path="/enquire">
              <EnquirePage />
            </Route>
            <Route path="/thankyou">
              <ThankYou />
            </Route>
            <Route path="/blog">
              <RedirectBlog />
            </Route>
            <Route path="/tripadvisor">
              <RedirectTripAdv />
            </Route>
            <Route
              exact
              path={[
                "/",
                "/house-rules",
                "/view-gallery",
                "/about-us",
                "/privacy-and-policy",
                "/slider-photo",
                "/book",
                "/enquire",
                "/beds24"
              ]}
            >
              <div className="App">
                <Header right={right} setRight={setRight} />
                <ScrollToTop />
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/house-rules">
                    <HouseRules />
                  </Route>
                  <Route exact path="/view-gallery">
                    <ViewGalery />
                  </Route>
                  <Route exact path="/about-us">
                    <Aboutus />
                  </Route>
                  <Route exact path="/privacy-and-policy">
                    <PrivacyandPolicy />
                  </Route>
                  <Route exact path="/slider-photo">
                    <SliderPhoto />
                  </Route>
 
                </Switch>
              </div>
              <Cookies />
              <Map />
              <Footer />
            </Route>
            <>
              <Header right={right} setRight={setRight} />
              <Notfound />
            </>
          </Switch>
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
