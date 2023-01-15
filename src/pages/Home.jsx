import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUserToken } from '../utils/authToken'
import { useNavigate } from 'react-router-dom'
import '../components/App/App.css'
import Comment from "../pages/CommentPost";

const Home = (props) => {

  // console.log(err)

  const navigate = useNavigate();

  const [user, setUser] = useState([])
  const [comment, setComment] = useState([])
  // state to hold formData
  const [newForm, setNewForm] = useState({
    // username: "",
    image: "",
    comment: "",
  })

  // const BASE_URL = "http://localhost:3001"
  const BASE_URL = `https://fev-sol-project3.herokuapp.com/post`
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
  // comment fetch
  const URL = `https://fev-sol-project3.herokuapp.com/comment`
  const getComment = async () => {
    try {
      const response = await fetch(URL)
      // fetch grabs the data from API - (mongo)
      const allComment = await response.json()
      // assuming no errors - translate to JS 
      console.log(allComment)
      setComment(allComment)
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
        },
        body: JSON.stringify(currentUser)
      }
      console.log(JSON.stringify(currentUser))
      // const response = await fetch(BASE_URL, requestOptions)
      const response = await fetch(BASE_URL, requestOptions)
      const createPost = await response.json()
      setUser([...user, createPost])
      setNewForm({
        image: "",
        comment: "",
      })
    } catch (err) {
      console.log(err)
    }
  }

  console.log(user)
  const loaded = () => {
    return (<>
      <section className="user-list">
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}  >
          <div className='imagePost'>
            <label htmlFor='image' className='imageLabel'>
              Image
              <input
                type="pic"
                value={newForm.image}
                name="image"
                placeholder="(image URL)"
                onChange={handleChange}
                className='imageInput'
              />
            </label>
          </div>
          <div className='commentPost'>
            <label htmlFor='comment' className='commentLabel'>
              caption
              <input
                type="comment"
                value={newForm.comment}
                name="comment"
                placeholder="caption"
                onChange={handleChange}
                className='commentInput'
              />
            </label>
            <br />
          </div>
          <div className='submitButton'>
            <input type="Submit" value="Create Post" onChange={handleChange}
            className='createPost'
            />
            </div>
        </form>
      </section>
      <section className="user-list">
        {user?.map((user, idx) => {
          return (
            <div className='allContainer'>
              <div className='postContainer' key={idx} style={{ border: '1px solid black' }}>
                {/* <div key={{idx}} */}
                <Link key={user._id} to={`/post/${user._id}`}>
                  <img src={user.image} className='homeImage' />
                  <div className='captionDiv' >
                  <h3 className='caption'>{user.caption}</h3>
                  </div>
                </Link>
                {/* all comment about the post should go here */}
                <Comment postID = {user._id}/>
                <Link key={user._id} to={`/post/${user._id}/edit`}>
                  <button className='EditButton'>Edit</button>
                  <h3 className='comment'>{comment.comment}</h3>
                </Link>
              </div>
            </div>
          );
        })
        }
      </section>
    </>
    )
  }
  useEffect(() => {
    getUser()
    getComment()
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



export default Home