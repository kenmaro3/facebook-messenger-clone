import React, {useState, useEffect} from 'react';
import './App.css';
import {Button} from "@material-ui/core";
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from "@material-ui/core";


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    // {username: "kenmaro", text:"whatup"}, {username:"omiita", text:"hey dude"}
  ]);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    db.collection("messages")
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(()=>{
    setUsername(prompt("Please enter your name"));
  }, [])

  console.log('this is username')
  console.log(username);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, {username: username, text:input}]);
    // console.log('this is messages');
    // console.log(messages);
    setInput('');
  }
  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/150px-Facebook_Messenger_logo.svg.png"/>
      <h1>hello programmers</h1>
      <h2>welcome {username}</h2>
    
    <form className="app__form">

    <FormControl className="app__formControl">
        <Input className="app__input" placeholder="Enter message..." onChange={event => setInput(event.target.value)} value={input}/>
        <IconButton className="app__iconButton" disabled={!input} type="submit" onClick={sendMessage}>
        <SendIcon />

        </IconButton>

      </FormControl>
    </form>


      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        // <p>{message}</p>
        ))
      }
      </FlipMove>

    </div>
  );
}

export default App;
