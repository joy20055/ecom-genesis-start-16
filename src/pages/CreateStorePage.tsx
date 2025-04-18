
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CreateStorePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Create New Store</CardTitle>
            <CardDescription>Set up your store's basic information</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Store creation form will be implemented here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateStorePage;
