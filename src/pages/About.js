import {useState, useEffect} from 'react'
import Title from "../components/Title";

function About() {


    const text = "I'm Viktorija, nice to meet you on my website! I've started my journey of coding since 2020, at first I learned by myself, later on in May of 2021 I've finished Front-End Developer course in Code Academy. During that time I learned how to properly use different programs and gained a lot of motivation to move forward in this career path!"
    const [typingText, setTypingText] = useState('')
    const [i, setI] = useState(0)


    useEffect(() => {
        setTimeout(() => {
            if (i < text.length) {
                setTypingText(typingText+text[i])
                setI(i+1);
            }
        }, 30)

    }, [i])



    return (
        <div style={{width: '100%'}}>

            <Title name='About me' />

            <div className='aboutContainer'>
                <div className='letter'>
                    <p className='line-1 anim-typewriter'>
                        Hi,<br/>
                        {typingText}
                    </p>
                </div>

                <div className='photo'> </div>
                <div className='element'> </div>
            </div>

        </div>
    );
}

export default About;