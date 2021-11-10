import Header from './components/Header'
import Navbar from "./components/NavBar";
import {Route, Switch,} from "react-router-dom";
import AddEvent from "./pages/Add-Event";
import AddLocation from "./pages/Add-Location";




function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/">
      <Navbar />
        </Route>
        <Route exact path="/add-event">
          <AddEvent />
        </Route>
        <Route exact path="/add-location">
          <AddLocation />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

