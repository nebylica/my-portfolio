import {useState} from 'react'

function WorkLink({name, programs, href, image}) {

    const[trigger, setTrigger] = useState(false)

    return (
        <div className='portfolioBox'
             onMouseOver={() => setTrigger(true)}
             onMouseLeave={() => setTrigger(false)}>

            <div className='element2'> </div>
            <div className='projectTitle'>{name}</div>
            <div className='tag'>{programs}</div>

            <div className='btnBoxBg'>
                {trigger && <img className='webImage' src={image} alt=""/>}
                <a href={href} target='_blank' className='btnBox'>
                    <div className='projectBtn'> </div>
                    <span className='btnName' >view project</span>
                </a>
            </div>
        </div>
    );
}

export default WorkLink;