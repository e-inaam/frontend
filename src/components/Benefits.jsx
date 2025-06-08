
import React from 'react';
import { Clock, Users, Award, BookOpen, Video, Globe, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Benefits = () => {
    const mainBenefits = [
        {
            icon: Clock,
            title: "Learn at Your Own Pace",
            description: "Access courses 24/7 and learn when it's convenient for you. No fixed schedules or deadlines.",
            highlight: "Flexible Learning"
        },
        {
            icon: Users,
            title: "Expert Instructors",
            description: "Learn from industry professionals with years of real-world experience and proven track records.",
            highlight: "World-Class Teachers"
        },
        {
            icon: Award,
            title: "Recognized Certificates",
            description: "Earn certificates that are recognized by employers and add value to your professional profile.",
            highlight: "Career Advancement"
        },
        {
            icon: Video,
            title: "High-Quality Content",
            description: "Access HD video lectures, interactive quizzes, and downloadable resources for comprehensive learning.",
            highlight: "Premium Content"
        }
    ];

    const additionalFeatures = [
        "Lifetime access to purchased courses",
        "Mobile app for learning on the go",
        "Community forums and peer interaction",
        "Regular course updates and new content",
        "Multi-language subtitle support",
        "Offline viewing capabilities"
    ];

    const stats = [
        { value: "50,000+", label: "Active Students" },
        { value: "1,200+", label: "Expert Courses" },
        { value: "98%", label: "Completion Rate" },
        { value: "4.8/5", label: "Average Rating" }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        ✨ Why Choose Us
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        Unlock Your Potential with Our
                        <span className="text-emerald-600"> Premium Learning </span>
                        Experience
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Join thousands of successful learners who have transformed their careers with our comprehensive online courses and expert guidance.
                    </p>
                </div>

                {/* Main Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {mainBenefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                                <CardHeader className="text-center pb-4">
                                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                                        <IconComponent className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <div className="text-xs font-medium text-emerald-600 uppercase tracking-wide mb-2">
                                        {benefit.highlight}
                                    </div>
                                    <CardTitle className="text-xl font-bold text-foreground">
                                        {benefit.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center pt-0">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Statistics Section */}
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 mb-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Features */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            Everything You Need for Success
                        </h3>
                        <div className="space-y-4">
                            {additionalFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                                alt="Student learning with laptop"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Benefit Cards */}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                                <div className="flex items-center space-x-2">
                                    <Globe className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs font-medium">Learn Anywhere</span>
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                                <div className="flex items-center space-x-2">
                                    <Star className="w-4 h-4 text-yellow-500" />
                                    <span className="text-xs font-medium">Premium Quality</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;