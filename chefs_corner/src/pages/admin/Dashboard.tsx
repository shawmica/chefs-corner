
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dummyRecipes } from "@/lib/dummy-data";
import { useAuth } from "@/contexts/AuthContext";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const stats = {
    totalRecipes: dummyRecipes.length,
    totalRatings: dummyRecipes.reduce((acc, recipe) => acc + recipe.ratings.length, 0),
    averageRating: 
      dummyRecipes.reduce((acc, recipe) => {
        const recipeAvg = recipe.ratings.length > 0 
          ? recipe.ratings.reduce((sum, rating) => sum + rating.stars, 0) / recipe.ratings.length 
          : 0;
        return acc + recipeAvg;
      }, 0) / (dummyRecipes.length || 1),
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, {user?.username}
          </p>
        </div>
        <Button
          onClick={() => navigate("/admin/recipes/add")}
          className="mt-4 md:mt-0"
        >
          Add New Recipe
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Recipes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalRecipes}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Ratings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalRatings}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {stats.averageRating.toFixed(1)} / 5
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Manage Recipes</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-muted-foreground mb-4">
              Add, edit, or remove recipes from the database.
            </p>
            <Button 
              variant="outline" 
              onClick={() => navigate("/admin/recipes")}
              className="w-full"
            >
              View All Recipes
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Return to Website</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-muted-foreground mb-4">
              Go back to the main website to see your published recipes.
            </p>
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
              className="w-full"
            >
              View Website
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
