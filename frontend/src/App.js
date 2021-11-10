import Header from './components/Header'
import Navbar from "./components/NavBar";
import {Route, Switch,} from "react-router-dom";
import AddEvent from "./pages/Add-Event";
import AddLocation from "./pages/Add-Location";
import FindEvent from "./pages/Find-Event";




function App() {
  return (
    <div>
    <Header />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <FindEvent />
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

