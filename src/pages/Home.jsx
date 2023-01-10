import {Link} from 'react-router-dom'

function Home(props){
    return (<section>
        <h2>Welcome to Instagram App</h2>
        <p>Sign in to connect with People</p>

				{/* Additional branding & content can go here... */}

        <Link to="/auth">CONNECT</Link>
        
        {/* {" | "} */}
        
        {/* <Link to="/user">Instagram Index</Link> */}
    </section>)
}

export default Home