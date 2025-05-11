import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Recipe } from "@/types/recipe"; // ✅ Ensure correct path

interface RecipeTableProps {
  recipes: Recipe[];
  onDelete: (id: number) => void;
}

export const RecipeTable = ({ recipes, onDelete }: RecipeTableProps) => {
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setSelectedRecipeId(id);
  };

  const handleConfirmDelete = () => {
    if (selectedRecipeId !== null) {
      onDelete(selectedRecipeId);
      setSelectedRecipeId(null);
    }
  };

  const handleCancelDelete = () => {
    setSelectedRecipeId(null);
  };

  return (
    <>
      <div className="relative rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recipes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                  No recipes found
                </TableCell>
              </TableRow>
            ) : (
              recipes.map((recipe) => {
                // ✅ Normalize tags into a proper array
                const safeTags = Array.isArray(recipe.tags)
                  ? recipe.tags
                  : typeof recipe.tags === "string"
                  ? recipe.tags.split(",").map((tag) => tag.trim())
                  : [];

                return (
                  <TableRow key={recipe.id}>
                    <TableCell className="font-medium">
                      <Link to={`/recipes/${recipe.id}`} className="hover:text-primary">
                        {recipe.title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {recipe.createdAt
                        ? new Date(recipe.createdAt).toLocaleDateString()
                        : "N/A"}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`${
                          recipe.difficulty === "Easy"
                            ? "border-sage-400 text-sage-600"
                            : recipe.difficulty === "Medium"
                            ? "border-terracotta-400 text-terracotta-600"
                            : recipe.difficulty === "Hard"
                            ? "border-red-400 text-red-600"
                            : "border-gray-300 text-gray-600"
                        }`}
                      >
                        {recipe.difficulty || "Unknown"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {safeTags.slice(0, 3).map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {safeTags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{safeTags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Actions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link to={`/admin/recipes/edit/${recipe.id}`}>
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDeleteClick(recipe.id)}
                            className="text-destructive"
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog
        open={selectedRecipeId !== null}
        onOpenChange={(open) => !open && setSelectedRecipeId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              recipe.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelDelete}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
