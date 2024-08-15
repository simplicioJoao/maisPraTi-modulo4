import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Manhã</Link></li>
                <li><Link to='/Afternoon'>Tarde</Link></li>
                <li><Link to='/Night'>Noite</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation