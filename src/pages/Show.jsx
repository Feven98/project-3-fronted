import { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getUserToken } from '../utils/authToken'
import { UserContext } from '../data'


const placeholderImage = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"

const Show = (props) => {
    // local state (Show)
    const [person, setPerson] = useState(null)
    const [loading, setLoading] = useState(true)

    const token = getUserToken()
    // access information about the current url path for browser
    const { id } = useParams()
    const navigate = useNavigate()

    // context data 
    const { currentUser } = useContext(UserContext)


    // define some local variables
    const URL = `https://fev-sol-project3.herokuapp.com/user/${id}`

    const getPerson = async () => {
        try {
            const response = await fetch(URL)
            const result = await response.json()
            console.log(result)
            setPerson(result)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    // make a fetch 

    const removePerson = async (e) => {
        try {

            // configure our delete request
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await fetch(URL, options)
            console.log(response)
            // check response status (<400){ parse the data }
            const deletedPerson = await response.json()

            // make a fetch (delete)
            console.log(deletedPerson)
            // await response / parse response 
            // navigate() -> change the current page the browser is at / client side redirect
            navigate("/")
        } catch (err) {
            console.log(err)
            // stretch - populate an error on your page - when a delete fails
            // populate some state (3 seconds)
            // redirect to a 404 page (client)
        }
    }

    const isOwner = currentUser?._id === person?.owner?._id

    const isLoading = () => (<h2>....Loading</h2>)
    
    const loaded = () => (
        <>
            <div className="person-card">
                {/* React optimization / difference */}
                <h1>{person.username}</h1>
                <h2>{person.comment}</h2>
                {token && isOwner ? <div>
                    <p>Delete Person</p>
                    <button onClick={removePerson}> X </button>
                </div> : null}

                <img src={person.image || placeholderImage} />
                <h3>{person.caption || "Not caption given"}</h3>
            </div>
            <div>
                <Link to="/">Back to Home</Link> {"|"} 
            { 
            isOwner 
            && 
            <Link to={`/user/${person._id}/edit`}>Edit {person.username}</Link>
            }
            </div>
        </>
    )

    useEffect(() => { getPerson() }, [id, loading])
    // confirm + render JSX +++
    // console.log(`current person: ${person?._id || "no person"}`)
    return (
        <section className="ShowContainer">

            {loading ? isLoading() : loaded()}

        </section>)
}

export default Show