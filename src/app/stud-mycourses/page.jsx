"use client";

import React, { useState } from 'react';

import {
    ArrowLeft,
    BookOpen,
    Target,
    Heart,
    Award,
    Users,
    Globe,
    Lightbulb,
    Star,
    CheckCircle,
    Mail,
    Linkedin,
    Twitter,
    MoreHorizontal,
    FileText,
    HelpCircle,
    Eye,
    Download,
    Monitor,
    Calculator,
    Book
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Progress = () => {
    const enrolledCourses = [
        {
            title: 'Basic of English Language',
            progress: 20,
            total: 10,
            completed: 2,
            icon: BookOpen,
            color: 'bg-purple-100',
            status: 'in-progress'
        },
        {
            title: 'Introduction the web development',
            progress: 0,
            total: 10,
            completed: 0,
            icon: Monitor,
            color: 'bg-green-100',
            status: 'not-started'
        },
        {
            title: 'Basic data-structure and algorithm',
            progress: 100,
            total: 15,
            completed: 15,
            icon: Calculator,
            color: 'bg-purple-100',
            status: 'completed'
        },
        {
            title: 'Lorem ipsum codor le hala madrid',
            progress: 100,
            total: 12,
            completed: 12,
            icon: Book,
            color: 'bg-green-100',
            status: 'completed'
        }
    ];

    const stats = [
        { label: 'courses', value: '3/7', icon: BookOpen },
        { label: 'quizzes', value: '30/70', icon: FileText },
        { label: 'prototypes', value: '2', icon: Target },
        { label: 'hours learning', value: '2', icon: HelpCircle }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-background/95 backdrop-blur">
                <Header />
            </div>

            <div className="container mx-auto px-16 py-16 max-w-6xl">
                {/* All Status Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">All Status</h2>
                    
                    <Card className="bg-white border-gray-200 shadow-sm">
                        <CardContent className="p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                                {stats.map((stat, index) => {
                                    const IconComponent = stat.icon;
                                    return (
                                        <div key={index} className="text-center">
                                            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                                <IconComponent className="w-8 h-8 text-green-500" />
                                            </div>
                                            <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                                            <div className="text-base text-gray-500">{stat.label}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Enrolled Courses Section */}
                <div className="mb-16">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">Enrolled Courses</h2>
                        <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-base">
                            <BookOpen className="w-5 h-5 mr-2" />
                            COURSE CATALOG
                        </Button>
                    </div>

                    <div className="space-y-6">
                        {enrolledCourses.map((course, index) => (
                            <Card key={index} className="bg-white border-gray-200 shadow-sm">
                                <CardContent className="p-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-6 flex-1">
                                            <div className={`w-16 h-16 ${course.color} rounded-lg flex items-center justify-center`}>
                                                <course.icon className="w-8 h-8 text-gray-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-800 mb-2 text-lg">{course.title}</h3>
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-base text-gray-500">Progress</span>
                                                    <div className="w-40 bg-gray-200 rounded-full h-3">
                                                        <div 
                                                            className="bg-green-500 h-3 rounded-full" 
                                                            style={{ width: `${course.progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-6">
                                            {course.status === 'completed' && (
                                                <>
                                                    <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-600">
                                                        <Eye className="w-4 h-4 mr-1" />
                                                        View Certificate
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="hover:text-green-600">
                                                        <Download className="w-4 h-4" />
                                                    </Button>
                                                </>
                                            )}
                                            {course.status === 'in-progress' && (
                                                <div className="flex items-center space-x-3 text-base text-gray-500">
                                                    <FileText className="w-5 h-5" />
                                                    <span>{course.completed}/{course.total}</span>
                                                    <Target className="w-5 h-5" />
                                                    <span>3/5</span>
                                                </div>
                                            )}
                                            {course.status === 'not-started' && (
                                                <div className="flex items-center space-x-3 text-base text-gray-500">
                                                    <FileText className="w-5 h-5" />
                                                    <span>{course.completed}/{course.total}</span>
                                                </div>
                                            )}
                                            {course.status === 'completed' && (
                                                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-base">
                                                    Completed
                                                </span>
                                            )}
                                            <Button variant="ghost" size="sm" className="hover:text-green-600">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Progress;