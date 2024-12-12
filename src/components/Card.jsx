import React from "react";

function Card({
  id,
  name,
  description,
  isExpanded,
  onClick,
  selectedOption,
  onOptionChange,
}) {
  const options = [
    `Regulation 21`,
    `Regulation 22`,
    `Regulation 22R`,
    `Regulation 24`,
  ];

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`} onClick={onClick}>
      <h2>{name}</h2>
      <p>{description}</p>
      {isExpanded && (
        <div className="options">
          <p>Choose One</p>
          {options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="regulation"
                value={`${name}-${option}`}
                checked={selectedOption === `${name}-${option}`}
                onChange={() => onOptionChange(`${name}-${option}`)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
