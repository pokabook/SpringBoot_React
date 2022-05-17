import logo from './logo.png';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch("/hello").then((response) => {
      return response.json();
    }).then(function (data) {
      setMessage(data);
    });
  }, []);
  return (<div className="App">
    <header className="App-header"><img src={logo} className="App-logo" alt="logo"/>
      <p> 시공조아 </p> <a className="App-link" href="https://github.com/pokabook"
                                                                   target="_blank"
                                                                   rel="noopener noreferrer"> 깃허브 </a>
      <ul> {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)} </ul>
    </header>
  </div>);
}

export default App;