
import { useContext } from 'react'
import Section from './Componts/Section';
import Section1 from './Componts/Section1';
import Section2 from './Componts/Section2';
import { themeContext } from './Context'
import Navbar from './Navbar';
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div
      className=""
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',
      }}

    >


      <Navbar/>
      <Section/>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default App
