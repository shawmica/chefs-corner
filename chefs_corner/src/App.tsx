import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminRecipes from "./pages/admin/Recipes";
import AdminAddRecipe from "./pages/admin/AddRecipe";
import AdminEditRecipe from "./pages/admin/EditRecipe";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotFound from "./pages/NotFound";
import RecipeDetailPage from "./pages/RecipeDetail";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              
              {/* ✅ Correct Route to RecipeDetailPage */}
              <Route path="recipes/:id" element={<RecipeDetailPage />} />

              <Route path="login" element={<Login />} />
              
              <Route path="admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
              <Route path="admin/recipes" element={<ProtectedRoute><AdminRecipes /></ProtectedRoute>} />
              <Route path="admin/recipes/add" element={<ProtectedRoute><AdminAddRecipe /></ProtectedRoute>} />
              <Route path="admin/recipes/edit/:id" element={<ProtectedRoute><AdminEditRecipe /></ProtectedRoute>} />
              
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;


