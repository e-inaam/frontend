"use client"
import React, { useState } from 'react';

import { User, Mail, Phone, MapPin, Camera, BookOpen, Award, Clock, Settings, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        bio: 'Passionate learner and technology enthusiast. Always eager to expand my knowledge and skills through online courses.',
        avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80'
    });

    const courseProgress = [
        { title: 'React Fundamentals', progress: 85, totalLessons: 24, completedLessons: 20 },
        { title: 'JavaScript Advanced Concepts', progress: 62, totalLessons: 18, completedLessons: 11 },
        { title: 'UI/UX Design Principles', progress: 45, totalLessons: 16, completedLessons: 7 },
        { title: 'Node.js Backend Development', progress: 30, totalLessons: 22, completedLessons: 6 }
    ];

    const achievements = [
        { title: 'First Course Completed', description: 'Completed your first course', date: '2024-01-15' },
        { title: 'Quick Learner', description: 'Completed 3 courses in one month', date: '2024-02-20' },
        { title: 'Consistent Student', description: '30-day learning streak', date: '2024-03-10' }
    ];

    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically save to backend
        console.log('Profile saved:', profileData);
    };

    const handleInputChange = (field, value) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
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
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-foreground">algeria-bootcamp</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Profile Info Card */}
                        <div className="md:col-span-1">
                            <Card>
                                <CardHeader className="text-center">
                                    <div className="relative mx-auto mb-4">
                                        <Avatar className="w-24 h-24">
                                            <AvatarImage src={profileData.avatar} alt={profileData.name} />
                                            <AvatarFallback className="text-xl">
                                                {profileData.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        {isEditing && (
                                            <Button
                                                size="icon"
                                                variant="secondary"
                                                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full"
                                            >
                                                <Camera className="w-4 h-4" />
                                            </Button>
                                        )}
                                    </div>
                                    <CardTitle className="text-xl">{profileData.name}</CardTitle>
                                    <CardDescription>{profileData.email}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                        <Phone className="w-4 h-4" />
                                        <span>{profileData.phone}</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                        <MapPin className="w-4 h-4" />
                                        <span>{profileData.location}</span>
                                    </div>
                                    <div className="pt-4">
                                        <Button
                                            onClick={() => setIsEditing(!isEditing)}
                                            variant={isEditing ? "outline" : "default"}
                                            className="w-full"
                                        >
                                            <Settings className="w-4 h-4 mr-2" />
                                            {isEditing ? 'Cancel' : 'Edit Profile'}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Achievements */}
                            <Card className="mt-6">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Award className="w-5 h-5 mr-2 text-emerald-500" />
                                        Achievements
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {achievements.map((achievement, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Award className="w-4 h-4 text-emerald-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-sm">{achievement.title}</p>
                                                <p className="text-xs text-muted-foreground">{achievement.description}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-6">
                            {/* Profile Details */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Profile Information</CardTitle>
                                    <CardDescription>
                                        {isEditing ? 'Update your personal information' : 'Your personal information'}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="name">Full Name</Label>
                                            {isEditing ? (
                                                <Input
                                                    id="name"
                                                    value={profileData.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                    className="mt-1"
                                                />
                                            ) : (
                                                <p className="mt-1 text-sm">{profileData.name}</p>
                                            )}
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email</Label>
                                            {isEditing ? (
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={profileData.email}
                                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                                    className="mt-1"
                                                />
                                            ) : (
                                                <p className="mt-1 text-sm">{profileData.email}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="phone">Phone</Label>
                                            {isEditing ? (
                                                <Input
                                                    id="phone"
                                                    value={profileData.phone}
                                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                                    className="mt-1"
                                                />
                                            ) : (
                                                <p className="mt-1 text-sm">{profileData.phone}</p>
                                            )}
                                        </div>
                                        <div>
                                            <Label htmlFor="location">Location</Label>
                                            {isEditing ? (
                                                <Input
                                                    id="location"
                                                    value={profileData.location}
                                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                                    className="mt-1"
                                                />
                                            ) : (
                                                <p className="mt-1 text-sm">{profileData.location}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="bio">Bio</Label>
                                        {isEditing ? (
                                            <Textarea
                                                id="bio"
                                                value={profileData.bio}
                                                onChange={(e) => handleInputChange('bio', e.target.value)}
                                                className="mt-1"
                                                rows={3}
                                            />
                                        ) : (
                                            <p className="mt-1 text-sm">{profileData.bio}</p>
                                        )}
                                    </div>
                                    {isEditing && (
                                        <div className="flex space-x-3 pt-4">
                                            <Button onClick={handleSave} className="bg-emerald-500 hover:bg-emerald-600">
                                                Save Changes
                                            </Button>
                                            <Button variant="outline" onClick={() => setIsEditing(false)}>
                                                Cancel
                                            </Button>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Course Progress */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <BookOpen className="w-5 h-5 mr-2" />
                                        Course Progress
                                    </CardTitle>
                                    <CardDescription>Your learning journey and progress</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {courseProgress.map((course, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <h4 className="font-medium">{course.title}</h4>
                                                <span className="text-sm text-muted-foreground">
                                                    {course.completedLessons}/{course.totalLessons} lessons
                                                </span>
                                            </div>
                                            <div className="w-full bg-secondary rounded-full h-2">
                                                <div
                                                    className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${course.progress}%` }}
                                                />
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-muted-foreground">{course.progress}% complete</span>
                                                <Button variant="ghost" size="sm">
                                                    Continue Learning
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Learning Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <BookOpen className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                                        <h3 className="text-2xl font-bold">12</h3>
                                        <p className="text-muted-foreground">Courses Enrolled</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <Award className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                                        <h3 className="text-2xl font-bold">8</h3>
                                        <p className="text-muted-foreground">Certificates Earned</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <Clock className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                                        <h3 className="text-2xl font-bold">47h</h3>
                                        <p className="text-muted-foreground">Learning Time</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;