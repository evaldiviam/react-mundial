import React,{useContext} from 'react'
import UserContext from '../../context/user/UserContext';
import Navigation from './Navigation'
import { FaUser } from "react-icons/fa";

const Header = ({ item }) => {
  const userDataContext = useContext(UserContext);

  return (
    <header>
      <h1>Copa Mundial de la FIFA Catar 2022</h1>
      <Navigation item={item} />
      <div className="user-container">
        <FaUser/>
        <span className="name-user">{userDataContext.name} {userDataContext.surnames}</span>
        <span className="lang">{userDataContext.language} </span>
      </div>
    </header>
  )
}

export default Header