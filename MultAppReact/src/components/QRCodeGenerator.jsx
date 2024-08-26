import { useState } from "react"
import styled from 'styled-components'
import QRCode from 'qrcode.react'

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

const QRContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function QRCodeGenerator() {
    const [text, setText] = useState('')

    return (
        <Container>
            <Title>QR Code Generator</Title>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
            {text && (
            <QRContainer>
                <QRCode value={text} size={256}/>
            </QRContainer>)}
        </Container>
    )
}

export default QRCodeGenerator