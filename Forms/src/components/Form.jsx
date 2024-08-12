import { useState } from "react";

function Form2() {
    const [address, setAdrress] = useState({
        street: '',
        city: '',
        postalCode: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setAdrress(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!address.city || !address.street || !address.postalCode)
            alert("Todos os campos devem ser preenchidos!")
        else {
            alert(`Cidade: ${address.city} - Rua: ${address.street} - CEP: ${address.postalCode}`)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name="street" onChange={handleChange}/>
            </label><br />
            <label>
                Cidade:
                <input type="text" name="city" onChange={handleChange}/>
            </label><br />
            <label>
                CEP:
                <input type="text" name="postalCode" onChange={handleChange}/>
            </label><br />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form2