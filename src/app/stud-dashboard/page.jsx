"use client";
import React from 'react';

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
    TrendingUp,
    Clock,
    User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
    const [selectedPeriod, setSelectedPeriod] = React.useState('week');

    const overviewStats = [
        { label: 'Courses in progress', value: '150+', icon: BookOpen, color: 'bg-blue-500' },
        { label: 'Active Instructors', value: '500+', icon: Users, color: 'bg-green-500' },
        { label: 'Hours Learning', value: '1.2 hr', icon: Clock, color: 'bg-purple-500' },
        { label: 'Community Score', value: '9.2', icon: Star, color: 'bg-orange-500' }
    ];

    const progressData = [
        { day: 'MON', value: 65, color: 'bg-emerald-400' },
        { day: 'TUE', value: 45, color: 'bg-emerald-300' },
        { day: 'WED', value: 85, color: 'bg-emerald-500' },
        { day: 'THU', value: 35, color: 'bg-emerald-200' },
        { day: 'FRI', value: 55, color: 'bg-emerald-300' },
        { day: 'SAT', value: 75, color: 'bg-emerald-400' },
        { day: 'SUN', value: 40, color: 'bg-emerald-200' }
    ];
    
    const monthlyData = [
        { day: 'JAN', value: 60, color: 'bg-emerald-400' },
        { day: 'FEB', value: 75, color: 'bg-emerald-500' },
        { day: 'MAR', value: 45, color: 'bg-emerald-300' },
        { day: 'APR', value: 80, color: 'bg-emerald-500' },
        { day: 'MAY', value: 55, color: 'bg-emerald-400' },
        { day: 'JUN', value: 90, color: 'bg-emerald-600' },
        { day: 'JUL', value: 70, color: 'bg-emerald-500' },
        { day: 'AUG', value: 40, color: 'bg-emerald-200' },
        { day: 'SEP', value: 65, color: 'bg-emerald-400' },
        { day: 'OCT', value: 85, color: 'bg-emerald-500' },
        { day: 'NOV', value: 50, color: 'bg-emerald-300' },
        { day: 'DEC', value: 75, color: 'bg-emerald-500' }
    ];

    const courses = [
        {
            title: 'Introduction to Web Development',
            instructor: 'Sarah Johnson',
            progress: 75,
            color: 'bg-purple-100 border-purple-200',
            progressColor: 'bg-purple-500'
        },
        {
            title: 'Advanced React & JavaScript',
            instructor: 'Michael Chen',
            progress: 60,
            color: 'bg-blue-100 border-blue-200',
            progressColor: 'bg-blue-500'
        },
        {
            title: 'UI/UX Design Fundamentals',
            instructor: 'Emma Davis',
            progress: 90,
            color: 'bg-emerald-100 border-emerald-200',
            progressColor: 'bg-emerald-500'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-background/95 backdrop-blur">
                <Header />
            </div>

            <div className="container mx-auto px-6 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Overview Stats */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">OVERVIEW</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {overviewStats.map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <Card key={index} className="bg-white border-gray-200 shadow-sm">
                                        <CardContent className="p-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                                                    <IconComponent className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                            <div className="text-sm text-gray-500">{stat.label}</div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Dashboard Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        {/* Study Statistics */}
                        <div className="lg:col-span-2">
                            <Card className="bg-white border-gray-200 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold text-gray-800">STUDY STATISTICS</CardTitle>
                                    <div className="flex space-x-1 mt-2 bg-gray-100 rounded-lg p-1 w-fit">
                                        <button 
                                            onClick={() => setSelectedPeriod('week')}
                                            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                                selectedPeriod === 'week' 
                                                    ? 'bg-white text-gray-700 shadow-sm' 
                                                    : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                        >
                                            week
                                        </button>
                                        <button 
                                            onClick={() => setSelectedPeriod('month')}
                                            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                                selectedPeriod === 'month' 
                                                    ? 'bg-white text-gray-700 shadow-sm' 
                                                    : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                        >
                                            month
                                        </button>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-end justify-between h-48 px-4">
                                        {(selectedPeriod === 'week' ? progressData : monthlyData).map((item, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div 
                                                    className={`w-8 ${item.color} rounded-t-sm mb-2 transition-all hover:opacity-80`}
                                                    style={{ height: `${item.value}%` }}
                                                ></div>
                                                <span className="text-xs font-medium text-gray-600">{item.day}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Progress Circle */}
                        <div>
                            <Card className="bg-white border-gray-200 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold text-gray-800">PROGRESS</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center">
                                    <div className="relative w-32 h-32 mb-4">
                                        <svg className="w-32 h-32 transform -rotate-90">
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="#e5e7eb"
                                                strokeWidth="8"
                                                fill="transparent"
                                            />
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="#10b981"
                                                strokeWidth="8"
                                                fill="transparent"
                                                strokeDasharray={`${2 * Math.PI * 56}`}
                                                strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.75)}`}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-gray-900">75%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                                            <span className="text-gray-600">Courses</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                                            <span className="text-gray-600">Remaining</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* My Courses */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">MY COURSES</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {courses.map((course, index) => (
                                <Card key={index} className={`${course.color} shadow-sm`}>
                                    <CardHeader className="pb-4">
                                        <div className="flex items-start justify-between">
                                            <div className="w-10 h-10 bg-white/50 rounded-lg flex items-center justify-center">
                                                <BookOpen className="w-5 h-5 text-gray-700" />
                                            </div>
                                            <button className="text-gray-500 hover:text-gray-700">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <CardTitle className="text-lg font-semibold text-gray-900 mt-4">
                                            {course.title}
                                        </CardTitle>
                                        <div className="flex items-center text-sm text-gray-600 mt-2">
                                            <User className="w-4 h-4 mr-1" />
                                            {course.instructor}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="relative w-24 h-24 mx-auto">
                                            <svg className="w-24 h-24 transform -rotate-90">
                                                <circle
                                                    cx="48"
                                                    cy="48"
                                                    r="40"
                                                    stroke="#e5e7eb"
                                                    strokeWidth="6"
                                                    fill="transparent"
                                                />
                                                <circle
                                                    cx="48"
                                                    cy="48"
                                                    r="40"
                                                    stroke="currentColor"
                                                    strokeWidth="6"
                                                    fill="transparent"
                                                    strokeDasharray={`${2 * Math.PI * 40}`}
                                                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - course.progress / 100)}`}
                                                    strokeLinecap="round"
                                                    className="text-emerald-500"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-lg font-bold text-gray-900">{course.progress}%</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>                    
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default About;