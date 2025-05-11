import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recipe } from "@/types/recipe"; // Adjust path if needed

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const {
    id,
    title,
    description,
    image,
    prepTime,
    cookTime,
    difficulty,
    tags,
  } = recipe;

  const fallbackImage = "https://via.placeholder.com/600x400?text=No+Image";

 // ✅ Safely parse tags whether it's an array or comma-separated string
const safeTags: string[] = Array.isArray(tags)
  ? tags as string[]
  : typeof tags === "string"
    ? (tags as string).split(",").map((tag) => tag.trim())
    : [];

    
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
      <Link to={`/recipes/${id}`}>
        <div className="aspect-video relative overflow-hidden bg-muted">
          <img
            src={image || fallbackImage}
            alt={title?.trim() || "Untitled Recipe"}
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallbackImage;
            }}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/recipes/${id}`}>
          <h3 className="text-lg font-semibold line-clamp-2 hover:text-primary">
            {title?.trim() || "Untitled Recipe"}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {description?.trim() || "No description provided."}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {safeTags.length > 0 ? (
            safeTags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))
          ) : (
            <Badge variant="outline" className="text-xs">
              No Tags
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between text-xs text-muted-foreground">
        
        <Badge
          variant="outline"
          className={`${
            difficulty === "Easy"
              ? "border-green-400 text-green-600"
              : difficulty === "Medium"
              ? "border-yellow-400 text-yellow-600"
              : difficulty === "Hard"
              ? "border-red-400 text-red-600"
              : "border-gray-400 text-gray-600"
          }`}
        >
          {difficulty || "Unknown"}
        </Badge>
      </CardFooter>
    </Card>
  );
};
