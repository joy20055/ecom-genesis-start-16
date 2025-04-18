import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, UserRound, Eye, Settings, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DashboardTabs = ({ user }: { user: { name: string; email: string } }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button 
          size="lg" 
          onClick={() => navigate("/create-store")}
          className="bg-green-600 hover:bg-green-700"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Create New Store
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stores">Stores</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Welcome back!</CardTitle>
                <CardDescription>
                  Here's what's happening with your stores today.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button 
                    className="w-full"
                    size="lg"
                    onClick={() => navigate("/create-store")}
                  >
                    <Store className="mr-2 h-5 w-5" />
                    Create New Store
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    size="lg"
                    onClick={() => navigate("/my-stores")}
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View My Stores
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Details</CardTitle>
                <CardDescription>Your account information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <UserRound className="h-5 w-5 text-gray-500" />
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-600">{user.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="stores">
          <Card>
            <CardHeader>
              <CardTitle>Your Stores</CardTitle>
              <CardDescription>Manage and view your stores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full" onClick={() => navigate("/create-store")}>
                  <Store className="mr-2 h-5 w-5" />
                  Create New Store
                </Button>
                <Button variant="outline" className="w-full" onClick={() => navigate("/my-stores")}>
                  <Eye className="mr-2 h-5 w-5" />
                  View All Stores
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your profile information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <p className="p-2 bg-gray-50 rounded">{user.name}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <p className="p-2 bg-gray-50 rounded">{user.email}</p>
                </div>
                <Button variant="outline" className="w-full">
                  <UserRound className="mr-2 h-5 w-5" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full">
                  <Settings className="mr-2 h-5 w-5" />
                  Account Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardTabs;
