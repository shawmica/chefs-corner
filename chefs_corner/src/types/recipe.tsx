export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  tags: string[];
  ratings: {
    id: number;
    username: string;
    stars: number;
    comment: string;
  }[];
}
