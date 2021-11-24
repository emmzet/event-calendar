import Header from './components/Header'
import Navbar from "./components/NavBar";
import {Route, Switch,} from "react-router-dom";
import AddEvent from "./pages/AddEvent";
import EventsOverview from "./pages/EventsOverview";
import LandingPage from "./pages/LandingPage";
import styled from "styled-components";




function App() {
  return (
    <Wrapper>
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/events-overview">
          <EventsOverview />
        </Route>
        <Route exact path="/add-event">
          <AddEvent />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
color: beige;
  gap: 50px;
`
