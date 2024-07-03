export default function Stats({ items }) {
  if (!items.length) {
    return <p className="stats">
      <em>Starting adding items in your packing list 🚀</em>
    </p>;
  }

  const numItems = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round(packedItem / numItems * 100);

  return <footer className='stats'>
    <em>
      {percentage === 100 ? `You got everything ! Ready to go ✈` : `You have ${numItems} item on your list and you already packed ${packedItem} (${percentage}%)`}
    </em>
  </footer>;
}
 