import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <header style={{height: "400px", overflow: 'hidden'}}>
            <nav className="nav">
                <Link to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    />
                </Link>
                <div>Instagram App</div>
            </nav>
            <img style={{width:"50%", height:"70%"}} src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg"/>
        </header>
    )
  }
  

  export default Header