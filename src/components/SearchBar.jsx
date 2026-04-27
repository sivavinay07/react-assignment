import "../styles/pages.css";

// TODO: Accept value and onChange as props (controlled input)
export default function SearchBar({
  /* props here */
  value,
  onChange,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search posts by title..."
        value={value}
        onChange={onChange}
        // TODO: Wire up value and onChange
      />
      {/* TODO: Show a clear "×" button only when value is not empty */}
      {value !== "" && (
        <button
          className="search-bar__clear"
          // We pass a synthetic event object back to the parent to clear the text
          onClick={() => onChange({ target: { value: "" } })}
        >
          ×
        </button>
      )}
    </div>
  );
}
