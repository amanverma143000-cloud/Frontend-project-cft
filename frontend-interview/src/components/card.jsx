import React from "react";
const Card= ({item,onDelete})=>{
    return (

        <div className= "card">
          <span className="close" onClick={()=>onDelete(item.id)}>X</span>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <small>{item.date}</small>
          <img src={item.img} alt="img"></img>
        </div>
    );
};
export default Card