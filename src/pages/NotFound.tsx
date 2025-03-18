
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-blue-500 text-4xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Page not found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been removed, renamed, or is temporarily unavailable.
        </p>
        <Button asChild className="bg-blue-light hover:bg-blue-dark transition-all font-medium">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Return to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
