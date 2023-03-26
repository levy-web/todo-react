import React, {useEffect, useState} from "react"
import {  useNavigate, Link } from "react-router-dom"
import {UserAuth} from '../context/AuthContext'

function TodoItems({due,status, title, description, id}){
    const navigate = useNavigate()
    const {updateTask} = UserAuth()


    function handleUpdateProject(){      
        updateTask(id)
    }


    return (
           
    <div className="card bg-light m-1"> 
        <div onClick={handleUpdateProject} className="card-body">
            <small className="text-muted mb-1">{`Due: ${due}`}</small>
            <h5 className="card-title mt-1">{title}</h5>
            <p className="card-text">{description}</p>
            <small className="text-muted me-5">{`status: ${status}`}</small>

        </div>
    </div>
        

    )

}

export default TodoItems