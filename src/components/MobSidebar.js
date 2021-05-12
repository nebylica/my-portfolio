import React, {useState, useEffect} from 'react';
import Nav from "./Nav";
import Contacts from "./Contacts";
import { FaTimes } from 'react-icons/fa';


function MobSidebar() {

    const [showSidebar, setShowSidebar] = useState(false)

    return (

        <div>
            <div onClick={() => setShowSidebar(true)} className='sideMenu'>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {showSidebar && (
                <div className='mobSidebar'>

                    <div onClick={() => setShowSidebar(false)} className='closeSidebar'>
                        <FaTimes />
                    </div>

                    <div className='d-flex-column'>
                        <span className="tag">&lt;name&gt;</span>
                        <span className="title">Viktorija Nebylica</span>
                        <span className="tag">&lt;/name&gt;</span>
                    </div>

                    <Nav />

                    <Contacts />
                </div>
            )}

        </div>

    );
}

export default MobSidebar;