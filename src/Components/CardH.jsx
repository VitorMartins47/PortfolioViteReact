import reactlogo from '../assets/reactlogo.png'
import jslogo from '../assets/JavaScriptlogo.png'
import sqllogo from '../assets/sqllogo.png'
import '../Styles.css'

function CardH(){
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
                Principal linguagem de programação dos meus projetos. Já fiz jogos, sites, aplicativos.
                Tenho muita afinidade com JS
                
            </p>
        </div>

        <div className="card">
            <img alt='Sql Logo' className='iconeCard' src={sqllogo}></img>
            <h2>SQL</h2>
            <p>
            Principal banco de dados usado em meus projetos, por exemplo CrudNode. Sempre que preciso
            usar banco, uso MySql
            </p>
        </div>

        
        </>
    )

}

export default CardH