import React from "react";

function CategoryFilter({categories, selectedCategory, handleCategoryFilter}) {

  const categroyButtons = categories.map((cat) => {
    const className = cat === selectedCategory ? "selected" : ""
    return (
      <button
        className={className} 
        key={cat} 
        onClick={() => {handleCategoryFilter(cat)}} >{cat}
      </button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categroyButtons}
    </div>
  );
}

export default CategoryFilter;
