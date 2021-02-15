import React from "react";
import SlotM from './SlotMach';


const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to 
        <span style={{ fontWeight: "bold" , backgroundColor: "#006dfc7e"}}> Slot machine game</span> 🎰
      </h1>
      <div className="slotmachine">
        <SlotM x= "😄" y= "😄" z= "😄"/>
        <hr/>
        <SlotM x= '😸' y= '🥰' z= "😄"/>
        <hr />
        <SlotM x= "🐌" y= "☃️" z= "🗼"/>
        <hr />
      </div>
    </>
  );
};

export default App;
