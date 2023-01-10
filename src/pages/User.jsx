import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUserToken } from '../utils/authToken'
import { useNavigate } from 'react-router-dom'
import './User.css'
const User = (props) => {

  const token = getUserToken()
  // console.log(err)

  const navigate = useNavigate();

    const [user, setUser] = useState([])

    // state to hold formData
    const [newForm, setNewForm] = useState({
        username: "",
        caption: "",
        image: "",
    })
 
    // const BASE_URL = "http://localhost:3001"
    const BASE_URL = "https://fev-sol-project3.herokuapp.com"
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
  

  // handleChange function for form
  const handleChange = (e) => {
    console.log(newForm)
    const userInput = { ...newForm }
    // console.log(e.target.username)
    userInput[e.target.name] = e.target.value
    setNewForm(userInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const currentUser = { ...newForm }
    try {
      const requestOptions = {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(currentUser)
      }
      console.log(JSON.stringify(currentUser))
      // const response = await fetch(BASE_URL, requestOptions)
      const response = await fetch(BASE_URL, requestOptions)
      const createPerson = await response.json()
      setUser([...user, createPerson])
      setNewForm({
        username: "",
        image: "",
        caption: "",
      })
    } catch (err) {
      console.log(err)
    }
  }


    const loaded = () => {
        return (<>
            <section className="user-list">
            <h2>Create Post</h2>
    <form onSubmit={handleSubmit}  >
        <label htmlFor='username'>
            Username
    <input
          type="text"
            value={newForm.username}
            name="username"
            placeholder="name"
            onChange={handleChange}
        />
        </label>
        <div>
        <label htmlFor='image'>
            Image
    <input
          type="pic"
            value={newForm.image}
            name="image"
            placeholder="image"
            onChange={handleChange}
        />
        </label>
        </div>
        <div>
        <label htmlFor='caption'>
            Caption
    <input
          type="caption"
            value={newForm.caption}
            name="caption"
            placeholder="caption"
            onChange={handleChange}
        />
        </label>
        <br/>
        <input type="Submit" value="Create Post" onChange={handleChange} 
        />
        </div>
        </form>
        </section>
        <section className="user-list">
            {user?.map((user,idx) => {
      return (
        <Link key={user._id} to={`/user/${user._id}`}>
        <div key={idx}>
        {/* <div key={{idx}} */}
          <h1>{user.username}</h1>
          <img src={user.image} />
          <h3>{user.caption}</h3>
        </div>
        </Link>
            );
    })
  }
</section>
</>
)
}
  useEffect(() => {
    getUser()
  }, [])
  

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
    <section>{user && user.length ? loaded() : loading()}</section>
  );
  }



export default User