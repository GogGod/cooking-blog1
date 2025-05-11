import React from 'react';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import recipesData from '../data/recipes.json';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Cooking Blog</h1>
            <SearchBar />
            <h2>Featured Recipes</h2>
            <div className="recipe-list">
                {recipesData.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Home;