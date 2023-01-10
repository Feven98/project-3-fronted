import { useParams } from "react-router-dom"
// import Form from "./SignUp"

const Post = (props) => {
    const { id } = useParams

    return (
        <div className="profile">
            <div className="upperProfile" style={{ border: "1px solid black" }}>

                <div className="profilePic" style={{ border: "1px solid black" }}>
                    <img className="pic" src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" />
                </div>
                <h4>{props.name}</h4>

                <h3>Total Posts:</h3>

                <h3>Total Likes:</h3>
            </div>
            <div className="divider" style={{ border: "1px solid black", backgroundColor: 'cornflowerblue' }}>

            </div>
            <h1>WORKING!!!!!</h1>

        </div>
    )


}
export default Post