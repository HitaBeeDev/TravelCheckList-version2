import cancel from "../assets/cancel.png";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="flex flex-row items-center gap-2 content-center">
      <input
        className="bg-white rounded-md w-5 h-5"
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span
        className="text-sm text-color4 font-medium"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.description}
      </span>

      <button
        className=" rounded-md m-2 cursor-pointer transition-all duration-300 hover:bg-color2"
        onClick={() => onDeleteItem(item.id)}
      >
        <img className="w-4 h-4" src={cancel} alt="cancel icon" />
      </button>
    </li>
  );
}
