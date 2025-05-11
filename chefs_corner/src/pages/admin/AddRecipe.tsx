import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RecipeForm } from "@/components/admin/RecipeForm";
import { Recipe } from "@/lib/dummy-data";
import { useToast } from "@/components/ui/use-toast";
import { submitRecipe } from "@/services/recipeService";

const AdminAddRecipe = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: Partial<Recipe>) => {
    setIsSubmitting(true);
    try {
      // ⚠️ Temporary Bypass Token (Replace with real token when ready)
      const token = "test-token";

      // ✅ Map React Form Data to Django Model Fields
      const payload = {
        title: formData.title,
        description: formData.description,
        ingredients: (formData.ingredients || []).join(", "),
        instructions: (formData.steps || []).join("\n"),
        image: formData.image || "",
      };

      await submitRecipe(payload, token);

      toast({
        title: "Recipe added",
        description: "The recipe has been added successfully",
      });

      navigate("/admin/recipes");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to add the recipe",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Add New Recipe</h1>
          <Button variant="outline" onClick={() => navigate("/admin/recipes")}>
            Cancel
          </Button>
        </div>
        <p className="text-muted-foreground mt-1">
          Create a new recipe to add to the database.
        </p>
      </div>

      <div className="bg-card rounded-lg border shadow-sm p-6">
        <RecipeForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};

export default AdminAddRecipe;
