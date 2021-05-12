import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className='nav'>
            <Link to='/'>About</Link>
            <Link to='/experience'>Experience & Skills</Link>
            <Link to='/portfolio'>Portfolio</Link>
        </div>
    );
}

export default Nav;