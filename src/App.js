import {BrowserRouter} from "react-router-dom";
import Navigations from "./Navbar/Navigations";
import Routers from "./Navbar/Routers";
import {Provider} from "react-redux";
import store from "./store";
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navigations/>
                <Routers/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
