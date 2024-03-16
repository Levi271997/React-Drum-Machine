import logo from './logo.svg';
import './App.css';
import  React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      clickedIndex: 0
    }
    this.triggerAudio=this.triggerAudio.bind(this);
    this.handleKeyDown= this.handleKeyDown.bind(this);
  }

   clipbuttons =["Q","W","E","A","S","D","Z","X","C"];
   audioclipsrc=[
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  ];
   clipids =["heater-1","heater-2","heater-3","heater-4","clap","open-hh","kick-n-hat","kick","closed-hh"];
   cliptitle=["Heater 1","Heater 2","Heater 3","Heater 4","Clap","Open-HH","Kick-n-Hat","Kick","Closed-HH"];


   componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const drumpads = document.querySelectorAll('.drum-pad');
    const pressedKey = event.key;
    let UpperCaseKey = pressedKey.toUpperCase();
    let indexofpressedkey = this.clipbuttons.indexOf(UpperCaseKey);

    if(this.clipbuttons.indexOf(UpperCaseKey) !== -1){
      drumpads[indexofpressedkey].click();
    }
    
    
  }

   triggerAudio(event){
    let clipvalue = event.currentTarget.textContent;
    const display= document.getElementById('display');
    display.textContent = this.cliptitle[this.clipbuttons.indexOf(clipvalue)];
   event.currentTarget.querySelector('audio').play();
  }

  render(){
    return (
      <div id="drum-wrapper">
  
          <div id="drum-machine"> 
          <div id="display"></div>
            <div id="drum-pads">
              {
              this.clipbuttons.map((btn,index)=>(
                  <button key={index} id={this.clipids[index]} className="drum-pad" onClick={this.triggerAudio}>{btn}
                    <audio id={btn} src={this.audioclipsrc[index]} controls className="clip"/>
                  </button>
              ))
              }
            </div> 
          </div>
      </div> 
    );
  }
}


export default App;
