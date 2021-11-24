import Header from './components/Header'
import Navbar from "./components/NavBar";
import {Route, Switch,} from "react-router-dom";
import AddEvent from "./pages/AddEvent";
import EventsOverview from "./pages/EventsOverview";




function App() {
  return (
    <div>
    <Header />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <EventsOverview />
        </Route>
        <Route exact path="/add-event">
          <AddEvent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

