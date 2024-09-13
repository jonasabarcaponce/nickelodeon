import './App.css'
import Cabecera from './components/Cabecera'
import Habitaciones from './components/Habitaciones'
import TodoIncluido from './components/TodoIncluido'
import Experiencias from './components/Experiencias'

function App() {
  return (
    <div className='font-montserrat'>
      <Cabecera></Cabecera>
      <Habitaciones></Habitaciones>
      <TodoIncluido></TodoIncluido>
      <Experiencias></Experiencias>
    </div>
  )
}

export default App
