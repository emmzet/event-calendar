import Header from './components/Header'
import Navbar from "./components/NavBar";
import {Route, Switch,} from "react-router-dom";
import AddEvent from "./pages/Add-Event";
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
      </Switch>
    </div>
  );
}

export default App;

