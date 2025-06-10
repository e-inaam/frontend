"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {
    BookOpen,
    Clock,
    Play,
    Filter,
    Search,
    ArrowLeft,
    MoreVertical,
    Star,
    CheckCircle,
    Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const MyCourses = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    const courses = [
        {
            id: 1,
            title: 'React Fundamentals',
            instructor: 'Sarah Johnson',
            progress: 85,
            totalLessons: 24,
            completedLessons: 20,
            duration: '12 hours',
            status: 'in-progress',
            enrolledDate: '2024-01-15',
            lastAccessed: '2 days ago',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 2,
            title: 'JavaScript Advanced Concepts',
            instructor: 'Mike Chen',
            progress: 62,
            totalLessons: 18,
            completedLessons: 11,
            duration: '15 hours',
            status: 'in-progress',
            enrolledDate: '2024-02-01',
            lastAccessed: '1 week ago',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 3,
            title: 'UI/UX Design Principles',
            instructor: 'Emma Davis',
            progress: 100,
            totalLessons: 16,
            completedLessons: 16,
            duration: '10 hours',
            status: 'completed',
            enrolledDate: '2023-12-10',
            lastAccessed: '1 month ago',
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 4,
            title: 'Node.js Backend Development',
            instructor: 'David Wilson',
            progress: 30,
            totalLessons: 22,
            completedLessons: 6,
            duration: '20 hours',
            status: 'in-progress',
            enrolledDate: '2024-03-01',
            lastAccessed: '3 days ago',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=400&q=80'
        }
    ];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filterStatus === 'all' || course.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const getStatusBadge = (status) => {
        switch (status) {
            case 'completed':
                return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
            case 'in-progress':
                return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
            default:
                return <Badge className="bg-gray-100 text-gray-800">Not Started</Badge>;
        }
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
                            <span className="text-xl font-bold text-foreground">My Courses</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">My Learning Journey</h1>
                        <p className="text-muted-foreground">Track your progress and continue learning</p>
                    </div>

                    {/* Filters and Search */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                <Input
                                    placeholder="Search courses or instructors..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Select value={filterStatus} onValueChange={setFilterStatus}>
                                <SelectTrigger className="w-48">
                                    <Filter className="w-4 h-4 mr-2" />
                                    <SelectValue placeholder="Filter by status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Courses</SelectItem>
                                    <SelectItem value="in-progress">In Progress</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="not-started">Not Started</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center">
                                    <BookOpen className="w-8 h-8 text-emerald-500" />
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
                                        <p className="text-2xl font-bold">{courses.length}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center">
                                    <Play className="w-8 h-8 text-blue-500" />
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                                        <p className="text-2xl font-bold">{courses.filter(c => c.status === 'in-progress').length}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-muted-foreground">Completed</p>
                                        <p className="text-2xl font-bold">{courses.filter(c => c.status === 'completed').length}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center">
                                    <Clock className="w-8 h-8 text-purple-500" />
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-muted-foreground">Hours Learned</p>
                                        <p className="text-2xl font-bold">47</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map((course) => (
                            <Card key={course.id} className="group hover:shadow-lg transition-shadow duration-200">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="secondary" size="icon" className="w-8 h-8">
                                                    <MoreVertical className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Continue Learning</DropdownMenuItem>
                                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                                <DropdownMenuItem>Download Resources</DropdownMenuItem>
                                                <DropdownMenuItem className="text-red-600">Unenroll</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        {getStatusBadge(course.status)}
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-lg">{course.title}</CardTitle>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                            {course.rating}
                                        </div>
                                    </div>
                                    <CardDescription>
                                        By {course.instructor} • {course.duration}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span>Progress</span>
                                                <span>{course.progress}%</span>
                                            </div>
                                            <Progress value={course.progress} className="h-2" />
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {course.completedLessons} of {course.totalLessons} lessons completed
                                            </p>
                                        </div>
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            Last accessed {course.lastAccessed}
                                        </div>
                                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                                            {course.status === 'completed' ? 'Review Course' : 'Continue Learning'}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <div className="text-center py-12">
                            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No courses found</h3>
                            <p className="text-muted-foreground mb-4">
                                {searchQuery ? 'Try adjusting your search criteria' : 'Start your learning journey today!'}
                            </p>
                            <Button asChild>
                                <Link to="/">Browse Courses</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyCourses;
