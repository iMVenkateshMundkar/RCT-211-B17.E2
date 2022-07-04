import React from "react";

const Filter = ({
  setCheckBoots,
  setCheckCanvas,
  setCheckLoafers,
  setCheckSneakers,
}) => {
  const sneakersHandler = () => {
    setCheckSneakers((val) => !val);
  };
  const loafersHandler = () => {
    setCheckLoafers((val) => !val);
  };
  const canvasHandler = () => {
    setCheckCanvas((val) => !val);
  };
  const bootsHandler = () => {
    setCheckBoots((val) => !val);
  };
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input
            type="checkbox"
            value="Sneakers"
            onChange={() => sneakersHandler()}
          />
          <label>Sneakers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Loafers"
            onChange={() => loafersHandler()}
          />
          <label>Loafers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Canvas"
            onChange={() => canvasHandler()}
          />
          <label>Canvas</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Boots"
            onChange={() => bootsHandler()}
          />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
