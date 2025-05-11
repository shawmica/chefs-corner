
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Recipe } from "@/lib/dummy-data";
import { Plus, Minus } from "lucide-react";

interface RecipeFormProps {
  initialData?: Partial<Recipe>;
  onSubmit: (data: Partial<Recipe>) => void;
  isSubmitting: boolean;
}

export const RecipeForm = ({
  initialData = {},
  onSubmit,
  isSubmitting,
}: RecipeFormProps) => {
  const [formData, setFormData] = useState<Partial<Recipe>>({
    title: "",
    description: "",
    image: "",
    ingredients: [""],
    steps: [""],
    prepTime: 0,
    cookTime: 0,
    servings: 1,
    difficulty: "Medium",
    tags: [],
    ...initialData,
  });

  const [tagInput, setTagInput] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
  };

  const handleDifficultyChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      difficulty: value as "Easy" | "Medium" | "Hard",
    }));
  };

  const handleIngredientChange = (index: number, value: string) => {
    const updatedIngredients = [...(formData.ingredients || [])];
    updatedIngredients[index] = value;
    setFormData((prev) => ({ ...prev, ingredients: updatedIngredients }));
  };

  const handleStepChange = (index: number, value: string) => {
    const updatedSteps = [...(formData.steps || [])];
    updatedSteps[index] = value;
    setFormData((prev) => ({ ...prev, steps: updatedSteps }));
  };

  const addIngredient = () => {
    setFormData((prev) => ({
      ...prev,
      ingredients: [...(prev.ingredients || []), ""],
    }));
  };

  const removeIngredient = (index: number) => {
    if ((formData.ingredients?.length || 0) <= 1) return;
    const updatedIngredients = [...(formData.ingredients || [])];
    updatedIngredients.splice(index, 1);
    setFormData((prev) => ({ ...prev, ingredients: updatedIngredients }));
  };

  const addStep = () => {
    setFormData((prev) => ({
      ...prev,
      steps: [...(prev.steps || []), ""],
    }));
  };

  const removeStep = (index: number) => {
    if ((formData.steps?.length || 0) <= 1) return;
    const updatedSteps = [...(formData.steps || [])];
    updatedSteps.splice(index, 1);
    setFormData((prev) => ({ ...prev, steps: updatedSteps }));
  };

  const addTag = () => {
    if (!tagInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      tags: [...(prev.tags || []), tagInput.trim()],
    }));
    setTagInput("");
  };

  const removeTag = (index: number) => {
    const updatedTags = [...(formData.tags || [])];
    updatedTags.splice(index, 1);
    setFormData((prev) => ({ ...prev, tags: updatedTags }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Recipe Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="prepTime">Prep Time (mins)</Label>
            <Input
              id="prepTime"
              name="prepTime"
              type="number"
              value={formData.prepTime}
              onChange={handleNumberChange}
              min={0}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="cookTime">Cook Time (mins)</Label>
            <Input
              id="cookTime"
              name="cookTime"
              type="number"
              value={formData.cookTime}
              onChange={handleNumberChange}
              min={0}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="servings">Servings</Label>
            <Input
              id="servings"
              name="servings"
              type="number"
              value={formData.servings}
              onChange={handleNumberChange}
              min={1}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="difficulty">Difficulty</Label>
          <Select
            value={formData.difficulty}
            onValueChange={handleDifficultyChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Ingredients</Label>
          <div className="space-y-2">
            {formData.ingredients?.map((ingredient, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  placeholder={`Ingredient ${index + 1}`}
                  required
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeIngredient(index)}
                  disabled={(formData.ingredients?.length || 0) <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addIngredient}
            className="mt-2"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Ingredient
          </Button>
        </div>

        <div>
          <Label>Steps</Label>
          <div className="space-y-2">
            {formData.steps?.map((step, index) => (
              <div key={index} className="flex gap-2">
                <Textarea
                  value={step}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  required
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeStep(index)}
                  disabled={(formData.steps?.length || 0) <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addStep}
            className="mt-2"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Step
          </Button>
        </div>

        <div>
          <Label>Tags</Label>
          <div className="flex gap-2 flex-wrap mb-2">
            {formData.tags?.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="cursor-pointer px-2 py-1"
                onClick={() => removeTag(index)}
              >
                {tag} <span className="ml-1">×</span>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Add a tag"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag();
                }
              }}
            />
            <Button
              type="button"
              variant="outline"
              onClick={addTag}
            >
              Add
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Recipe"}
        </Button>
      </div>
    </form>
  );
};
