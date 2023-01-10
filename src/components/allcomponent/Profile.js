import userEvent from "@testing-library/user-event"
import { useParams } from "react-router-dom"
// import Form from "./SignUp"
// import Upload from "./ImageUpload"
import { useEffect, useState } from "react"

const ProfilePage = (props) => {
const {_id} = useParams
const [user, setUser] = useState('')

const BASE_URL = `https://fev-sol-project3.herokuapp.com/user/${_id}`
const getUser = async () => {
    try {
        const response = await fetch(BASE_URL)
        // fetch grabs the data from API - (mongo)
        const allUser = await response.json()
        // assuming no errors - translate to JS 
        console.log(allUser)
        setUser(allUser)
        // store that data (from api) in react state
    } catch (err) {
        console.log(err)
    }
}

useEffect(() => {
    getUser()
  }, [])





return (
    <div className="profile">
 <div className="upperProfile" style={{ border: "1px solid black"}}>

    <div className="profilePic" style={{ border: "1px solid black"}}>
    <img className="pic" src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" /> 
    </div>
    <h4>{user.username}</h4>
 
    <h3>Total Posts:</h3>

    <h3>Total Likes:</h3>
</div>
<div className="divider" style={{ border: "1px solid black", backgroundColor: 'cornflowerblue'}}></div>
<div className="post" style={{ border: "1px solid black"}}> 

</div>
<h1>WORKING!!!!!</h1>
{/* <Upload /> */}
    </div>
)



}


export default ProfilePage