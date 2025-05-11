export default function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.description}</p>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
}