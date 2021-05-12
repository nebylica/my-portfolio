import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className='nav'>
            <Link to='/my-portfolio'>About</Link>
            <Link to='/my-portfolio/experience'>Experience & Skills</Link>
            <Link to='/my-portfolio/portfolio'>Portfolio</Link>
        </div>
    );
}

export default Nav;