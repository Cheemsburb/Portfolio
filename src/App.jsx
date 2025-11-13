import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center px-6 py-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Gladwyn Sencil</h1>
        <p className="text-lg text-gray-300">
          I'm a 3rd year Computer Science student at the University of Cabuyao 🎓
        </p>
      </header>

      {/* Skills Section */}
      <section className="w-full max-w-2xl mb-12">
        <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">🧠 Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {['React', 'Express', 'Java'].map(skill => (
            <li
              key={skill}
              className="bg-gray-800 rounded-xl text-center py-2 hover:bg-gray-700 transition-all duration-200 shadow-md"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-2xl">
        <h3 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">🚀 Projects</h3>
        <ul className="space-y-4">
          <li>
            <a
              href="https://artisinalavenue.netlify.app"
              target="_blank"
              className="block bg-gray-800 p-4 rounded-xl hover:bg-gray-700 shadow-md transition-all duration-200"
            >
              💎 <span className="font-semibold">Simple Traditional Filipino Jewelry Ecommerce</span>
            </a>
          </li>
          <li>
            <a
              href="https://tryawa.netlify.app"
              target="_blank"
              className="block bg-gray-800 p-4 rounded-xl hover:bg-gray-700 shadow-md transition-all duration-200"
            >
              🌦️ <span className="font-semibold">Weather App</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Cheemsburb/ASL-Translator-Project"
              target="_blank"
              className="block bg-gray-800 p-4 rounded-xl hover:bg-gray-700 shadow-md transition-all duration-200"
            >
              🤟 <span className="font-semibold">4 Class Sign Language Translator</span>
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm">
        Built with <img src={viteLogo} alt="Vite" className="inline h-4 mx-1" /> +{' '}
        <img src={reactLogo} alt="React" className="inline h-4 mx-1 animate-spin-slow" /> 
      </footer>
    </div>
  )
}

export default App
