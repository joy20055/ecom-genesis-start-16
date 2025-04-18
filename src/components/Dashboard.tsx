
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Users, DollarSign, BarChart2, LogOut } from "lucide-react";

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
  
  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Redirect to login if not logged in
      navigate("/login");
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  
  if (!user) {
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
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Welcome back, {user.name.split(" ")[0]}!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="mr-4 bg-blue-100 p-2 rounded-md">
                    <DollarSign className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">$0</p>
                    <p className="text-xs text-gray-500">+0% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="mr-4 bg-green-100 p-2 rounded-md">
                    <ShoppingBag className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">0</p>
                    <p className="text-xs text-gray-500">+0% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="mr-4 bg-purple-100 p-2 rounded-md">
                    <Users className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">0</p>
                    <p className="text-xs text-gray-500">+0% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="mr-4 bg-orange-100 p-2 rounded-md">
                    <BarChart2 className="text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">0%</p>
                    <p className="text-xs text-gray-500">+0% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Complete these steps to set up your store
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mr-3">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Create your first store</h3>
                    <p className="text-sm text-gray-500">Choose a name and template for your store</p>
                    <Button className="mt-2 bg-brand-600 hover:bg-brand-700">Create Store</Button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mr-3">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-500">Add your first product</h3>
                    <p className="text-sm text-gray-500">Upload images, set prices, and add descriptions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mr-3">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-500">Set up payments</h3>
                    <p className="text-sm text-gray-500">Connect payment gateways to start accepting orders</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
