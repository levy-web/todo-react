import React, {useEffect, useState} from "react"
import {  useNavigate, Link } from "react-router-dom"
import Nav from "../home/Nav"
import {UserAuth} from '../context/AuthContext'



function Updates(){
    const [username, setUsername] = useState('')
    const [status, setStatus] = useState(0)
    const [description, setdescription] = useState('')
    const navigate = useNavigate()
   

    function onDescriptionChange(e){
        setdescription(e.target.value)
        console.log(e.target.value)

    }

    function getChangedValue(e){
        setStatus(e.target.value)        
    }

    function usernameChange(e){
        setUsername(e.target.value)
    }

    function handleDeleteProject(){
        fetch(`/todos/:id`,{
            method: 'DELETE'
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            navigate('/') 
        })


    }

    function handleUpdateProject(){
        const formData={
            "description": description,
            "status": status
        }

        fetch(`/todo/:id}`,{
            method: 'PATCH',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            navigate('/')
        })


    }


    return(
        <div className="ms-3 mt-3">
            <Nav/>
            <div className="row">
                <div className="col-sm-6">           
                    <div className="card bg-light">
                    <button onClick={handleDeleteProject} type="button" className="btn btn-danger me-2 mt-2 ms-auto">delete project</button>
                        <div className="card-body">

                            
                            
                            <h5 className="card-title">{`title`}</h5>
                            <textarea defaultValue={description} onChange={onDescriptionChange} rows='10' className="form-control"></textarea>
                            <small className="text-muted me-5">{`status:`}</small>
                            <select onChange={getChangedValue} className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option defaultValue>{`status`}</option>
                                <option value="1">complete</option>
                                <option value="2">pending</option>
                            </select>

                        </div>
                        <button onClick={handleUpdateProject} type="button" className="btn btn-success mb-2 p-2 m-auto">save</button>
                    </div>
               


                </div>
            </div>
        </div>
    )
}
export default Updates