
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StoreCreationForm from "@/components/StoreCreationForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const CreateStorePage = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      console.log("User not authenticated, redirecting to login");
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  // If user is not logged in, this will redirect in the useEffect above
  // If we're still rendering this component, it means the user is authenticated
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-xl">
        <Card>
          <CardHeader>
            <CardTitle>Create New Store</CardTitle>
            <CardDescription>Set up your store's basic information</CardDescription>
          </CardHeader>
          <CardContent>
            <StoreCreationForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateStorePage;
