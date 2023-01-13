import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Comment from "./CommentPost";

export default function ShowComment(){
    const [user, setUser] = useState([])
    const [comment, setComment] = useState({
        comment: "",
    })

    const { id } = useParams()
    const BASE_URL = `https://fev-sol-project3.herokuapp.com/comment`

    const getComment = async (e) => {
        try {
            const response = await fetch(BASE_URL)
            const foundComment = await response.json()
            setComment(foundComment)
            console.log(foundComment)
            console.log(comment.comment)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
       
      
        const currentState = {...comment }
        console.log(currentState)
 
        try {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
               
            }
            const response = await fetch(BASE_URL, requestOptions)
            const updatedComment = await response.json()
            console.log(updatedComment)
           
        } catch (err) {
            console.log(err)
        }
    }
    const loaded = () => {
    return(
          <section className="user-list">
            {comment?.map((comment, idx) => {
              return (
                <div className='allContainer'>
                  <div className='postContainer' key={idx} style={{ border: '1px solid black' }}>
                    {/* all comment about the post should go here */}
                    {/* <Comment /> */}
                    {/* <Link key={comment._id} to={`/post/${user._id}/edit`}> */}
                      {/* <button className='EditButton'>Edit</button> */}
                      <h3 className='comment'>{comment.comment}</h3>
                    {/* </Link> */}
                  </div>
                </div>
              );
            })
            }
          </section>
        )
}

useEffect(() => {
    getComment();
    handleSubmit();
}, [])


return (
    <div>
    <h3>{comment.comment}</h3>
    </div>
)

}