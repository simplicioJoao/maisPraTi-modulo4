import LanguageTranslator from './components/LanguageTranslator'
import MovieSearchEngine from './components/MovieSearchEngine'
import QRCodeGenerator from './components/QRCodeGenerator'
import IPAddressFinder from './components/IPAddressFinder'
import './App.css'

function App() {

  return (
    <>
      <LanguageTranslator/>
      <MovieSearchEngine/>
      <QRCodeGenerator/>
      <IPAddressFinder/>
    </>
  )
}

export default App
