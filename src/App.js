import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";


function App() {


    return (
        <Router>
            <div className='d-flex'>
                <Sidebar />
                <Switch>
                    <Route exact path='/'>
                        <About />
                    </Route>

                    <Route path='/experience'>
                        <Experience />
                    </Route>

                    <Route path='/portfolio'>
                        <Portfolio />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;