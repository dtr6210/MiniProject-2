import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function RecipeCard({ recipe }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {recipe.strMeal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {recipe.strInstructions}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;
