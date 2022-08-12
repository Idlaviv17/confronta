import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <div>
            <h1>Oops!</h1>
            <p>Página no encontrada</p>
            <div>
                <Link to="/">Volver a la página principal</Link>
            </div>
        </div>
    )
}

export default Missing