
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section>
            <h2>
                404  Error
            </h2>
            <p>page not found</p>
            <Link to={'/gardenmenu'}> back to qr menu</Link>
        </section>
    )
}

export default Error