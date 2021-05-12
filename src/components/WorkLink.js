
function WorkLink({name, programs, href}) {
    return (
        <div className='portfolioBox'>

            <div className='element2'> </div>
            <div className='projectTitle'>{name}</div>
            <div className='tag'>{programs}</div>

            <div className='btnBoxBg'>
                {/*<div className='bg'></div>*/}
                <a href={href} className='btnBox'>
                    <div className='projectBtn'> </div>
                    <span className='btnName'>view project</span>
                </a>
            </div>
        </div>
    );
}

export default WorkLink;