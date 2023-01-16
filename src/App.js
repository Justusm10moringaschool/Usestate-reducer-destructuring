// import { useReducer } from 'react';
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Counter count={count} setCount={setCount }/>
    </>
  );
}

function Counter({count, setCount}) {
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <h2>counter: {count}</h2>
      </div>
    </>
  );
}
