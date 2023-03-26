import { createContext, useContext, useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom"

const UserContext = createContext();




export const AuthContextProvider = ({children}) => {
    // declare all method for app
    const [userId, setUserId] = useState('')
    const [data, setData] = useState([])

    const navigate = useNavigate()

    

    const createUser = (username, emailaddress, password) => {
        let formData = {
            "username": username,
            "password": password,
            "email": emailaddress
          }
        fetch('https://levy-projets-api.onrender.com/signup',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })
          .then((res)=> res.json())
          .then((data)=>{
            setUserId(data.id)
            navigate('/')
          })
    }


      const signIn = (username, password) => {
        let formData = {
            "username": username,
            "password": password
          }
        fetch('https://levy-projets-api.onrender.com/login',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })
          .then((res)=> res.json())
          .then((data)=>{
            setUserId(data.id)
            navigate('/')
                        
          })
      }

   

    const logout = () => {
      fetch('https://levy-projets-api.onrender.com/logout')
      .then((res)=>res.json())
      .then((data)=>{
        setUserId([])
          navigate('/login')
      })
    }

    const updateProject = (id) => {
          navigate(`/project/${id}`)
    }
    



    return(
        <UserContext.Provider value={{userId,data, updateProject,setData, signIn, logout, createUser}}>

            {children}

        </UserContext.Provider>
    )

}
export const UserAuth = () =>{
    return useContext(UserContext)
}