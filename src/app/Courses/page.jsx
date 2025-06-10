"use client"
import React, { useState } from 'react';
import {
    BookOpen,
    Clock,
    Star,
    Users,
    Filter,
    Search,
    ArrowLeft,
    Grid,
    List,
    ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Courses = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLevel, setSelectedLevel] = useState('all');
    const [sortBy, setSortBy] = useState('popular');
    const [viewMode, setViewMode] = useState('grid');

    const courses = [
        {
            id: 1,
            title: 'Complete React Development Course',
            instructor: 'Sarah Johnson',
            price: 89.99,
            originalPrice: 129.99,
            rating: 4.8,
            students: 15420,
            duration: '32 hours',
            lessons: 156,
            level: 'Intermediate',
            category: 'Programming',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80',
            description: 'Master React from basics to advanced concepts with hands-on projects.',
            bestseller: true
        },
        {
            id: 2,
            title: 'JavaScript Fundamentals for Beginners',
            instructor: 'Mike Chen',
            price: 59.99,
            originalPrice: 89.99,
            rating: 4.6,
            students: 23150,
            duration: '24 hours',
            lessons: 120,
            level: 'Beginner',
            category: 'Programming',
            image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=400&q=80',
            description: 'Learn JavaScript from scratch and build interactive web applications.'
        },
        {
            id: 3,
            title: 'UI/UX Design Masterclass',
            instructor: 'Emma Davis',
            price: 79.99,
            originalPrice: 119.99,
            rating: 4.9,
            students: 8750,
            duration: '28 hours',
            lessons: 95,
            level: 'Intermediate',
            category: 'Design',
            image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=400&q=80',
            description: 'Create stunning user interfaces and experiences with modern design principles.'
        },
        {
            id: 4,
            title: 'Digital Marketing Strategy',
            instructor: 'David Wilson',
            price: 69.99,
            originalPrice: 99.99,
            rating: 4.7,
            students: 12300,
            duration: '20 hours',
            lessons: 85,
            level: 'Beginner',
            category: 'Marketing',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
            description: 'Master digital marketing tactics to grow your business online.'
        },
        {
            id: 5,
            title: 'Python for Data Science',
            instructor: 'Dr. Lisa Brown',
            price: 94.99,
            originalPrice: 149.99,
            rating: 4.8,
            students: 18600,
            duration: '40 hours',
            lessons: 180,
            level: 'Advanced',
            category: 'Data Science',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
            description: 'Learn Python programming and data analysis for real-world applications.',
            bestseller: true
        },
        {
            id: 6,
            title: 'Photography Basics',
            instructor: 'James Anderson',
            price: 49.99,
            originalPrice: 79.99,
            rating: 4.5,
            students: 9200,
            duration: '16 hours',
            lessons: 65,
            level: 'Beginner',
            category: 'Creative',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80',
            description: 'Master the art of photography with practical techniques and tips.'
        }
    ];

    const categories = ['all', 'Programming', 'Design', 'Marketing', 'Data Science', 'Creative', 'Business'];
    const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
        const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
        return matchesSearch && matchesCategory && matchesLevel;
    });

    const sortedCourses = [...filteredCourses].sort((a, b) => {
        switch (sortBy) {
            case 'popular':
                return b.students - a.students;
            case 'rating':
                return b.rating - a.rating;
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'newest':
                return b.id - a.id;
            default:
                return 0;
        }
    });

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className=" bg-background/95 backdrop-blur">
                <Header/>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Explore Our Courses</h1>
                        <p className="text-muted-foreground">
                            Discover {courses.length} courses to advance your skills and career
                        </p>
                    </div>

                    {/* Filters and Search */}
                    <div className="mb-8 space-y-4">
                        <div className="flex flex-col lg:flex-row gap-4">
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
                            <div className="flex gap-2 flex-wrap">
                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                    <SelectTrigger className="w-48">
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map(category => (
                                            <SelectItem key={category} value={category}>
                                                {category === 'all' ? 'All Categories' : category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                                    <SelectTrigger className="w-40">
                                        <SelectValue placeholder="Level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {levels.map(level => (
                                            <SelectItem key={level} value={level}>
                                                {level === 'all' ? 'All Levels' : level}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">
                                            Sort by <ChevronDown className="w-4 h-4 ml-1" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => setSortBy('popular')}>Most Popular</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setSortBy('rating')}>Highest Rated</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setSortBy('newest')}>Newest</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setSortBy('price-low')}>Price: Low to High</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setSortBy('price-high')}>Price: High to Low</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <div className="flex border border-border rounded-md">
                                    <Button
                                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                                        size="sm"
                                        onClick={() => setViewMode('grid')}
                                        className="rounded-r-none"
                                    >
                                        <Grid className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant={viewMode === 'list' ? 'default' : 'ghost'}
                                        size="sm"
                                        onClick={() => setViewMode('list')}
                                        className="rounded-l-none"
                                    >
                                        <List className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Grid/List */}
                    <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
                        {sortedCourses.map((course) => (
                            <Card key={course.id} className={`group hover:shadow-lg transition-shadow duration-200 ${viewMode === 'list' ? 'flex flex-row' : ''}`}>
                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'rounded-t-lg'}`}>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className={`object-cover group-hover:scale-105 transition-transform duration-200 ${viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'}`}
                                    />
                                    {course.bestseller && (
                                        <div className="absolute top-2 left-2">
                                            <Badge className="bg-orange-500 text-white">Bestseller</Badge>
                                        </div>
                                    )}
                                    <div className="absolute top-2 right-2">
                                        <Badge variant="secondary">{course.level}</Badge>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <CardHeader className={viewMode === 'list' ? 'pb-2' : ''}>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className={`${viewMode === 'list' ? 'text-lg' : 'text-base'} line-clamp-2`}>
                                                {course.title}
                                            </CardTitle>
                                        </div>
                                        <CardDescription>
                                            By {course.instructor}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {viewMode === 'list' && (
                                                <p className="text-sm text-muted-foreground line-clamp-2">
                                                    {course.description}
                                                </p>
                                            )}
                                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                                <div className="flex items-center">
                                                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                                    {course.rating}
                                                </div>
                                                <div className="flex items-center">
                                                    <Users className="w-4 h-4 mr-1" />
                                                    {course.students.toLocaleString()}
                                                </div>
                                                <div className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {course.duration}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                {/* <div className="flex items-center space-x-2">
                                                    <span className="text-lg font-bold">${course.price}</span>
                                                    <span className="text-sm text-muted-foreground line-through">
                                                        ${course.originalPrice}
                                                    </span>
                                                </div> */}
                                                <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                                                    Enroll Now
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {sortedCourses.length === 0 && (
                        <div className="text-center py-12">
                            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No courses found</h3>
                            <p className="text-muted-foreground mb-4">
                                Try adjusting your search criteria or filters
                            </p>
                            <Button onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setSelectedLevel('all');
                            }}>
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Courses;