import Title from "../components/Title";
import WordsSphere from "../components/WordsSphere";

function Experience() {

    return (
        <div >

            <Title name='Skills & Experience' />

            <div className='experienceContainer'>
                <div className='experience'>
                    <p>
                        The main area of my expertise is front end development.
                    </p>
                    <p>
                        Building small and medium websites with HTML, CSS, JS, React, custom plugins, features, animations and coding interactive layouts.
                    </p>
                    <p>
                        I have also full stack developer experience, connect applications with back end and data base through Node.js and MongoDb.
                    </p>
                    <p>
                        Visit my
                        <a href="https://www.linkedin.com/in/viktorija-nebylica-4b2874151/" target='_blank' rel="noreferrer"> LinkedIn </a>
                        profile for more details.
                    </p>
                </div>
                <div className='sphereBox'>
                    <WordsSphere/>
                </div>
            </div>

        </div>
    );
}

export default Experience;