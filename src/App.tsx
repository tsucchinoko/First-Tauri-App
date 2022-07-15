import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react"; // 追加
import { invoke } from "@tauri-apps/api"; // 追加

function App() {
  const [message, setMessage] = useState("");

  const messageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const GreetHandler = async (name: string) => {
    const response = await invoke("greet", { name: name });
    alert(response);
    setMessage("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React & Tauri !!
        </a>
        {/* 追加 */}
        <p>メッセージ: {message}</p>
        <input onChange={(e) => messageHandler(e)}></input>
        <button onClick={() => GreetHandler(message)}>ようこそ</button>
      </header>
    </div>
  );
}

export default App;
