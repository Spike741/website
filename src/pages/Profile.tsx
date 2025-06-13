
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import RecentProducts from '@/components/RecentProducts';
import CartHistorySection from '@/components/CartHistorySection';

const Profile = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-ivory">
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-maroon">My Profile</CardTitle>
            <CardDescription>Manage your account and view your activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <p className="text-gray-900">{user?.email}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Account Status</label>
                <p className="text-green-600">Active</p>
              </div>
              
              <Separator />
              
              <Button 
                onClick={handleSignOut}
                variant="outline"
                className="border-red-200 text-red-600 hover:bg-red-50"
              >
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Products Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <RecentProducts />
          </CardContent>
        </Card>

        {/* Cart History Section */}
        <Card>
          <CardContent className="p-6">
            <CartHistorySection />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
