import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Gladwyn Sencil</h1>
        <p>I'm a 3rd year Computer Science student at the <strong>University of Cabuyao</strong></p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m passionate about building web applications and learning new technologies. 
          I enjoy creating projects that blend creativity and functionality, while exploring modern development tools.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Express</li>
          <li>Java</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Git</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li><a href="https://artisinalavenue.netlify.app" target="_blank"> Traditional Jewelry Ecommerce</a></li>
          <li><a href="https://tryawa.netlify.app" target="_blank"> Weather App</a></li>
          <li><a href="https://github.com/Cheemsburb/ASL-Translator-Project" target="_blank"> ASL Translator</a></li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:gladwyn@example.com">sencilgladwyn@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Cheemsburb" target="_blank">Cheemsburb</a></p>
      </section>

      <footer>
        <p>
          Built with <img src={viteLogo} alt="Vite" className="logo" /> + 
          <img src={reactLogo} alt="React" className="logo" /> by Gladwyn
        </p>
      </footer>
    </div>
  )
}

export default App
