import React, { useState } from 'react';

const App = () =>{

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const updateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(updateTime,1000) // inbuild fxn to call it back after fixed time
  return(
    <div>
    <h1>Digital Clock</h1>
    <h1>{ctime}</h1>
    </div>
  );
}

export default App;