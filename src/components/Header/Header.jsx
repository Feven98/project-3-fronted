import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        // <header style={{height: "400px", overflow: 'hidden'}}>
        <header>
            <nav className="nav">
                <Link to='/'>
                    <img className='logo' src="https://cdn-icons-png.flaticon.com/512/1/1394.png" />
                </Link>
                <Link to="/user/:id">
                    <img className='profileHeader'
                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    />
                </Link>
            </nav>
            <img style={{ width: "90%" }} src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg" />
        </header>
    )
}


export default Header