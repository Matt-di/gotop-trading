"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Lock, Save, Shield } from 'lucide-react';

interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  lastLogin?: string;
}

export function ProfileManager() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  
  // Profile form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProfile(data);
        setName(data.name);
        setEmail(data.email);
      } else {
        console.error('Failed to fetch profile');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        const data = await response.json();
        setProfile(data);
        alert('Profile updated successfully');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred');
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/profile/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      if (response.ok) {
        setPasswordSuccess('Password changed successfully');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        const data = await response.json();
        setPasswordError(data.error || 'Failed to change password');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setPasswordError('An error occurred');
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="text-center py-8">Failed to load profile</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Profile & Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profile Information
            </CardTitle>
            <CardDescription>
              Update your personal information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input
                  id="role"
                  value={profile.role}
                  disabled
                  className="bg-gray-50 dark:bg-gray-800"
                />
              </div>

              <Button type="submit" disabled={saving}>
                <Save className="h-4 w-4 mr-2" />
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Account Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Account Details
            </CardTitle>
            <CardDescription>
              Your account information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-sm text-gray-600 dark:text-gray-400">Account ID</Label>
              <p className="font-mono text-sm">{profile.id}</p>
            </div>

            <div>
              <Label className="text-sm text-gray-600 dark:text-gray-400">Member Since</Label>
              <p className="text-sm">
                {new Date(profile.createdAt).toLocaleDateString()}
              </p>
            </div>

            {profile.lastLogin && (
              <div>
                <Label className="text-sm text-gray-600 dark:text-gray-400">Last Login</Label>
                <p className="text-sm">
                  {new Date(profile.lastLogin).toLocaleString()}
                </p>
              </div>
            )}

            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowPasswordForm(!showPasswordForm)}
            >
              <Lock className="h-4 w-4 mr-2" />
              {showPasswordForm ? 'Cancel' : 'Change Password'}
            </Button>

            {showPasswordForm && (
              <form onSubmit={handleChangePassword} className="space-y-4 pt-4 border-t">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                {passwordError && (
                  <p className="text-sm text-red-600">{passwordError}</p>
                )}

                {passwordSuccess && (
                  <p className="text-sm text-green-600">{passwordSuccess}</p>
                )}

                <Button type="submit" className="w-full">
                  Update Password
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
