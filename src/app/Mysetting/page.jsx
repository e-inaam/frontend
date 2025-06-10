"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    User,
    Bell,
    Shield,
    Palette,
    CreditCard,
    Download,
    Globe,
    Eye,
    EyeOff,
    Check,
    X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Settings = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [notifications, setNotifications] = useState({
        courseUpdates: true,
        newCourses: false,
        achievements: true,
        reminders: true,
        marketing: false
    });

    const [privacy, setPrivacy] = useState({
        profileVisibility: 'public',
        showProgress: true,
        showCertificates: true,
        allowMessages: true
    });

    const handleNotificationChange = (key, value) => {
        setNotifications(prev => ({ ...prev, [key]: value }));
    };

    const handlePrivacyChange = (key, value) => {
        setPrivacy(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b border-border bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Home
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-foreground">Settings</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
                        <p className="text-muted-foreground">Manage your account preferences and settings</p>
                    </div>

                    <Tabs defaultValue="account" className="space-y-6">
                        <TabsList className="grid w-full grid-cols-5">
                            <TabsTrigger value="account" className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                Account
                            </TabsTrigger>
                            <TabsTrigger value="notifications" className="flex items-center gap-2">
                                <Bell className="w-4 h-4" />
                                Notifications
                            </TabsTrigger>
                            <TabsTrigger value="privacy" className="flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                Privacy
                            </TabsTrigger>
                            <TabsTrigger value="preferences" className="flex items-center gap-2">
                                <Palette className="w-4 h-4" />
                                Preferences
                            </TabsTrigger>
                            
                        </TabsList>

                        {/* Account Tab */}
                        <TabsContent value="account" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Profile Information</CardTitle>
                                    <CardDescription>Update your personal information</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" defaultValue="John" />
                                        </div>
                                        <div>
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" defaultValue="Doe" />
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" defaultValue="+1 (555) 123-4567" />
                                    </div>
                                    <Button>Save Changes</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Change Password</CardTitle>
                                    <CardDescription>Update your password to keep your account secure</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="currentPassword">Current Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="currentPassword"
                                                type={showCurrentPassword ? "text" : "password"}
                                                className="pr-10"
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-0 top-0 h-full px-3"
                                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                            >
                                                {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </Button>
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="newPassword">New Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="newPassword"
                                                type={showNewPassword ? "text" : "password"}
                                                className="pr-10"
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-0 top-0 h-full px-3"
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                            >
                                                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </Button>
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                className="pr-10"
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-0 top-0 h-full px-3"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            >
                                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </Button>
                                        </div>
                                    </div>
                                    <Button>Update Password</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Notifications Tab */}
                        <TabsContent value="notifications" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Email Notifications</CardTitle>
                                    <CardDescription>Choose which emails you'd like to receive</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label>Course Updates</Label>
                                            <p className="text-sm text-muted-foreground">
                                                Get notified when there are updates to your enrolled courses
                                            </p>
                                        </div>
                                        <Switch
                                            checked={notifications.courseUpdates}
                                            onCheckedChange={(checked) => handleNotificationChange('courseUpdates', checked)}
                                        />
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label>New Course Recommendations</Label>
                                            <p className="text-sm text-muted-foreground">
                                                Receive suggestions for new courses based on your interests
                                            </p>
                                        </div>
                                        <Switch
                                            checked={notifications.newCourses}
                                            onCheckedChange={(checked) => handleNotificationChange('newCourses', checked)}
                                        />
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label>Achievement Notifications</Label>
                                            <p className="text-sm text-muted-foreground">
                                                Get notified when you earn badges or complete milestones
                                            </p>
                                        </div>
                                        <Switch
                                            checked={notifications.achievements}
                                            onCheckedChange={(checked) => handleNotificationChange('achievements', checked)}
                                        />
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label>Learning Reminders</Label>
                                            <p className="text-sm text-muted-foreground">
                                                Reminders to continue your learning streak
                                            </p>
                                        </div>
                                        <Switch
                                            checked={notifications.reminders}
                                            onCheckedChange={(checked) => handleNotificationChange('reminders', checked)}
                                        />
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label>Marketing Communications</Label>
                                            <p className="text-sm text-muted-foreground">
                                                Receive news, promotions, and product updates
                                            </p>
                                        </div>
                                        <Switch
                                            checked={notifications.marketing}
                                            onCheckedChange={(checked) => handleNotificationChange('marketing', checked)}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Privacy Tab */}
                        <TabsContent value="privacy" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Privacy Settings</CardTitle>
                                    <CardDescription>Control your privacy and data sharing preferences</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <Label>Profile Visibility</Label>
                                        <Select
                                            value={privacy.profileVisibility}
                                            onValueChange={(value) => handlePrivacyChange('profileVisibility', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="public">Public - Anyone can see</SelectItem>
                                                <SelectItem value="students">Students only</SelectItem>
                                                <SelectItem value="private">Private - Only me</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label>Show Learning Progress</Label>
                                            <p className="text-sm text-muted-foreground">
                                                Allow others to see your course progress and achievements
                                            </p>
                                        </div>
                                        <Switch
                                            checked={privacy.showProgress}
                                            onCheckedChange={(checked) => handlePrivacyChange('showProgress', checked)}
                                        />
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label>Show Certificates</Label>
                                            <p className="text-sm text-muted-foreground">
                                                Display your earned certificates on your profile
                                            </p>
                                        </div>
                                        <Switch
                                            checked={privacy.showCertificates}
                                            onCheckedChange={(checked) => handlePrivacyChange('showCertificates', checked)}
                                        />
                                    </div>
                                    <Separator />
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label>Allow Messages</Label>
                                            <p className="text-sm text-muted-foreground">
                                                Let other students and instructors send you messages
                                            </p>
                                        </div>
                                        <Switch
                                            checked={privacy.allowMessages}
                                            onCheckedChange={(checked) => handlePrivacyChange('allowMessages', checked)}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Preferences Tab */}
                        <TabsContent value="preferences" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Learning Preferences</CardTitle>
                                    <CardDescription>Customize your learning experience</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Language</Label>
                                        <Select defaultValue="en">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="en">English</SelectItem>
                                                <SelectItem value="es">Spanish</SelectItem>
                                                <SelectItem value="fr">French</SelectItem>
                                                <SelectItem value="de">German</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Time Zone</Label>
                                        <Select defaultValue="pst">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Video Quality Preference</Label>
                                        <Select defaultValue="auto">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="auto">Auto (Recommended)</SelectItem>
                                                <SelectItem value="1080p">1080p HD</SelectItem>
                                                <SelectItem value="720p">720p</SelectItem>
                                                <SelectItem value="480p">480p</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Billing Tab */}
                        
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Settings;
