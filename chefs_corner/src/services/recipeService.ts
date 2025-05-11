import axios from "axios";
import { Recipe } from "@/types/recipe";


const API_URL = "http://127.0.0.1:8000/api/recipes/";

/**
 * Submit a new recipe.
 */
export const submitRecipe = async (data: Partial<Recipe>, token?: string) => {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const response = await axios.post<Recipe>(API_URL, data, { headers });
  return response.data;
};

/**
 * Fetch all recipes.
 */
export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get<Recipe[]>(API_URL);
  return response.data;
};

/**
 * Delete a recipe by ID.
 */
export const deleteRecipeById = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}${id}/`);
};

/**
 * ✅ Fetch and map a single recipe by ID with proper formatting.
 */
export const getRecipeById = async (id: number): Promise<Recipe | null> => {
  try {
    const response = await axios.get(`${API_URL}${id}/`);
    const data = response.data;

    const mappedRecipe: Recipe = {
      id: data.id,
      title: data.title,
      description: data.description,
      ingredients: data.ingredients?.split(/\r?\n/) || [],
      steps: data.instructions?.split(/\r?\n/) || [],
      image: data.image,
      prepTime: data.prep_time,
      cookTime: data.cook_time,
      servings: data.servings,
      difficulty: data.difficulty,
      tags: data.tags?.split(",").map((tag: string) => tag.trim()) || [],
      ratings: [],  // Extend if ratings exist
    };

    return mappedRecipe;
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error);
    return null;
  }
};
