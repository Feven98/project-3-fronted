import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Showimage() {
    const { id } = useParams()
    const URL = `https://fev-sol-project3.herokuapp.com/post/${id}`
    const [image, setImage] = useState({
        image: "",
        caption: ""
    })
    const comment_URL = `https://fev-sol-project3.herokuapp.com/comment`
    const [allComments, setAllComments] = useState([])

    console.log({ id })
    const getComments = async () => {
        const commentResponse = await fetch(comment_URL)
        const commentResult = await commentResponse.json()
        // console.log(result)
        setAllComments(commentResult);
        // console.log(allComments)
        // console.log(allComments)
    }

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
    async function filterComment() {
        {
            allComments.filter(comment => comment.post = { id }).map(filteredComment => (
                <div className="commentContainer" style={{ border: '1px solid black' }}>
                    {filteredComment.comment}
                </div>
            ))
        }
    }
    useEffect(() => {
        getImage();
        getComments()
    }, [])
    //     function filterLoop(){
    //    console.log(allComments)
    //     for (let x=0; x < allComments.length + 1; x++){
    //         console.log(allComments)
    //         console.log(allComments[x].post)
    //         if (allComments[x].post === {id}){
    //             filteredComments.push(allComments[x])
    //         }
    //     }
    //     console.log({id})
    //     console.log(filteredComments)
    //     }

let stringifyID = JSON.stringify({id}.id)
// this is my source for getting rid of quotation marks in my post
 stringifyID = stringifyID.replace(/"([^"]+(?="))"/g, '$1')
// stringifyID = stringifyID.slice(1,-1)
// .slice(JSON.stringify({id}.length - 1), 1)

console.log(stringifyID)

// console.log(typeof stringifyID).
// console.log(typeof allComments[21].post)
    const filteredComments = []
    // console.log(allComments[21].post)
    console.log(allComments)
    // console.log(allComments[21].post)
    return ( 
        <div className="previewContainer" style={{ border: '5px solid black' }}>
            <img style={{ border: '5px solid black' }} className="previewImage" src={image.image} />
            <div className="captionContainer" style={{ border: '5px solid black' }}>
                <h3>{image.caption}</h3>
            </div>
            <div className="commentFilter">
                {allComments.filter(comment => comment.post === stringifyID).map(filteredComment => (

                    <div style={{ border: '1px solid black' }}>
                        {filteredComment.comment}
                    </div>
                ))}
                {/* {filteredComments.map(comments => (
                    <div style={{ border: '1px solid black' }}>
                        {comments}
                    </div>
                ))} */}
                {/* {allComments.map(mapComment => (
               { if (mapComment.post.id === {id})   }
                <p>{comments.comment}</p>
            ))} */}
            </div>
        </div>
    )

}