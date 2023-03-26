import React, {useState, useEffect} from "react"
import TodoItems from "./TodoItems"



function Todo(){

    const [data, setData] = useState([])

    useEffect(()=>{

        fetch('/todos')
        .then(res=>res.json())
        .then(data=>setData(data))
          
    }, [])



    const proj = data.map((element)=>{
        console.log(element)
        return <TodoItems
            id={element.id}
            due={element.due}
            title={element.title}
            description={element.description}
            key={element.id}
            status={element.status}



        />
    })

    return(
           
        <div>
            {proj}
        </div>
    )
}
 export default Todo;