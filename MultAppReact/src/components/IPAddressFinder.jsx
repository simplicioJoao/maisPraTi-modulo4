import { useState } from "react"
import axios from "axios"
import styled from "styled-components"

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
const ResultsContainer = styled.div`
    text-align: center;
`

function IPAddressFinder() {
    const [ip, setIp] = useState('')
    const [ipData, setIpData] = useState(null)
    
    const findIP = async () => {
        try {
            const url = `https://ipinfo.io/${ip}/json`
            const response = await axios.get(url)
            setIpData(response.data)
        } catch (error) {
            console.error("Erro ", error)
        }
    }

    return (
        <Container>
            <Title>IP Address Finder</Title>
            <input type="text" value={ip} onChange={(event) => setIp(event.target.value)} placeholder="Enter IP address"/>
            <button onClick={findIP}>Find IP</button>
            {ipData && (
            <ResultsContainer>
                <p><strong>IP:</strong> {ipData.ip}</p>
                <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
                <p><strong>ISP:</strong> {ipData.org}</p>
            </ResultsContainer>)}
        </Container>
    )
}

export default IPAddressFinder