import { useEffect, useState } from "react";
import Nav from "./Nav"
import Todo from "../todo/Todo";
import CreateTodo from "../todo/CreateTodo";
function Home(){


    return(
        <div>
            <Nav />
            <div className="ms-3 mt-3">
                <div className="row">
                    <div className="col-sm-3">           
                        <div className="card bg-light">
                            <div className="card-body">
                                <h6>my Todos</h6>
                                <Todo />                                             
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7">           
                        <div className="card bg-light">   
                            <div className="card-body">
                                <h4>Create Todo</h4>
                                <CreateTodo />
                                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;