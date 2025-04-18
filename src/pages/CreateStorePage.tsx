
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StoreCreationForm from "@/components/StoreCreationForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const CreateStorePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

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
