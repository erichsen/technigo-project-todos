export const Filter = ({ current, onChange }) => {
  const options = ["all", "active", "completed"]

  return (
    <div className="filter">
      {options.map((option) => (
        <button
          key={option}
          className={current === option ? "active" : ""}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
