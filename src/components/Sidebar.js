import React from 'react';
import Nav from "./Nav";
import Contacts from "./Contacts";

function Sidebar() {
    return (
        <div className='sidebar'>

            <div className='d-flex-column'>
                <span className="tag">&lt;name&gt;</span>
                <span className="title">Viktorija Nebylica</span>
                <span className="tag">&lt;/name&gt;</span>
            </div>

            <Nav />

            <Contacts />
        </div>
    );
}

export default Sidebar;