import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState("");
  const [desp, setDesp] = useState("");

  useEffect(() => {
    axios.post("http://localhost:3000/returnImage", {
      filename: "image.jpeg",
      fileID: "1Xg2vwSnT6LmYFuuqg-J-NFTBPQ9JhQEJ"
    }).then(result => {
      console.log(result);
      setImage(result.data.result);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    axios.post("http://localhost:3000/describe", {
      prompt: "Describe the dress in the image",
      filename: "image.jpeg",
      fileID: "1Xg2vwSnT6LmYFuuqg-J-NFTBPQ9JhQEJ"
    }).then(result => {
      setDesp(result.data.result);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  if (image === "") {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <img src={`data:image/jpeg;base64,${image}`} alt="" />
      <p>{desp}</p>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
