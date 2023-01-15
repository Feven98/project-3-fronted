import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import ShowComment from './CommentShow'


// const placeholderImage = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"

export default function Comment(props) {
    // define our state variable - []
    // react state
    // const token = getUserToken()
    // const [person, setPerson] = useState(null)
    const [comment, setComment] = useState({
        comment: "",
    })

    const { id } = useParams()
    const BASE_URL = `https://fev-sol-project3.herokuapp.com/comment`
    const navigate = useNavigate()

    const getPerson = async () => {
        try {
            const response = await fetch(BASE_URL)
            const foundUser = await response.json()
            // setPerson(foundPerson)
            setComment(foundUser)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        // console.log(editForm)
        const userInput = { ...comment }
        userInput[e.target.name] = e.target.value
        setComment(userInput)
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        const currentState = { ...comment, post: props.postID }
        console.log(currentState)

        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(currentState)
            }
            const response = await fetch(BASE_URL, requestOptions)
            const updatedComment = await response.json()
            console.log(updatedComment)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPerson()
    }, [])


    return (
        <div className='comment-container'>
            <div className="comment-card" style={{ border: '1px solid black' }}>
                {/* React optimization / difference */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>
                            
                            <input
                                type="text"
                                id="comment"
                                name="comment"
                                placeholder="enter a comment"
                                value={comment.comment}
                                onChange={handleChange}
                                className='commentPostInput'
                            />
                        </label>
                    </div>
                    <input className='commentPostbutton' type="submit" value="Comment" />
        </form>
    </div>
</div>
)
}