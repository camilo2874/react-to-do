import React from "react";
function ButtonClick(){

    let [n,setN]=React.useState(0);
    

    return(
    <>    

        <h1>
            Llevas {n} Clicks
        </h1>

        <button onClick={()=>setN(n+1)}>
            Dar Click
            </button>
    </>        

    )
} 

export {ButtonClick};