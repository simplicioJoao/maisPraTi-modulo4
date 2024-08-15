import {Navigate} from 'react-router-dom'

function ProtectedRout({isLoggedIn, children}) {
    if(!isLoggedIn)
        return <Navigate to='/login'/>
    return children
}

export default ProtectedRout