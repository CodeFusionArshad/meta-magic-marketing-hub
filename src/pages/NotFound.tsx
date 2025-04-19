
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-marketing-lightgray">
      <div className="text-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold text-marketing-blue mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">Oops! Page not found</p>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button 
          className="bg-marketing-blue hover:bg-marketing-darkblue"
          onClick={() => window.location.href = "/"}
        >
          <Home className="mr-2 h-4 w-4" /> Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
