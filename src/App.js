import React, { useState } from 'react';
import './App.css';
import Deatils from './header.js'
function App() {
  var dictvalue = {
    "😀" : "Grinning Face",
    "😃" : "Grinning Face with Big Eyes",
    "😄" : "Grinning Face with Smiling Eyes",
    "😁" : "Beaming Face with Smiling Eyes",
    "😆" : "Grinning Squinting Face",
    "😅" : "Grinning Face with Sweat",
    "🤣" : "Rolling on the Floor Laughing",
    "😂" : "Face with Tears of Joy",
    "🙂" : "Slightly Smiling Face",
    "🙃" : "Upside-Down Face",
    "😉" : "Winking Face",
    "😊" : "Smiling Face with Smiling Eyes",
    "😇" : "Smiling Face with Halo",
    "🥰" : "Smiling Face with Hearts",
    "😍" : "Smiling Face with Heart-Eyes",
    "🤩" : "Star-Struck",
    "😘" : "Face Blowing a Kiss",
    "😗" : "Kissing Face",
    "😚" :  "Kissing Face with Closed Eyes",
    "😙" :  "Kissing Face with Smiling Eyes",
    "😋" : "Face Savoring Food",
    "😛" : "Face with Tongue",
    "😜" : "Winking Face with Tongue",
    "🤪" : "Zany Face",
    "😝" : "Squinting Face with Tongue",
    "🤑" : "Money-Mouth Face",
    "🤗" : "Hugging Face",
    "🤭" : "Face with Hand Over Mouth",
    "🤫" : "Shushing Face",
    "🤔" : "Thinking Face",
    "🤐" : "Zipper-Mouth Face",
    "🤨" : "Face with Raised Eyebrow",
    "😐" : "Neutral Face",
    "😑" : "Expressionless Face",
    "😶" : "Face Without Mouth",
    "😏" : "Smirking Face",
    "😒" : "Unamused Face",
    "🙄" : "Face with Rolling Eyes",
    "😬" : "Grimacing Face",
    "🤥" : "Lying Face",
    "😌" : "Relieved Face"
  }
  var msg = "welcome sanju here "
  var colorchnagemsg = "blue"
  const [likeCounter, setlikeCounter] = useState("");

  const [meaning, setMeaning] = useState("");

  var shopinglist = ["milk","cake","bread","curd","eggs","flowers","sugars"]
  // var count =1
  function likeclickhandler(event){
    var newlikeCounterValue = likeCounter;
    setlikeCounter(newlikeCounterValue);
    var userinput = event.target.value

    var meaning = dictvalue[userinput];

    if (meaning === undefined) {
      meaning ="you dont have this emoji in your database"
    }

    setMeaning(meaning)
    console.log(userinput)
  }
  return (
    <div className="App">
      <header className="App-header">

        <h1 style={{color:colorchnagemsg}}>{msg}</h1>

        <h1>sanju click here </h1>
        <input onChange={likeclickhandler} className="userinput"></input>
        {/* <button onClick={likeclickhandler}>click me {likeCounter}</button> */}
        <div style={{ color: colorchnagemsg }}>Welcome {likeCounter}</div>
        
        <h4 style={{color: colorchnagemsg}}>{meaning}</h4>

        


        <h1>print shoping list here</h1>
        <ul>
          {
            shopinglist.map(function (item) {
              return <li style={{color:colorchnagemsg}}>{ item }</li>
            })}
        </ul>
        

      </header>
      <Deatils />
    </div>
    
  );
}

export default App;
