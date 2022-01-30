import React from 'react';
import ItemCard from './Components/ItemCard';

function App() {
  return (
    <ItemCard ItemName={'apple pie'} Image={"http://unsplash.it/400/300"} Description={'lorem'} Price={0} MinMax={[]}/>
  );
}

export default App;
