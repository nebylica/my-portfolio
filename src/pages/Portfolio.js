import Title from "../components/Title";
import WorkLink from "../components/WorkLink";

function Portfolio() {

    const worksData = [
        {name: 'recipes website', programs: 'CSS, JS, React, Node.js, MongoDb', href: '#'},
        {name: 'black jack', programs: 'HTML, CSS, JS, Node.js', href: '#'},
        {name: 'paper rock scissors', programs: 'HTML, CSS, JS, Node.js, Socket.io', href: '#'},
        {name: 'christmas mood', programs: 'HTML, CSS', href: '#'},
    ]

    return (
        <div className='portfolioContainer'>
            <Title name='Portfolio' />

            {worksData.map((item, i) =>
                <WorkLink key={i} name={item.name} programs={item.programs} href={item.href} />)}
        </div>
    );
}

export default Portfolio;