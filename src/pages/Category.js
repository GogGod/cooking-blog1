import React from 'react';
import RecipeCard from '../components/RecipeCard';
import recipesData from '../data/recipes.json';

const Category = ({ match }) => {
    const categoryName = match.params.category;
    const filteredRecipes = recipesData.filter(recipe => recipe.category === categoryName);

    return (
        <div className="category-page">
            <h1>{categoryName} Recipes</h1>
            <div className="recipe-list">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <p>No recipes found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default Category;