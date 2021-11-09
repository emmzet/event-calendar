import Header from './components/Header'
import Navbar from "./components/NavBar";
import {Route, Switch,} from "react-router-dom";
import AddEvent from "./pages/Add-Event";




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
      </Switch>
    </div>
  );
}

export default App;

