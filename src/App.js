import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import {useState, useEffect} from 'react';
import MobSidebar from "./components/MobSidebar";

function App() {

    const [sidebar, setSidebar] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    });

    useEffect(() => {
        windowWidth < 1000 ? setSidebar(false) : setSidebar(true)
    }, [windowWidth])

    return (
        <Router>
            <div className='d-flex'>
                {sidebar ? <Sidebar /> : <MobSidebar />}

                <Switch>
                    <Route exact path='/my-portfolio'>
                        <About />
                    </Route>

                    <Route path='/my-portfolio/experience'>
                        <Experience />
                    </Route>

                    <Route path='/my-portfolio/portfolio'>
                        <Portfolio />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;