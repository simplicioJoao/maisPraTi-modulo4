import { useState } from "react";
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: #333;
    text-align: center;
`

const TranslatedText = styled.p`
    color: #555;
    border-radius: 18px;
    text-align: center;
`

function LanguageTranslator() {
    const [text, setText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [sourceLang, setSourceLang] = useState('')
    const [targetLang, setTargetLang] = useState('')

    const translateText = async () => {
        try {
            // esta api não é muito boa, trocar ela por outra
            const response = await axios.get('https://api.mymemory.translated.net/get', { 
                params: {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`
                }
            })

            setTranslatedText(response.data.responseData.translatedText)
        } catch (error) {
            console.error("Erro ao traduzir o texto", error)
        }
    }

    return (
        <Container>
            <Title>Language Translator</Title>
            <div>
                <label>Source Language</label>
                <select value={sourceLang} onChange={(event) => setSourceLang(event.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="pt">Portuguese</option>
                </select>
            </div>
            <div>
                <label>Target Language</label>
                <select value={targetLang} onChange={(event) => setTargetLang(event.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="pt">Portuguese</option>
                </select>
            </div>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Escreva o que quer traduzir"/>
            <button onClick={translateText}>Translate</button>

            {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
        </Container>
    )
}

export default LanguageTranslator