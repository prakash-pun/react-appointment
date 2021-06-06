import { BiWinkSmile } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl"><BiWinkSmile className="inline-block text-red-600 align-top" />Prakash Pun</h1>
      <AddAppointment />
      <Search />
    </div>
  );
}

export default App;
