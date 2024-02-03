import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Description from "./Description";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="h-screen flex flex-col lg:grid lg:grid-cols-2 p-2 lg:p-10">
      <div className="mt-10 lg:gap-10 gap-2 flex flex-col lg:p-16 lg:m-10 p-5 m-2 bg-[#e5e5e5]/50 rounded-xl shadow-lg backdrop-blur-md">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <Description />
      </div>

      <div className="lg:gap-10 gap-2 flex flex-col lg:p-16 lg:m-10 p-5 m-2 bg-[#e5e5e5]/50 rounded-xl shadow-lg backdrop-blur-md">
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </div>
  );
}
