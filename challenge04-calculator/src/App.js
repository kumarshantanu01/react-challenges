import React from 'react';
import {add, sub, multi, div} from './Calc';

function App(){
  return(
    <>
    <ul>
      <li>The sum of two no. is {add(40,4) }</li>
      <li>The diff of two no. is {sub(40,4) }</li>
      <li>The multi of two no. is {multi(40,4) }</li>
      <li>The div of two no. is {div(40,3) }</li>
    </ul>
  </>
  );
}

export default App;