import { useParams } from "react-router-dom"
import Upload from './imageUpload'

const ProfilePage = (props) => {
    const { id } = useParams

    return (
        <div className="profile">
            <div className="upperProfile" style={{ border: "1px solid black" }}>

                <div className="profilePic" style={{ border: "1px solid black" }}>
                    <img className="pic" src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" />
                </div>
                <h3>Total Posts:</h3>
                <h3>Total Likes:</h3>
            </div>
            <div className="divider" style={{ border: "1px solid black", backgroundColor: 'cornflowerblue' }}></div>
            <div className="post" style={{ border: "1px solid black" }}>

            </div>
            <h1>WORKING!!!!!</h1>
            <Upload />
        </div>
    )



}
export default ProfilePage