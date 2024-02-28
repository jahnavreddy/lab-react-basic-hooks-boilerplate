import React, { useContext } from 'react'
import { useState } from 'react';
import { AppContext } from '../useContext/ParentContext';

const Counter1 = () => {
    const [currAge,setCurrAge] = useState(17);

    const {isDark} = useContext(AppContext)
    
    const decAge = () => {
      setCurrAge(currAge-1)
    }

    const Increase10Years = () => {
      for(let i=0;i<10;i++){
        setCurrAge( (prevAge) => prevAge + 1)      }
    }
    return (
      <div style={{border : "1px dashed white" ,
       padding : "10px" , 
       margin : "20px",
       backgroundColor : `${isDark ? "black" : "white"}`,
       color : `${isDark ? "white" : "black"}`}}>
        <h1>C O U N T E R - 1</h1>
        <h3>My Current Age is {currAge}</h3>
        <button onClick={()=>{
      setCurrAge(currAge+1)
    }}>Get Older</button>
    <button onClick={decAge}>Get younger</button>
    <button onClick={Increase10Years}>Get older by 10 years</button>
      </div>
    );
}

export default Counter1