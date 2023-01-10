import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './User.css'
const User = (props) => {

  const navigate = useNavigate();

    const [user, setUser] = useState([])

    // state to hold formData
    const [newForm, setNewForm] = useState({
        username: "",
        password: "",
        image: "",
    })
 
    // const BASE_URL = "http://localhost:3001"
    const BASE_URL = "https://fev-sol-project3.herokuapp.com"
    const getUser = async () => {
        try {
            const response = await fetch(`${BASE_URL}/user`)
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
    let userInput = { ...newForm }
    console.log('t name -->', e.target.name)
    userInput[e.target.name] = e.target.value
    setNewForm(userInput);
      // console.log(newForm, 'new')
  };

const handleSubmit =async(e) => {
 e.preventDefault();

    const currentPost = {...newForm}
    console.log(currentPost)
    try{
        const requestOptions = {
            method: "Post",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(currentPost)
        }

const response = await fetch(`${BASE_URL}/auth/register`, requestOptions)

const createPerson = await response.json()
setUser([...user, createPerson])
  setNewForm({
    username: "",
    image: "",
    password: "",
})
//navigate(`/profile/${user._id}`)
    }catch(err){
        console.log(err)
    }
}



    const loaded = () => {
        return (<>
            <section className="people-list">
            <h2>Create Post</h2>
    <form onSubmit={handleSubmit} >
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
        <label htmlFor='password'>
            Password
    <input
          type="password"
            value={newForm.password}
            name="password"
            placeholder="like"
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
            {user?.map((user, idx) => {
      return (
        <div key={idx}>
          <h1>{user.username}</h1>
          <img src={user.image} />
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
// const loaded = () => {
//     return user?.map((user) => {
//       return (
//         <div key={user._id}>
//           <h1>{user.username}</h1>
//           <img src={user.image} />
//           <h3>{user.liketotal}</h3>
//         </div>
//       );
//     });
//   };

  // const loading = () => (
  //   <section className="user-list">
  //     <h1>
  //       Loading...
  //       <span>
  //         <img
  //           className="picture"
  //           src="https://freesvg.org/img/1544764567.png"
  //         />{" "}
  //       </span>
  //     </h1>
  //   </section>
  // );

  return (
    <section className="user-list">{loaded()}</section>
  );
}

    


export default User