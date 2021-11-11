import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all", ...new Set(items.map(item => item.category))]; 
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  // console.log(menuItems);
  const filterItems = (cate) => {
    if (cate === "all"){
      setMenuItems(items)
      return;
    }
      const newItems = items.filter(item => item.category === cate)
      setMenuItems(newItems);
  };

  return (
    <main>
      <div className="title">
        <h2>Our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItem={ filterItems } category={categories}/>
      <Menu menuItems={ menuItems }/>
    </main>
  );
}

export default App;
