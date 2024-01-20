import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

function MainFeedPage() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchData(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchCategories = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        const fetchedCategories = response.data.categories || [];
        setCategories(fetchedCategories);
        if (fetchedCategories.length > 0) {
          setSelectedCategory(fetchedCategories[0].strCategory);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  };

  const fetchData = (category) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        const fetchedMeals = response.data.meals || [];
        setMeals(fetchedMeals);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1", padding: "20px" }}>
        <h2>Choose a food category</h2>
        <select
          onChange={handleCategoryChange}
          value={selectedCategory}
          style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
        >
          {categories.map((category) => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          flex: "3",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "20px",
          gap: "20px",
        }}
      >
        {meals.map((meal) => (
          <RecipeCard
          key={meal.idMeal}
          id={meal.idMeal}
          title={meal.strMeal}
          imageURL={meal.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default MainFeedPage;
