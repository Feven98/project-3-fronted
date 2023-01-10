import { useState, useEffect } from 'react'
import { Link, useParams, navigate, useNavigate } from 'react-router-dom'
import { getUserToken } from '../utils/authToken'

// const placeholderImage = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"

const Comment = (props) => {
    // define our state variable - []
    // react state
    const token = getUserToken()
    const [person, setPerson] = useState(null)
    const [comment, setComment] = useState({
        comment: "",
        like: "",
    })

    const { id } = useParams()
    const BASE_URL = `https://fev-sol-project3.herokuapp.com/user/${id}`
    const navigate = useNavigate()

    if(!token){
      navigate('/auth')
    }

    const getPerson = async () => {
        try {
            const response = await fetch(BASE_URL)
            const foundPerson = await response.json()
            setPerson(foundPerson)
            setComment(foundPerson)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        // console.log(editForm)
        const userInput = { ...editForm }
        userInput[e.target.name] = e.target.value
        setComment(userInput)
    }

    const handleSubmit = async (e) => {
        // 0. prevent default (event object method)
        e.preventDefault()
        // 1. capturing our local state
        const currentState = { ...person, ...editForm }
        console.log(currentState)
        // check any fields for property data types / truthy value (function call - stretch)
        try {
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(currentState)
            }
            // 2. specify request method , headers, Content-Type
            // 3. make fetch to BE - sending data (requestOptions)

            // 3a fetch sends the data to API - (mongo)
            const response = await fetch(BASE_URL, requestOptions)
            // 4. check our response - 
            // 5. parse the data from the response into JS (from JSON) 
            const updatedPerson = await response.json()
            console.log(updatedPerson)
            // update local state with response (json from be)
            navigate(`/user/${id}`)
        } catch (err) {
            console.log(err)
        }
    }

    const loaded = () => {
        return (<>
            <section>
                <div className="person-card">
                    {/* React optimization / difference */}
                    <h1>{person.username}</h1>
                    <img src={person.image || placeholderImage} />
                    <h3>{person.caption || "Not caption given"}</h3>
                </div>
                <Link to={`/user/${id}`}>Back to {person.name}</Link>
            </section>

        </>
        )
    }

    const loading = () => (
        <section className="people-list">
            <h1>
                Loading...
                <span>
                    {" "}
                    <img
                        className="spinner"
                        src="https://freesvg.org/img/1544764567.png"
                    />
                </span>
            </h1>
        </section>
    );

    useEffect(() => {
        getPerson()
    }, [])
    // useEffect takes two arguments -> runs function upon component mount
    // react mount -> 
    return (
        <div>
            <section>
                <h2>Create a new comment</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>
                            Comment
                            <input
                                type="text"
                                id="comment"
                                name="comment"
                                placeholder="enter a comment"
                                value={editForm.comment}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor='image'>
                            Like
                            <input
                                type="text"
                                id="image"
                                name="image"
                                placeholder="like"
                                value={editForm.like}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <br />
                        <input type="submit" value="Comment" />
                    </div>
                </form>
            </section>
            {person  ? loaded() : loading()}
        </div >
    )

}

export default Comment