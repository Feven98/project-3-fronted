import { Routes, Route } from "react-router-dom"
import ProfilePage from './allcomponent/Profile'; 
// import SignUp from './components/SignUp';
import { Search } from './allcomponent/Search';
import User from '../pages/User';

const Main = () => {
  return (
    <main>
      <Routes>
      <Route path='/' element={<User />} />
        <Route path='/profile' element={ <ProfilePage /> } />
        {/* <Route path='/testing' element={<SignUp />} /> */}
        <Route path='/search/:id' element={<Search />} />
      </Routes>
    </main>
  )
}

export default Main
