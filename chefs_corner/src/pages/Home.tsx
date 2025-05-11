import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { RecipeGrid } from "@/components/recipe/RecipeGrid";
import { getRecipes } from "@/services/recipeService";
import { Recipe } from "@/types/recipe";

const Home = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [displayedRecipes, setDisplayedRecipes] = useState<Recipe[]>([]);
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecipes();
        setAllRecipes(data);
      } catch (err) {
        setError("Failed to load recipes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = searchQuery
      ? allRecipes.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (Array.isArray(recipe.tags) &&
              recipe.tags.some((tag) =>
                tag.toLowerCase().includes(searchQuery.toLowerCase())
              ))
        )
      : allRecipes;

    setDisplayedRecipes(filtered);
  }, [searchQuery, allRecipes]);

  if (loading) {
    return (
      <div className="container px-4 sm:px-6 lg:px-8 py-8 text-center">
        Loading recipes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 sm:px-6 lg:px-8 py-8 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-12 text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#D97742] to-[#D97742] bg-clip-text text-transparent drop-shadow-md">
          Welcome to Chef&apos;s Corner 🍽️
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover <span className="font-semibold text-gray-800">delicious recipes</span> curated by our <span className="font-semibold text-gray-800">professional chefs</span>. Explore, cook, and share your favorites.
        </p>
      </section>

      {searchQuery ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Search Results for "{searchQuery}"
          </h2>
          {displayedRecipes.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-lg text-muted-foreground">
                No recipes found matching "{searchQuery}"
              </p>
            </div>
          ) : (
            <RecipeGrid recipes={displayedRecipes} />
          )}
        </>
      ) : (
        <>
          <RecipeGrid recipes={displayedRecipes.slice(0, 3)} title="Featured Recipes" />
          <RecipeGrid recipes={displayedRecipes} title="All Recipes" />
        </>
      )}
    </div>
  );
};

export default Home;
