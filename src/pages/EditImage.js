import { useState } from "react"


export default function EditImage(){

    const [form, setForm] = useState({
        image: "",
        comment: "",
    })

    const handleChange = (e) => {
        // console.log(editForm)
        const userInput = { ...editForm }
        userInput[e.target.name] = e.target.value
        setForm(userInput)
    }
//create a form, form should accept changes for the image

return (
    <>
        <h1>Register</h1>
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
            <input type="submit" value="Sign Up" />
        </form>
    </>
)

}