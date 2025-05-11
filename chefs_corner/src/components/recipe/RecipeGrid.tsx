
import { RecipeCard } from "./RecipeCard";
import { Recipe } from "@/types/recipe";


interface RecipeGridProps {
  recipes: Recipe[];
  title?: string;
}

export const RecipeGrid = ({ recipes, title }: RecipeGridProps) => {
  return (
    <section className="py-8">
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};
