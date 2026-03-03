import React from "react";
import "./Properties.css";
export function Properties(props) {
    return (
        <>
            <div className="p">
                
                    <p className="col">name:{props.name}</p>
                    <p className="co">course:{props.course}</p>
                    <p>age:{props.age}</p>
                    <h1>hii</h1>
            </div>
            
            
        </>
    )


}