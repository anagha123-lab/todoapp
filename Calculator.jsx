import { useState } from "react"
const Calculator = () => {
  
   const [input, setinput] = useState("")

   const show = (data) => {
     setinput(input + data)
   }

   const lastEntry = () => {
    setinput(input.slice(0,-1))
   }

   const clear = () => {
    setinput("")
   }

   const solve = () => {
    setinput(eval(input))
   }

    return (
        <div>
            <h1>Calculator</h1>
          <div className="calculator w-25 mx-auto bg-dark rounded-3 p-3">
            <div className="">
                <input type="text" className='entry' value={input}/>
            </div>
            <div className="buttons">
                <button onClick={()=>show('1')}>1</button>
                <button onClick={()=>show('2')}>2</button>
                <button onClick={()=>show('3')}>3</button>
                <button onClick={()=>show('+')}>+</button>

                <button onClick={()=>show('4')}>4</button>
                <button onClick={()=>show('5')}>5</button>
                <button onClick={()=>show('6')}>6</button>
                <button onClick={()=>show('-')}>-</button>

                <button onClick={()=>show('7')}>7</button>
                <button onClick={()=>show('8')}>8</button>
                <button onClick={()=>show('9')}>9</button>
                <button onClick={()=>show('*')}>*</button>

                <button onClick={()=>show('0')}>0</button>
                <button onClick={()=>show('/')}>/</button>
                <button onClick={()=>show('.')}>.</button>
                <button onClick={()=>show('%')}>%</button>
            </div>

            <div>
                <button onClick={lastEntry}>CE</button>
                <button onClick={clear}>Clear</button>
                <button onClick={solve}>=</button>
            </div>
          </div>
        </div>
    )
}



export default Calculator