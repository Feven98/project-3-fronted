import { useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import '../components/App/App.css';
import DeleteImage from "./DeleteImage";
export default function EditImage(){

const navigate = useNavigate()

const {id} = useParams()

    const BASE_URL=`https://fev-sol-project3.herokuapp.com/post/${id}`

    const [form, setForm] = useState({
        image: "",
        comment: "",
    })
    const handleSubmit = async (e) => {
        // 0. prevent default (event object method)
        e.preventDefault()
        // 1. capturing our local state
        const currentState = { ...form }
        console.log(currentState)
        // check any fields for property data types / truthy value (function call - stretch)
        try {
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(currentState)
            }
            const response = await fetch(BASE_URL, requestOptions)

            const updatedimage = await response.json()
            console.log(updatedimage)
            navigate(`/post/${id}`)
        } catch (err) {
            console.log(err)
        }
    }
    
    const handleChange = (e) => {
        // console.log(editForm)
        const userInput = { ...form }
        userInput[e.target.name] = e.target.value
        setForm(userInput)
        console.log(form)
    }
//create a form, form should accept changes for the image

return (
    <>
        <h1>Edit</h1>
        <form onSubmit={handleSubmit}>
            <br />
            <label htmlFor="Image">Image: </label>
            <input
                id="image"
                name="image"
                // value={input.password}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="Caption">Edit Caption: </label>
            <input
                id="caption"
                name="caption"
                // value={input.password}
                onChange={handleChange}
            />
            <br />
            <input type="submit" value="Confirm Edit" />

        </form>
        <img src={form.image} />
        <DeleteImage />
    </>
)

}