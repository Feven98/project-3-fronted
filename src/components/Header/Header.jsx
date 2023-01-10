import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        // <header style={{height: "400px", overflow: 'hidden'}}>
        <header>
            <nav className="nav">
                <Link to='/'>
                    <img className='logo' src="https://cdn-icons-png.flaticon.com/512/1/1394.png" />
                </Link>
                <Link to='/profile'>
                    <img className='profileHeader'
                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    />
                </Link>
            </nav>
        </header>
    )
}


export default Header