import { Link } from 'react-router-dom'


export default function HomePage() {
    return (
        <div>
            <Link to={`/profile`}>
                <div>
                    <h1>PROFILE TESTING</h1>
                </div>
            </Link>
            <Link to={`/testing`}>
                FORM TEST PAGE
            </Link>
            <br></br>
            <Link to={`/form`}>
                FORM TEST PAGE 2
            </Link>
        </div>
    )

}