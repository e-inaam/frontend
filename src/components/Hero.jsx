
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, BookOpen, Users, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                                🎓 Learn at Your Own Pace
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                                Master New Skills with
                                <span className="text-emerald-600"> Expert-Led </span>
                                Courses
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Join thousands of learners worldwide and unlock your potential with our comprehensive online courses. Learn from industry experts and advance your career.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                                Start Learning Today
                            </Button>
                            <Button variant="outline" size="lg" className="group">
                                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                Watch Demo
                            </Button>
                        </div>

                        {/* Statistics */}
                        <div className="flex items-center space-x-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-foreground">5K+</div>
                                <div className="text-sm text-muted-foreground">Active Students</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-foreground">1,200+</div>
                                <div className="text-sm text-muted-foreground">Expert Courses</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-foreground">4.8★</div>
                                <div className="text-sm text-muted-foreground">Average Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual Side */}
                    <div className="relative">
                        <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                                alt="Student learning online"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Elements */}
                            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                                <div className="flex items-center space-x-2">
                                    <BookOpen className="w-5 h-5 text-emerald-600" />
                                    <span className="text-sm font-medium">12 Courses Active</span>
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                                <div className="flex items-center space-x-2">
                                    <Users className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium">2K Students Online</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full animate-bounce opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full animate-bounce opacity-20" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;