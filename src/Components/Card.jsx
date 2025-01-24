import reactlogo from '../assets/reactlogo.png'
import jslogo from '../assets/JavaScriptlogo.png'
import '../Styles.css'

function Card(){
    return(
        <>
        <div className="card">
            <img alt='React Logo' className='iconeCard' src={reactlogo}></img>
            <h2>React</h2>
            <p>
            React foi usado para diversos projetos menores meus, como o RickMortyApi. 
            Foi usado também para fazer este Portfólio
            </p>
        </div>

        <div className="card">
            <img alt='Java Logo' className='iconeCard' src={jslogo}></img>
            <h2>JavaScript</h2>
            <p>
            React foi usado para diversos projetos menores meus, como o RickMortyApi. 
            Foi usado também para fazer o Portfólio
            </p>
        </div>

        <div className="card">
            <img alt='React Logo' className='iconeCard' src={reactlogo}></img>
            <h2>React</h2>
            <p>
            React foi usado para diversos projetos menores meus, como o RickMortyApi. 
            Foi usado também para fazer o Portfólio
            </p>
        </div>

        
        </>
    )

}

export default Card