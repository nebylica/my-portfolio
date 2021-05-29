import Title from "../components/Title";
import WorkLink from "../components/WorkLink";
import recipes from '../images/recipes.png';
import blackJack from '../images/blackJack.png';
import paperGame from '../images/paperGame.png';
import christmasWeb from '../images/christmasWeb.png';



function Portfolio() {

    const worksData = [
        {name: 'recipes website', programs: 'CSS, JS, React, Node.js, MongoDb', href: 'https://github.com/nebylica/recipes.git', image: recipes},
        {name: 'black jack', programs: 'HTML, CSS, JS', href: 'https://github.com/nebylica/blackJack.git', image: blackJack},
        {name: 'paper rock scissors', programs: 'HTML, CSS, JS, Node.js, Socket.io', href: 'https://github.com/nebylica/scissorsPaperRock.git', image: paperGame},
        {name: 'christmas mood', programs: 'HTML, CSS', href: 'https://github.com/nebylica/christmasMood.git', image: christmasWeb},
    ]

    return (
        <div className='portfolioContainer'>
            <Title name='Portfolio' />

            {worksData.map((item, i) =>
                <WorkLink key={i} name={item.name} programs={item.programs} href={item.href} image={item.image}/>)}
        </div>
    );
}

export default Portfolio;