
export type Recipe = {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image: string;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  createdAt: string;
  updatedAt: string;
  ratings: Rating[];
};

export type Rating = {
  id: number;
  userId: number;
  username: string;
  recipeId: number;
  stars: number;
  comment: string;
  createdAt: string;
};

export const dummyRecipes: Recipe[] = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    description: "A simple, delicious Italian pizza with fresh tomatoes, mozzarella, and basil.",
    ingredients: [
      "2 1/4 cups (280g) all-purpose flour",
      "1 1/2 teaspoons instant yeast",
      "1 1/2 teaspoons salt",
      "1 tablespoon olive oil",
      "3/4 cup warm water",
      "1 cup tomato sauce",
      "8 ounces fresh mozzarella, sliced",
      "Fresh basil leaves",
      "2 tablespoons olive oil, for drizzling"
    ],
    steps: [
      "In a large bowl, mix flour, yeast, and salt.",
      "Add olive oil and warm water, mix until a dough forms.",
      "Knead the dough on a floured surface for 5-7 minutes.",
      "Place in an oiled bowl, cover, and let rise for 1-2 hours.",
      "Preheat oven to 475°F (245°C) with a pizza stone if available.",
      "Roll out the dough into a 12-inch circle.",
      "Spread tomato sauce over the dough, leaving a 1/2-inch border.",
      "Arrange mozzarella slices over sauce.",
      "Bake for 10-12 minutes until crust is golden.",
      "Top with fresh basil leaves and drizzle with olive oil before serving."
    ],
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    tags: ["Italian", "Pizza", "Vegetarian", "Dinner"],
    createdAt: "2023-03-15T12:00:00Z",
    updatedAt: "2023-03-15T12:00:00Z",
    ratings: [
      {
        id: 1,
        userId: 2,
        username: "pizza_lover",
        recipeId: 1,
        stars: 5,
        comment: "Perfect crust! I added some garlic to the sauce for extra flavor.",
        createdAt: "2023-03-16T14:23:00Z"
      },
      {
        id: 2,
        userId: 3,
        username: "homechef",
        recipeId: 1,
        stars: 4,
        comment: "Very good but needed a bit more salt in the dough for my taste.",
        createdAt: "2023-03-18T09:45:00Z"
      }
    ]
  },
  {
    id: 2,
    title: "Creamy Mushroom Risotto",
    description: "A rich and creamy Italian rice dish with sautéed mushrooms and parmesan cheese.",
    ingredients: [
      "6 cups vegetable or chicken broth",
      "3 tablespoons olive oil",
      "1 onion, finely diced",
      "3 cloves garlic, minced",
      "1 pound mushrooms, sliced",
      "1 1/2 cups Arborio rice",
      "1/2 cup dry white wine",
      "1/2 cup grated Parmesan cheese",
      "2 tablespoons butter",
      "Salt and pepper to taste",
      "2 tablespoons fresh parsley, chopped"
    ],
    steps: [
      "Warm broth in a saucepan over low heat.",
      "In a large pan, heat olive oil and sauté onion until translucent.",
      "Add garlic and mushrooms, cook until mushrooms are tender.",
      "Add rice and stir for 1-2 minutes until slightly toasted.",
      "Pour in wine and stir until absorbed.",
      "Add warm broth one ladle at a time, stirring frequently and waiting until liquid is absorbed before adding more.",
      "Continue this process for about 18-20 minutes until rice is creamy and al dente.",
      "Remove from heat, stir in Parmesan and butter.",
      "Season with salt and pepper, garnish with parsley before serving."
    ],
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    difficulty: "Medium",
    tags: ["Italian", "Risotto", "Vegetarian", "Dinner"],
    createdAt: "2023-04-02T15:30:00Z",
    updatedAt: "2023-04-02T15:30:00Z",
    ratings: [
      {
        id: 3,
        userId: 4,
        username: "foodie123",
        recipeId: 2,
        stars: 5,
        comment: "Restaurant quality! The mushrooms give it amazing flavor.",
        createdAt: "2023-04-03T18:12:00Z"
      }
    ]
  },
  {
    id: 3,
    title: "Classic Chocolate Chip Cookies",
    description: "Soft and chewy cookies with melty chocolate chips, perfect for any occasion.",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 teaspoon salt",
      "1 cup unsalted butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "2 large eggs",
      "2 teaspoons vanilla extract",
      "2 cups semi-sweet chocolate chips"
    ],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "In a small bowl, mix flour, baking soda, and salt.",
      "In a large bowl, cream together butter and both sugars until light and fluffy.",
      "Beat in eggs one at a time, then add vanilla.",
      "Gradually mix in the flour mixture.",
      "Fold in chocolate chips.",
      "Drop rounded tablespoons of dough onto ungreased baking sheets.",
      "Bake for 9-11 minutes until golden brown.",
      "Allow cookies to cool on baking sheet for 2 minutes, then transfer to wire racks."
    ],
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    prepTime: 20,
    cookTime: 10,
    servings: 24,
    difficulty: "Easy",
    tags: ["Dessert", "Cookies", "Baking", "Chocolate"],
    createdAt: "2023-02-10T09:45:00Z",
    updatedAt: "2023-02-10T09:45:00Z",
    ratings: [
      {
        id: 4,
        userId: 5,
        username: "sweet_tooth",
        recipeId: 3,
        stars: 5,
        comment: "These are the best cookies I've ever made! So soft and perfect.",
        createdAt: "2023-02-11T14:30:00Z"
      },
      {
        id: 5,
        userId: 6,
        username: "baking_mom",
        recipeId: 3,
        stars: 4,
        comment: "Great recipe, my kids loved them. I added some walnuts too.",
        createdAt: "2023-02-12T20:15:00Z"
      }
    ]
  },
  {
    id: 4,
    title: "Beef and Vegetable Stir-fry",
    description: "Quick and flavorful Asian-style stir-fry with tender beef strips and colorful vegetables.",
    ingredients: [
      "1 lb flank steak, thinly sliced against the grain",
      "2 tablespoons soy sauce",
      "1 tablespoon cornstarch",
      "2 tablespoons vegetable oil",
      "1 red bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "2 carrots, julienned",
      "1 cup broccoli florets",
      "4 cloves garlic, minced",
      "1-inch piece ginger, grated",
      "3 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "Sliced green onions for garnish"
    ],
    steps: [
      "In a bowl, mix sliced beef with soy sauce and cornstarch. Let marinate for 15 minutes.",
      "Heat 1 tablespoon vegetable oil in a wok or large frying pan over high heat.",
      "Add beef and stir-fry for 2-3 minutes until browned. Remove and set aside.",
      "Add remaining oil to the pan, then add garlic and ginger. Cook for 30 seconds.",
      "Add vegetables and stir-fry for 3-4 minutes until crisp-tender.",
      "Return beef to the pan, add oyster sauce, and toss to combine.",
      "Drizzle with sesame oil, garnish with green onions, and serve over rice."
    ],
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    prepTime: 25,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    tags: ["Asian", "Beef", "Stir-fry", "Dinner"],
    createdAt: "2023-05-05T18:20:00Z",
    updatedAt: "2023-05-05T18:20:00Z",
    ratings: [
      {
        id: 6,
        userId: 7,
        username: "asian_cuisine_fan",
        recipeId: 4,
        stars: 5,
        comment: "Just like takeout but healthier! Will definitely make again.",
        createdAt: "2023-05-06T19:45:00Z"
      }
    ]
  },
  {
    id: 5,
    title: "Fresh Greek Salad",
    description: "A refreshing Mediterranean salad with crisp vegetables, feta cheese, and tangy dressing.",
    ingredients: [
      "1 English cucumber, diced",
      "4 large tomatoes, diced",
      "1 red onion, thinly sliced",
      "1 green bell pepper, diced",
      "1/2 cup kalamata olives",
      "8 oz feta cheese, cubed",
      "2 tablespoons fresh oregano, chopped",
      "1/4 cup extra virgin olive oil",
      "3 tablespoons red wine vinegar",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste"
    ],
    steps: [
      "In a large bowl, combine cucumber, tomatoes, onion, bell pepper, and olives.",
      "In a small bowl, whisk together olive oil, red wine vinegar, dried oregano, salt, and pepper.",
      "Pour dressing over the vegetables and toss gently to combine.",
      "Top with cubed feta cheese and fresh oregano.",
      "Let sit for 10 minutes before serving to allow flavors to meld."
    ],
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082",
    prepTime: 15,
    cookTime: 0,
    servings: 6,
    difficulty: "Easy",
    tags: ["Greek", "Salad", "Vegetarian", "Healthy", "Summer"],
    createdAt: "2023-06-20T14:10:00Z",
    updatedAt: "2023-06-20T14:10:00Z",
    ratings: [
      {
        id: 7,
        userId: 8,
        username: "health_nut",
        recipeId: 5,
        stars: 5,
        comment: "So fresh and perfect for summer! I added some grilled chicken to make it a full meal.",
        createdAt: "2023-06-21T12:30:00Z"
      }
    ]
  },
  {
    id: 6,
    title: "Spicy Thai Coconut Soup (Tom Kha)",
    description: "A fragrant and spicy Thai soup with coconut milk, mushrooms, and traditional Thai herbs.",
    ingredients: [
      "4 cups chicken broth",
      "2 cans (13.5 oz each) coconut milk",
      "2-inch piece galangal or ginger, sliced",
      "2 stalks lemongrass, bruised and cut into 2-inch pieces",
      "5 kaffir lime leaves, torn",
      "8 oz mushrooms, sliced",
      "1 lb boneless chicken thighs, thinly sliced",
      "2 tablespoons fish sauce",
      "3 tablespoons lime juice",
      "2-3 Thai chili peppers, sliced",
      "1/4 cup cilantro leaves, chopped",
      "Green onions, sliced for garnish"
    ],
    steps: [
      "In a large pot, bring chicken broth and coconut milk to a simmer.",
      "Add galangal/ginger, lemongrass, and lime leaves. Simmer for 10 minutes.",
      "Add mushrooms and cook for 3 minutes.",
      "Add chicken and cook until no longer pink, about 5 minutes.",
      "Stir in fish sauce, lime juice, and chili peppers.",
      "Remove from heat, garnish with cilantro and green onions."
    ],
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853",
    prepTime: 20,
    cookTime: 25,
    servings: 6,
    difficulty: "Medium",
    tags: ["Thai", "Soup", "Spicy", "Dinner"],
    createdAt: "2023-01-25T17:40:00Z",
    updatedAt: "2023-01-25T17:40:00Z",
    ratings: [
      {
        id: 8,
        userId: 9,
        username: "spice_lover",
        recipeId: 6,
        stars: 5,
        comment: "Absolutely delicious and authentic tasting! I added some extra chili for more heat.",
        createdAt: "2023-01-27T20:15:00Z"
      }
    ]
  }
];

// Search function
export const searchRecipes = (query: string): Recipe[] => {
  query = query.toLowerCase();
  return dummyRecipes.filter(recipe => 
    recipe.title.toLowerCase().includes(query) || 
    recipe.description.toLowerCase().includes(query) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(query))
  );
};

// Get recipe by ID
export const getRecipeById = (id: number): Recipe | undefined => {
  return dummyRecipes.find(recipe => recipe.id === id);
};

// Add new recipe - this would normally be handled by the backend
export const addRecipe = (recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt' | 'ratings'>): Recipe => {
  const newRecipe: Recipe = {
    ...recipe,
    id: Math.max(...dummyRecipes.map(r => r.id)) + 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ratings: []
  };
  
  dummyRecipes.push(newRecipe);
  return newRecipe;
};

// Update existing recipe - this would normally be handled by the backend
export const updateRecipe = (id: number, updatedData: Partial<Recipe>): Recipe | undefined => {
  const index = dummyRecipes.findIndex(recipe => recipe.id === id);
  if (index === -1) return undefined;
  
  const updatedRecipe = {
    ...dummyRecipes[index],
    ...updatedData,
    updatedAt: new Date().toISOString()
  };
  
  dummyRecipes[index] = updatedRecipe;
  return updatedRecipe;
};

// Delete recipe - this would normally be handled by the backend
export const deleteRecipe = (id: number): boolean => {
  const index = dummyRecipes.findIndex(recipe => recipe.id === id);
  if (index === -1) return false;
  
  dummyRecipes.splice(index, 1);
  return true;
};
