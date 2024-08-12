import { useState } from "react";

function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = () => {
        const newErrors = {}

        if(!formData.name) newErrors.name = "O nome é obrigatório"
        
        if(!formData.email)
            newErrors.email = "O email é obrigatório"
        else if (!/\S+@\S+\S+.\S+/.test(formData.email))
            newErrors.email = "Email inválido"

        if(!formData.password)
            newErrors.password = "A senha é obrigatória"
         else if (formData.password < 8)
            newErrors.password = "A senha precisa ter pelo menos 8 caracteres"
        
         if(!formData.confirmPassword || formData.confirmPassword !== formData.password)
            newErrors.confirmPassword = "As duas senhas devem ser iguais"

        return newErrors
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const validateErrors = validate()
        if(Object.keys(validateErrors).length === 0)
            setSubmitted(true)
        else
            setErrors(validateErrors)
    }

    return (
        <div>
            <h2>Registre-se</h2>
            {submitted && <p>Registrado com sucesso!</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <label>Confiração de senha: </label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default RegisterForm