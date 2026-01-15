import { Children } from 'react';
import '../components/Counter.css';
import {useState, useEffect} from "react";

const Counter = ({ heading, min = 0, max = Infinity, step = 1 }) => {
    const [count, setCount] = useState(Number(localStorage.getItem("count")) || 0);

    function increment(e){
        setCount(prev => prev + step);
        e.target.classList.toggle("active");
        //localStorage.setItem("count", count); //LEARNINGS - X update localStorage on every click, instead use useEffect
    }

    function decrement(){
        setCount(prev => prev - step); //--------functional update--------
        e.target.classList.toggle("active");
        //localStorage.setItem("count", count);
    }



  return (
    <>
        <h1>{heading}</h1>

        <div className='count-container'>
            <button onClick={decrement} id="decrement" disabled={count <= min}>-</button>
            <p className='count'>{count}</p>
            <button onClick={increment} id="increment" disabled={count >= max}>+</button>
        </div>
    </>
  )
}

export default Counter