import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navigations from "./Navbar/Navigations";
import Routers from "./Navbar/Routers";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navigations/>
          <Routers/>
      </BrowserRouter>
    </div>
  );
}

export default App;
