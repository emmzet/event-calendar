import Header from './components/Header'
import Navbar from "./components/NavBar";
import ComboBoxCity from "./components/ComboBoxCity";
import ComboBoxGenre from "./components/ComboBoxGenre";
import EventDatePicker from "./components/EventDatePicker";
import {Route, Switch,} from "react-router-dom";



function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/">
      <Navbar />
      <ComboBoxCity />
      <ComboBoxGenre />
      <EventDatePicker />
        </Route>
        <Route exact path="/add-event">
          <ComboBoxCity />
          <ComboBoxGenre />
          <EventDatePicker />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

