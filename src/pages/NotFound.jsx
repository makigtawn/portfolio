import { Link } from "react-router-dom";
import { Button } from "@/components/Button";

export const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="text-muted-foreground max-w-sm mx-auto">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Button to="/" size="sm">
          Back home
        </Button>
      </div>
    </section>
  );
};
