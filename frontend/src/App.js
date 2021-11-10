import Header from './components/Header'
import Navbar from "./components/NavBar";
import ComboBoxCity from "./components/ComboBoxCity";
import ComboBoxGenre from "./components/ComboBoxGenre";
import DatePicker from "./components/EventDatePicker";
import EventDatePicker from "./components/EventDatePicker";

function App() {
  return (
    <div>
    <Header />
      <Navbar />
      <ComboBoxCity />
      <ComboBoxGenre />
      <EventDatePicker />
    </div>
  );
}

export default App;

