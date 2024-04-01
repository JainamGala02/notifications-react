import { useEffect } from 'react';
import { messaging } from './firebase';
import { getToken } from "firebase/messaging";
import logo from './logo.svg';
import './App.css';

function App() {

  async function requestPermission() {
  const permission = await Notification.requestPermission()
  if (permission === 'granted') {
  //Generate Token
  const token = await getToken(messaging, { vapidkey: "#VAPID-KEY" })
  console.log("Token Generated", token);
    var fcmToken = {
      token: token
    };
    //send this token to database
    fetch("https://localhost:3001/saveToken", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fcmToken),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    }); 
  } else if (permission === 'denied') {
    alert("You have Disabled Notifications")
    }
  };

  useEffect(() => {
    //req user for notification permission
    requestPermission();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
