import { useState } from 'react'
import './App.css'
import linkedin from './assets/linkedin.png'
import git from './assets/git.png'



function App() {
  return(
  <>

    
    <div className='informações'>

      <h1 className="nome" >Vitor Havila Ferreira Martins</h1>
      <h1 className="cargo">DESENVOLVEDOR</h1>

      <div className='divIcone'>

        <a href='https://www.linkedin.com/in/vitor-havila-ferreira-martins-631673219/'>
        <img className='icone' src={linkedin}/>
        </a>

        <a href='https://github.com/VitorMartins47'>
        <img className='icone' src={git}/>
        </a>
        </div>

    </div>
    
  </>
  )
}

export default App
