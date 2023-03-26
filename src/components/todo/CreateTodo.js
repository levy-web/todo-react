import React, {useState} from "react"
import {useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'



function CreateTodo({userId}){
    const [title, setTitle] = useState('')
    const [due, setDue] = useState('')
    const [description, setDescription] = useState('')
    const {setData} = UserAuth()
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        
        if (title!==""){
            // history('/projects')
            const projectData = {
                "id": userId,
                "title": title,
                "description": description,
                "due":due,

            }
            console.log(projectData)

            fetch('/create-todos',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(projectData)
            }).then((resp)=> resp.json())
            .then((data)=>{
                (setData(data))                
            })

        }else{
            alert("name required")
        }



    }
    function getProjectNameInput(e){
        console.log(e.target.value)
        setTitle(e.target.value)
    }
    function getDueTimeInput(e){
        console.log(e.target.value)
        setDue(e.target.value)
    }

    function getProjectDescriptionInput(e){
        console.log(e.target.value)
        setDescription(e.target.value)

    }



    return(
        
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="InputName" className="form-label">{`Title:`}</label>
                <input type="text" value={title} onChange={getProjectNameInput} className="form-control" id="InputName"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="InputName" className="form-label">{`Due date  (dd/mm/yyyy):`}</label>
                <input type="text" value={due} onChange={getDueTimeInput} className="form-control" id="InputDue"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">{`Description:`}</label>
                <textarea value={description} className="form-control" onChange={getProjectDescriptionInput} id="descriptionFormControlTextarea1" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{`Create Blog`}</button>
        </form>
        
    )
}

export default CreateTodo