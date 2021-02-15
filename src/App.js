import React from "react"
import SlotM from './SlotMach';


const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to 
        <span style={{ fontWeight: "bold" , backgroundColor: "#fff"}}> Slot machine game</span> 🎰
      </h1>
      <div className="slotmachine">
        <SlotM x= "😄" y= "😄" z= "😄"/>
        <SlotM x= '😸' y= '🥰' z= "😄"/>
        <SlotM x= "🐌" y= "☃️" z= "🗼"/>
      </div>
    </>
  );
};

export default App;
