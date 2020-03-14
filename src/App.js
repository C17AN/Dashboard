import React, { useState } from "react";
import Background from "./Background";
import Quest from "./Quest/Quest";
import Info from "./Info/Info";

function App() {
  const [state, setstate] = useState({
    completed: 0,
    exp: 0
  });

  const getExp = exp => {
    const curExp = state.exp + exp;
    setstate({ ...state, exp: curExp }); // 경험치 업데이트
  };
  return (
    <div className="App">
      <Background>
        <Quest getExp={getExp}></Quest>
        <Info></Info>
      </Background>
    </div>
  );
}

export default App;
