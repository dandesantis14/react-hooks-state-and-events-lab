import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkLight,setDarkLight] = useState(true)

  function handleModeClick () {
    setDarkLight(!darkLight)
  }
  const appClass = darkLight ? "App dark" : "App light"
  const currentMode = darkLight ? "Light Mode" : "Dark Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeClick}>{currentMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
