import { useState, createContext, useContext } from "react"

const PreferencesContext = createContext()

function App() {
  const [preferences, setPreferences] = useState({theme: 'light', language: 'EN'})

  const toggleTheme = () => {
    setPreferences(currentPreferences => ({
        ...currentPreferences,
        theme: currentPreferences.theme === 'light' ? 'dark' : 'light'}))
  }

  const changeLanguage = (language) => {
    setPreferences(currentPreferences => ({
        ...currentPreferences,
        language: language
    }))
  }
  
  return (
    <>
      <PreferencesContext.Provider value={{preferences, toggleTheme, changeLanguage}}>
        <div>
          <Toolbar/>
          <button onClick={toggleTheme}>Trocar tema</button>
          <button onClick={() => changeLanguage('PT-BR')}>PT-BR</button>
          <button onClick={() => changeLanguage('EN')}>EN</button>
        </div>
      </PreferencesContext.Provider>
    </>
  )
}

function Toolbar() {
  const {preferences} = useContext(PreferencesContext)
  return (
    <div>
      <p>Tema - {preferences.theme}</p>
      <p>Idioma - {preferences.language}</p>
    </div>
  )
}

export default App
