import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './User.css'
const User = (props) => {
    const [user, setUser] = useState([])
// state to hold formData
const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    title: "",
});

    const BASE_URL = "https://fev-sol-project3.herokuapp.com/user"
    const getUser = async () => {
        try {
            const response = await fetch(BASE_URL)
            // fetch grabs the data from API - (mongo)
            const allUser = await response.json()
            // assuming no errors - translate to JS 
            console.log(allUser)
            setUser(allUser)
            // store that data (from api) in react state
        } catch (err) {
            console.log(err)
        }
    }


useEffect(() => {
getUser()
},[])
// return (
//     <div>
//         <Link to={`/profile`}>
//             <div>
//                 <h1>PROFILE TESTING</h1>
//             </div>
//         </Link>
//         <Link to={`/user`}>
//             FORM TEST PAGE
//         </Link>
//         <br></br>
//         <Link to={`/post`}>
//             FORM TEST PAGE 2
//         </Link>
//     </div>
// )
const loaded = () => {
    return user?.map((user) => {
      return (
        <div key={user._id}>
          <h1>{user.username}</h1>
          <img src={user.image} />
          <h3>{user.liketotal}</h3>
        </div>
      );
    });
  };

  const loading = () => (
    <section className="user-list">
      <h1>
        Loading...
        <span>
          <img
            className="picture"
            src="https://freesvg.org/img/1544764567.png"
          />{" "}
        </span>
      </h1>
    </section>
  );

  return (
    <section className="user-list">{user && user.length ? loaded() : loading()}</section>
  );
}

    


export default User