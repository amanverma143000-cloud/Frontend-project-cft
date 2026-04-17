import React from "react";
import Card from "./card";

const CardGrid=({data,onDelete})=>{
    return(
    <div className="grid">
        {
            data.map((item)=>(
                <Card 
                key={item.id} item={item} onDelete={onDelete}></Card>
            ))
        }
    </div>

    );
    
    
}
export default CardGrid;