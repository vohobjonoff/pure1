/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Loading from "./components/Loading";




const App = () => {

  const [count, setCount] = useState(0);
  const [name, setname] = useState('Hello name');
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading />
  }
  
  return (

    <>
      <h2>
        {count}
        <button onClick={() => setCount(count + 1)}>inc</button>
      </h2>
      <h2>{name}</h2>
    </>
  )
}




const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));