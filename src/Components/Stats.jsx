export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="lg:text-sm text-xs text-center text-color4 font-semibold">
        Ready to assemble your packing list? Let's begin by adding some items!
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer>
      <p className="lg:text-sm text-xs text-center text-color4 font-semibold">
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have  ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </p>
    </footer>
  );
}
