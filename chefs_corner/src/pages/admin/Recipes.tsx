import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RecipeTable } from "@/components/admin/RecipeTable";
import { useToast } from "@/components/ui/use-toast";
import { getRecipes, deleteRecipeById } from "@/services/recipeService";
import { Recipe } from "@/types/recipe"; // Adjust the path if needed

const AdminRecipes = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Fetch recipes from backend on mount
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        console.log("Fetched Recipes:", data);  // ✅ Debug log
        setRecipes(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load recipes",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [toast]);

  const filteredRecipes = searchQuery
    ? recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (recipe.tags || []).some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : recipes;

  const handleDelete = async (id: number) => {
    try {
      await deleteRecipeById(id);
      setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
      toast({
        title: "Recipe deleted",
        description: "The recipe has been deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete the recipe",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Manage Recipes</h1>
          <p className="text-muted-foreground mt-1">
            View and manage all recipes in the database.
          </p>
        </div>
        <Button
          onClick={() => navigate("/admin/recipes/add")}
          className="mt-4 md:mt-0"
        >
          Add New Recipe
        </Button>
      </div>

      <div className="mb-6">
        <Input
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* ✅ Loading State */}
      {isLoading && <p>Loading recipes...</p>}

      {/* ✅ No Data State */}
      {!isLoading && filteredRecipes.length === 0 && (
        <p className="text-muted-foreground">No recipes found.</p>
      )}

      {/* ✅ Recipe Table */}
      {!isLoading && filteredRecipes.length > 0 && (
        <RecipeTable recipes={filteredRecipes} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default AdminRecipes;
