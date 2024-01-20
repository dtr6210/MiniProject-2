import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MealDetailPage() {
  const { mealId } = useParams();
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => {
        // Process and set the meal details
        setMealDetails(response.data.meals[0]);
      })
      .catch((error) => console.error("Error fetching meal details:", error));
  }, [mealId]);

  // Function to extract ingredients
  function extractIngredients(meal) {
    let ingredients = [];
    for (let i = 1; i <= 30; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  }

  // Extract ingredients from mealDetails
  const ingredientsList = mealDetails ? extractIngredients(mealDetails) : [];

  if (!mealDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>{mealDetails.strMeal}</h1>
      <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
      <h3>Instructions</h3>
      <p>{mealDetails.strInstructions}</p>
      <h3>Ingredients</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {ingredientsList.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
