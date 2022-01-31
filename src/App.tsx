import React from 'react';
import ItemCard from './Components/ItemCard';
import {JsonItems} from "./Others/items";
import "./Css/App.css"

const App = () => {
  var itemArray = [...JsonItems];

  return (
    <main>
      {
        itemArray.map((bakeryItem) => {
          return <ItemCard ItemName={bakeryItem.ItemName} 
          Image={bakeryItem.Image} 
          Description={bakeryItem.Description} 
          Price={bakeryItem.Price}
          MinMax={[bakeryItem.Min, bakeryItem.Max]}/>
        })
      }
    </main>
  )
}

export default App;
