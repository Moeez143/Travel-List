import { useState } from "react";
import Logo from "./components/Logo";
import From from "./components/From";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items , item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems(items => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items => items.map((item) => item.id === id ? {...item , packed: !item.packed } : item ))
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you really want to clear the list?');

    if(confirmed) setItems([]);
  }

  return <div className='app'>
    <Logo />
    <From onClickAdd={handleAddItems} />
    <PackingList items={items} onClickDelete={handleDeleteItem} onToggleItem={handleToggleItem} ClearList={handleClearList} />
    <Stats items={items} />
  </div>
}





