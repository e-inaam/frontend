
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
    Twitter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
    const stats = [
        { label: 'Students Worldwide', value: '150,000+', icon: Users },
        { label: 'Expert Instructors', value: '500+', icon: Award },
        { label: 'Course Completions', value: '95%', icon: CheckCircle },
        { label: 'Countries Reached', value: '80+', icon: Globe }
    ];

    const values = [
        {
            icon: Target,
            title: 'Excellence',
            description: 'We strive for excellence in every course, ensuring the highest quality education for our students.'
        },
        {
            icon: Heart,
            title: 'Passion',
            description: 'Our passion for education drives us to create engaging and meaningful learning experiences.'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We embrace innovative teaching methods and cutting-edge technology to enhance learning.'
        },
        {
            icon: Users,
            title: 'Community',
            description: 'We foster a supportive learning community where students and instructors can thrive together.'
        }
    ];

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            bio: 'Former tech executive with 15+ years in education technology.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Michael Chen',
            role: 'CTO',
            bio: 'Full-stack developer and former Stanford computer science professor.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Emma Davis',
            role: 'Head of Design',
            bio: 'Award-winning UX designer with expertise in educational interfaces.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'David Wilson',
            role: 'VP of Marketing',
            bio: 'Digital marketing expert helping learners discover their potential.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
            social: { linkedin: '#', twitter: '#' }
        }
    ];

    const milestones = [
        { year: '2019', event: 'Founded eLearning with a vision to democratize education' },
        { year: '2020', event: 'Launched our first 50 courses and reached 10,000 students' },
        { year: '2021', event: 'Expanded internationally and partnered with top universities' },
        { year: '2022', event: 'Introduced AI-powered personalized learning paths' },
        { year: '2023', event: 'Reached 100,000 students and 400+ courses' },
        { year: '2024', event: 'Launched mobile app and achieved 150,000+ student milestone' }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className=" bg-background/95 backdrop-blur">
                <Header />
                
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Hero Section */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Empowering Learners <br />
                                <span className="text-emerald-500">Around the World</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                We're on a mission to make quality education accessible to everyone, everywhere.
                                Our platform connects passionate instructors with eager learners, creating a global
                                community of knowledge sharing and growth.
                            </p>
                            <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                                    alt="Students learning"
                                    className="w-full h-64 md:h-96 object-cover"
                                />
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                            {stats.map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={index} className="text-center">
                                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <IconComponent className="w-8 h-8 text-emerald-500" />
                                        </div>
                                        <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                        <div className="text-muted-foreground">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Mission Section */}
                        <div className="bg-muted rounded-lg p-8 md:p-12 mb-16">
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    To break down barriers to education by providing high-quality, accessible, and
                                    affordable learning opportunities that empower individuals to achieve their personal
                                    and professional goals, regardless of their background or location.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="text-left">
                                        <h3 className="text-xl font-semibold mb-4">What We Believe</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                                Education should be accessible to everyone
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                                Learning is a lifelong journey
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                                Quality matters more than quantity
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                                Community enhances learning
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start">
                                                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                                4.8/5 average course rating
                                            </li>
                                            <li className="flex items-start">
                                                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                                95% course completion rate
                                            </li>
                                            <li className="flex items-start">
                                                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                                85% of students report career advancement
                                            </li>
                                            <li className="flex items-start">
                                                <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                                Available in 12 languages
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Values Section */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {values.map((value, index) => {
                                    const IconComponent = value.icon;
                                    return (
                                        <Card key={index} className="text-center">
                                            <CardHeader>
                                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <IconComponent className="w-6 h-6 text-emerald-500" />
                                                </div>
                                                <CardTitle className="text-xl">{value.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-base">
                                                    {value.description}
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Timeline Section */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
                            <div className="max-w-4xl mx-auto">
                                <div className="space-y-8">
                                    {milestones.map((milestone, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0 w-20 text-right mr-8">
                                                <div className="text-lg font-bold text-emerald-500">{milestone.year}</div>
                                            </div>
                                            <div className="flex-shrink-0 w-4 h-4 bg-emerald-500 rounded-full mt-1 mr-8"></div>
                                            <div className="flex-1">
                                                <p className="text-muted-foreground">{milestone.event}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Team Section */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {team.map((member, index) => (
                                    <Card key={index} className="text-center">
                                        <CardHeader>
                                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <CardTitle className="text-xl">{member.name}</CardTitle>
                                            <CardDescription className="text-emerald-500 font-medium">
                                                {member.role}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                                            <div className="flex justify-center space-x-2">
                                                <Button variant="ghost" size="icon">
                                                    <Linkedin className="w-4 h-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon">
                                                    <Twitter className="w-4 h-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon">
                                                    <Mail className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-emerald-50 rounded-lg p-8 md:p-12 text-center">
                            <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Ready to start your learning journey? Join thousands of students who are
                                already advancing their careers with our expert-led courses.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                                    Browse Courses
                                </Button>
                                {/* <Button size="lg" variant="outline">
                                Contact Us
                            </Button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            );
};

            export default About;