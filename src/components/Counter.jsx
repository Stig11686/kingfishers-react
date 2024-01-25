import { useState } from "react"

const Counter = (props) => {
    const initialState = 1;
    const [count, setCount] = useState(initialState);
    const [arr, setArr] = useState([]);

    //Delete from an array

    // const handleDelete = (e) => {
    //   setArr(arr.filter(item => item !== +e.target.innerText));
    //   console.log(arr, e.target.innerText);
    // };

  return (
    <div>
      {arr.map(item => <p key={item} onClick={(e) => handleDelete(e)}>{item}</p>)}
      <button onClick={() => setArr((prev) => [...prev, prev.length + 1])}>Increment</button>
      <button onClick={() => setArr([])}>Reset</button>
    </div>
  )
};

export default Counter;
