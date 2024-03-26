import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          {/* Other recipe summary details */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
