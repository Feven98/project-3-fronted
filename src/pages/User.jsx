import { useState, useEffect } from 'react'

const User = (props) => {
    const [user, setUser] = useState([])
    const BASE_URL = "http://localhost:4000/user"
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
},[])


    return <div><h1>User</h1></div>
}

export default User