import { useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import '../components/App/App.css';

export default function DeleteImage(){

const navigate = useNavigate()

const {id} = useParams()

    const BASE_URL=`https://fev-sol-project3.herokuapp.com/post/${id}`

    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            const requestOptions = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const response = await fetch(BASE_URL, requestOptions)

            const updatedimage = await response.json()
            console.log(updatedimage)
            navigate(`/`)
        } catch (err) {
            console.log(err)
        }
    }

//create a form, form should accept changes for the image

return (
    <>
        <h1>Delete</h1>
        {/* <form onSubmit={handleDelete}>
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
            <br /> */}
            {/* <input type="submit" value="DELETE POST" /> */}
            <button onClick={handleDelete}>DELETE POST</button>

        {/* </form> */}
        {/* <img src={form.image} /> */}

    </>
)

}