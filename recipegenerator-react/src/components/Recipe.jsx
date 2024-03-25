import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.name}</h2>
      {/* Render the rest of the recipe details here */}
    </div>
  );
};

export default Recipe;
