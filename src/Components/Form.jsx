import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <h3 className="text-color3 lg:text-sm text-xs mt-3 lg:mt-0 font-semibold">
        What do you need to make your next adventure truly unforgettable?
      </h3>
      <div className="mt-5 flex flex-row gap-2 justify-center items-center content-center">
        <select
          className="rounded-md lg:w-14 lg:h-10 w-12 h-8 lg:p-2 p-1 lg:text-sm text-xs"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option className="text-sm p-2" value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="rounded-md lg:w-52 w-40 lg:h-10 p-3 lg:text-sm h-8"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="lg:w-14 lg:h-10 lg:text-sm w-12 h-8 text-xs bg-white rounded-md text-color4 font-medium hover:bg-color1 hover:text-color2 transition-all duration-500">
          Add
        </button>
      </div>
    </form>
  );
}
