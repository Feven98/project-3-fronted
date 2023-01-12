import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Showimage() {
    const {id} = useParams()
    const URL=`https://fev-sol-project3.herokuapp.com/post/${id}`
    const [image, setImage] = useState({
        image: "",
        caption: ""
    })
   const getImage = async (e) => {
        try {
            const response = await fetch(URL)
            const result = await response.json()
            // console.log(result)
            setImage(result)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => { getImage() })
    return (
        <div className="previewContainer" style={{border: '5px solid black'}}>
            <img style={{border: '5px solid black'}}className="previewImage" src={image.image}/>
            <div className="captionContainer" style={{border:'5px solid black'}}>
            <h3>{image.caption}</h3>
            </div>
        </div>
    )
 
    }