
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import DashboardTabs from "./DashboardTabs";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { user: authUser, isLoading } = useAuth();
  
  useEffect(() => {
    // Check if user is logged in using AuthContext
    if (!isLoading) {
      if (authUser) {
        // Convert Supabase user to our User format
        const userData = {
          id: authUser.id,
          name: authUser.user_metadata?.name || authUser.email?.split('@')[0] || "User",
          email: authUser.email || "",
          phone: authUser.phone || "",
          createdAt: authUser.created_at
        };
        setUser(userData);
      } else {
        // Redirect to login if not logged in
        navigate("/login");
      }
    }
  }, [authUser, isLoading, navigate]);
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };
  
  if (isLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 md:px-6 py-8">
        <DashboardTabs user={user} />
      </main>
    </div>
  );
};

export default Dashboard;
