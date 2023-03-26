import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom"
import {UserAuth} from '../context/AuthContext'

function Nav(){
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const {userId} = UserAuth()

 
  



  const { logout} = UserAuth()

  const logoutUser = async(e) =>{
    setError("")
    try{
        await logout()

      }catch(error){
        setError(error.message);
      }
    }


    
  return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand text-danger ms-2">Home</Link>

            <ul className="navbar-nav ms-auto">
            <Link to={"/login"} className="navbar-brand text-danger ms-2">Login</Link>
            <Link to={"/signup"} className="navbar-brand text-danger ms-2">Signup</Link>
            <p onClick={logoutUser} className="nav-item text-success nav-link">Logout</p>
            </ul>
        </nav>
      </div>
    )
  }
export default Nav;