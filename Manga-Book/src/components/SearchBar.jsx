export default function SearchBar({ value, onChange }) {
  return (
    <div>
      <input
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm font-medium text-gray-700"
        placeholder="Search for books or genres..."
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

 