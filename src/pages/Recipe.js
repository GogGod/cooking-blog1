import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../data/recipes.json';
import RecipeCard from '../components/RecipeCard';

const Recipe = () => {
    const { id } = useParams();
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div className="recipe-page">
            <h1>{recipe.title}</h1>
            <RecipeCard recipe={recipe} />
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default Recipe;