import { Recipe } from "@/types/recipe";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface RecipeDetailProps {
  recipe?: Recipe | null;
}

const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  if (!recipe || typeof recipe !== "object" || !recipe.title) {
    return <div className="text-center mt-10 text-muted-foreground">Recipe not found or invalid data.</div>;
  }

  const {
    title,
    description,
    ingredients = [],
    steps = [],
    image,
    prepTime,
    cookTime,
    servings,
    difficulty,
    tags = [],
    ratings = [],
  } = recipe;

  const averageRating =
    ratings.length > 0
      ? ratings.reduce((acc, rating) => acc + (rating?.stars || 0), 0) / ratings.length
      : 0;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {image && (
        <div className="relative rounded-lg overflow-hidden mb-8">
          <img src={image} alt={title} className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg" />
        </div>
      )}

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{description}</p>

        <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground">
          <div>🕒 Prep Time: {prepTime || "Unknown"} mins</div>
          <div>🔥 Cook Time: {cookTime || "Unknown"} mins</div>
          <div>🍽️ Servings: {servings || "Unknown"}</div>
          <div>📈 Difficulty: {difficulty || "Unknown"}</div>
          {averageRating > 0 && <div>⭐ Rating: {averageRating.toFixed(1)} / 5</div>}
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-4">🧂 Ingredients</h2>
          <ul className="list-disc pl-5 space-y-1">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-semibold mb-4">📋 Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        {ratings.length > 0 && (
          <>
            <Separator />
            <div>
              <h2 className="text-xl font-semibold mb-4">💬 Comments</h2>
              <div className="space-y-4">
                {ratings.map((rating) => (
                  <div key={rating.id} className="bg-muted/50 p-4 rounded-md">
                    <div className="font-medium">{rating.username || "Anonymous"}</div>
                    <div className="text-sm">{rating.comment || "No comment provided."}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
