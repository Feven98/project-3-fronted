import { useState } from "react"


const Showimage = (props) => {

    const {id} = useParams()

    const URL=`https://fev-sol-project3.herokuapp.com/post/${id}`

    const [image, setImage] = useState({
        image: "",
        caption: ""
    })
    console.log(props)
   const getPerson = async (e) => {

        try {
            const response = await fetch(URL)
            const result = await response.json()
            console.log(result)
            setImage(result)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => { getPerson() })
    return (

        <>   
            <h1>Edit image</h1>
            <img src={image.image}/>

        </>
    )

}

export default Showimage