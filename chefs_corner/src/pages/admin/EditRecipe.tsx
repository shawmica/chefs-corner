
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { RecipeForm } from "@/components/admin/RecipeForm";
import { Recipe, getRecipeById, updateRecipe } from "@/lib/dummy-data";
import { useToast } from "@/components/ui/use-toast";

const AdminEditRecipe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (id) {
      // Simulate API call
      setTimeout(() => {
        const recipeData = getRecipeById(parseInt(id));
        if (recipeData) {
          setRecipe(recipeData);
        } else {
          toast({
            title: "Error",
            description: "Recipe not found",
            variant: "destructive",
          });
          navigate("/admin/recipes");
        }
        setIsLoading(false);
      }, 500);
    }
  }, [id, navigate, toast]);

  const handleSubmit = (formData: Partial<Recipe>) => {
    if (!id) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      try {
        updateRecipe(parseInt(id), formData);
        
        toast({
          title: "Recipe updated",
          description: "The recipe has been updated successfully",
        });
        
        navigate("/admin/recipes");
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to update the recipe",
          variant: "destructive",
        });
        
        setIsSubmitting(false);
      }
    }, 800);
  };

  if (isLoading) {
    return (
      <div className="container px-4 sm:px-6 lg:px-8 py-16 flex justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Edit Recipe</h1>
          <Button variant="outline" onClick={() => navigate("/admin/recipes")}>
            Cancel
          </Button>
        </div>
        <p className="text-muted-foreground mt-1">
          Update recipe details and content.
        </p>
      </div>

      <div className="bg-card rounded-lg border shadow-sm p-6">
        {recipe && (
          <RecipeForm 
            initialData={recipe} 
            onSubmit={handleSubmit} 
            isSubmitting={isSubmitting} 
          />
        )}
      </div>
    </div>
  );
};

export default AdminEditRecipe;
