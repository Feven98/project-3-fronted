import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



export default function ShowComment(){

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
            console.log(comment)
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

useEffect(() => {
    getComment();
    handleSubmit();
}, [])


return (
    <div>
    {/* <h3>{comment[0].comment}</h3> */}
    </div>
)

}