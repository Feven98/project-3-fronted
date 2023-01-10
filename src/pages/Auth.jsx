import { getUserToken,setUserToken, clearUserToken } from "../utils/authToken"
import { UserContext } from "../data"
import { useContext } from "react"


function Auth(props){

    const {setAuth, setUser} = useContext(UserContext)
    // console.log(setAuth, setUser)

    const registerUser = async (data) => {
        try {
    
            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
    
            const newUser = await fetch(
                "http://localhost:4000/auth/register",
                configs
            )
    
            const parsedUser = await newUser.json()
            // console.log(parsedUser)
    
            // sets local storage
            setUserToken(parsedUser.token)
            // put the returned user object in state
            setUser(parsedUser.user)
            // adds a boolean cast of the responses isAuthenticated prop
            setAuth(parsedUser.isLoggedIn)
    
            // alternative (safer) implementation would be to use jwt decode library - <https://www.npmjs.com/package/jwt-decode>
            // this would also require reconfiguring our backend so we only send tokens with a signup
    
            return parsedUser
        } catch (err) {
            console.log(err)
            clearUserToken();
            setAuth(false);
        }
    }

    return (<h1>Login / Register Container</h1>)
}

export default Auth