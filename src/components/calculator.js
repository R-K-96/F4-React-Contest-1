import React, { useState } from "react";

const Calculator = ()=>{

    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [result,setResult] = useState();
    const [err,setErr] = useState("");

   function addition(){
    Validation()
    setResult(parseInt(num1)+parseInt(num2))
    
   }

   function subtraction(){
    Validation()
    setResult(parseInt(num1)-parseInt(num2))
    
   }

   function multiplication(){
    Validation()
    setResult(parseInt(num1)*parseInt(num2))
    
   }

   function division(){
    Validation()
    setResult(parseInt(num1)/parseInt(num2))
    
   }
    function Validation() {
        if(!num1)
        {
            setErr("Num1 cannot be empty")
            return
        }
        else if(!num2)
        {
            setErr("Num2 cannot be empty")
            return
        }
        else if(!parseInt(num1)|| !parseInt(num2))
        {
            setErr("Enter integer value")
            return
        }
        setErr("")
    }


    return(
        <div id="container">
            <p className="heading">React  Calculator</p>
            <input id="Num1" type="text" placeholder="Num1" value={num1} onChange={e=>setNum1(e.target.value)}></input>
            <input id="Num2" type="text" placeholder="Num2" value={num2} onChange={e=>setNum2(e.target.value)}></input>
            <div id="btn-container">
                <button className="btn" id="addition" onClick={addition}>+</button>
                <button className="btn" id="subtraction" onClick={subtraction}>-</button>
                <button className="btn" id="multiplication" onClick={multiplication}>*</button>
                <button className="btn" id="division" onClick={division}>/</button>
            </div>
            {err?<p style={{color:"red"}}>Error : {err}</p>:""}

            {result||result===0?<div><p>Result : {result}</p>
            <p style={{color:"green"}}>Success : Your result is shown above!</p></div>:""}

        </div>
    )
}

export default Calculator;