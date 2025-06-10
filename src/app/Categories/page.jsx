"use client "
import React from 'react';

import {
    Code,
    Palette,
    TrendingUp,
    BarChart,
    Camera,
    Briefcase,
    Monitor,
    Laptop,
    ArrowLeft,
    BookOpen,
    Users,
    Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: 'Programming',
            description: 'Learn coding languages and software development',
            icon: Code,
            courses: 156,
            students: 45600,
            color: 'bg-blue-500',
            subcategories: ['Web Development', 'Mobile Apps', 'Data Structures', 'Algorithms'],
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 2,
            name: 'Design',
            description: 'Master visual design and user experience',
            icon: Palette,
            courses: 89,
            students: 28300,
            color: 'bg-purple-500',
            subcategories: ['UI/UX Design', 'Graphic Design', 'Web Design', 'Brand Identity'],
            image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 3,
            name: 'Marketing',
            description: 'Digital marketing strategies and tactics',
            icon: TrendingUp,
            courses: 73,
            students: 32100,
            color: 'bg-green-500',
            subcategories: ['Digital Marketing', 'Social Media', 'SEO', 'Content Marketing'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 4,
            name: 'Data Science',
            description: 'Analytics, machine learning, and data visualization',
            icon: BarChart,
            courses: 92,
            students: 19800,
            color: 'bg-orange-500',
            subcategories: ['Machine Learning', 'Data Analysis', 'Statistics', 'Python'],
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 5,
            name: 'Creative',
            description: 'Photography, video editing, and creative arts',
            icon: Camera,
            courses: 65,
            students: 15700,
            color: 'bg-pink-500',
            subcategories: ['Photography', 'Video Editing', 'Animation', 'Digital Art'],
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 6,
            name: 'Business',
            description: 'Entrepreneurship, management, and leadership',
            icon: Briefcase,
            courses: 84,
            students: 22500,
            color: 'bg-indigo-500',
            subcategories: ['Leadership', 'Project Management', 'Finance', 'Strategy'],
            image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80'
        }
    ];

    const popularCourses = [
        { name: 'Complete React Development', category: 'Programming', students: 15420 },
        { name: 'UI/UX Design Masterclass', category: 'Design', students: 8750 },
        { name: 'Digital Marketing Strategy', category: 'Marketing', students: 12300 },
        { name: 'Python for Data Science', category: 'Data Science', students: 18600 }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className=" bg-background/95 backdrop-blur">
                <Header />
                
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Page Header */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold mb-4">Explore by Category</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Choose from our diverse range of course categories and start your learning journey today
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-500 mb-2">500+</div>
                            <div className="text-muted-foreground">Total Courses</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-500 mb-2">150K+</div>
                            <div className="text-muted-foreground">Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-500 mb-2">50+</div>
                            <div className="text-muted-foreground">Expert Instructors</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-500 mb-2">95%</div>
                            <div className="text-muted-foreground">Completion Rate</div>
                        </div>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {categories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                                <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-emerald-200">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-xl">{category.name}</CardTitle>
                                        <CardDescription className="text-base">
                                            {category.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center text-muted-foreground">
                                                    <BookOpen className="w-4 h-4 mr-1" />
                                                    {category.courses} courses
                                                </div>
                                                <div className="flex items-center text-muted-foreground">
                                                    <Users className="w-4 h-4 mr-1" />
                                                    {category.students.toLocaleString()} students
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                                {category.subcategories.map((sub, index) => (
                                                    <Badge key={index} variant="secondary" className="text-xs">
                                                        {sub}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                                                Explore {category.name}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Popular Courses Section */}
                    <div className="bg-muted rounded-lg p-8">
                        <h2 className="text-2xl font-bold mb-6">Popular Courses by Category</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {popularCourses.map((course, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg">
                                    <div>
                                        <h3 className="font-semibold">{course.name}</h3>
                                        <p className="text-sm text-muted-foreground">{course.category}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Users className="w-4 h-4 mr-1" />
                                            {course.students.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16">
                        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
                        <p className="text-muted-foreground mb-8">
                            Join thousands of students and advance your skills with our expert-led courses
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/Courses" >
                            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                                Browse All Courses
                            </Button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Categories;