import { Routes, Route } from "react-router-dom"

import Home from '../pages/Home';
// import Home from "../pages/Login";
import Auth from "../pages/Auth";
// import Show from "../pages/Show";
// import Edit from "../pages/Edit";
import EditImage from "../pages/EditImage";
import ProfilePage from "./allcomponent/Profile";
import Showimage from "../pages/ShowImage";
import Comment from "../pages/CommentPost";
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        {/* <Route path='/user' element={<User />} /> */}
        <Route path='/post/:id' element={<Showimage />} />
        <Route path='/post/:id/edit' element={<EditImage/>}/>
        <Route path='/profile/:id' element={<ProfilePage/>}/>
        <Route path='/comment' element={<Comment />} />
      </Routes>
    </main>
  )
}

export default Main
