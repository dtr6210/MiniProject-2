import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function RecipeCard({
  title,
  imageURL = "https://placehold.co/320X320",
  altText = "placeholder",
  instructions,
  children,
}) {
  return (
    <Card
      sx={{
        maxWidth: 275,
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="275"
          alt={altText}
          image={imageURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
