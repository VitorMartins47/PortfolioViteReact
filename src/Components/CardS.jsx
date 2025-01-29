import reactlogo from '../assets/reactlogo.png'
import jslogo from '../assets/JavaScriptlogo.png'
import sqllogo from '../assets/sqllogo.png'
import '../Styles.css'

function CardS(){
    return(
        <>
        <div className="card">
            <img alt='TeamWork' className='iconeCard' src={reactlogo}></img>
            <h2>Trabalho em Equipe</h2>
            <p>
                Gosto e tenho facilidade de fazer trabalhos em grupos, me enturmo facilmente.
                 Já fiz varios projetos em time.
            </p>
        </div>

        <div className="card">
            <img alt='Criatividade' className='iconeCard' src={jslogo}></img>
            <h2>Criatividade</h2>
            <p>
                Me considero uma pessoa criativa. Já precisei usar de criatividade
                 para resolver bugs pensando fora da caixa
                
            </p>
        </div>

        <div className="card">
            <img alt='Liderança' className='iconeCard' src={sqllogo}></img>
            <h2>Gestão de Pessoas</h2>
            <p>
            Quando em liderança de uma equipe, estou sempre motivando e direcionando 
            minha equipe em busca de produtividade
            </p>
        </div>

        
        </>
    )

}

export default CardS