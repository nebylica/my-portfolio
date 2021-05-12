import React from 'react';

function Title({name}) {
    return (
        <div className='title-box'>
            <span className="tag">&lt;{name.toLowerCase()}&gt;</span>
            <span className="title-big">{name}</span>
            <span className="tag">&lt;/{name.toLowerCase()}&gt;</span>
        </div>
    );
}

export default Title;