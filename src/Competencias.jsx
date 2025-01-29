import './Styles.css'
import CardH from './Components/CardH.jsx'
import CardS from './Components/CardS.jsx'

function Competencias(){
    return(

        <>

        <div>

            <h1 className="competencia">HARD SKILLS</h1>
            <CardH/>
        
        </div>

        <div>
            <h1 className='competencia'>SOFT SKILLS</h1>
            <CardS/>

        </div>

        </>

    )


}

export default Competencias