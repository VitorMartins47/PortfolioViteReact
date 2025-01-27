import reactlogo from '../assets/reactlogo.png'
import jslogo from '../assets/JavaScriptlogo.png'
import sqllogo from '../assets/sqllogo.png'
import '../Styles.css'

function CardS(){
    return(
        <>
        <div className="card">
            <img alt='React Logo' className='iconeCard' src={reactlogo}></img>
            <h2>Trabalho em Equipe</h2>
            <p>
                Gosto e tenho facilidade de fazer trabalhos em grupos, me enturmo facilmente.
                Já realizei varios projetos em time.
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

export default CardS