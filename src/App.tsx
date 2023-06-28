import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h3>
          Ivan Reis - FullStack Developer <br />
          #VCV <br/>
          1º Projeto Publicado no GitHubPages !!! <br/>
          Ao infinito e além !!!
        </h3>
      </div>
      <h4>
      Eu já tenho vários projetos no GitHub.<br/>
      Em Python, PHP e JS.<br/>
      Mas essa é a primeira vez que eu consigo colocar<br/>
      um projeto Vite-React escrito em TypeScript no GitHub Pages.
      </h4>
      <p>Até que em fim. 27/06/2023</p>
    </>
  )
}

export default App
