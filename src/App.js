import React from 'react';

import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './actions';
import './App.css';


function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The count is:{counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button><br />
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
