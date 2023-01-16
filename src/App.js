// import { useReducer } from 'react';
import { useReducer } from "react";

function reducer(state, action){
  switch(action.type){
    case 'increment':
      return {count: state.count + action.num};
    case 'decrement':
      return {count: state.count - action.num };
    default:
      throw new Error('unknown action type ');
  }

}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0
  })

  return (
    <>
    <Counter count={state.count} 
    onClick = {()=> dispatch({
      type: 'increment',
      num: 1
    })}
    />

    <Counter count={state.count} 
    onClick = {() => dispatch({
      type: 'decrement',
      num: 4
    })}
    />
    </>
  );
}

function Counter({count, onClick}) {
  return (
    <>
      <div>
        <button
          onClick={onClick}
        >
          Increment
        </button>
        <h2>counter: {count}</h2>
      </div>
    </>
  );
}
