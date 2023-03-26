import React from "react"

function UpdateItems({title, description}){

    
    return (
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {/* <span>
                <small className="text-muted me-5">{`created At: ${created}`}</small>
                <small className="text-muted ms-5">{`updated At: ${updated}`}</small> 
            </span> */}
        </div>

    )

}

export default UpdateItems