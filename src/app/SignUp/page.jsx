"use client"
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign up logic here
        console.log('Sign up:', formData, agreeToTerms);
    };

    return (
        <div className="min-h-screen flex">
            {/* Left side - Image */}
            <div className="hidden lg:block relative w-0 flex-1">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                    alt="Students learning"
                />
                <div className="absolute inset-0 bg-emerald-600 opacity-75" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h2 className="text-4xl font-bold">Join our community</h2>
                        <p className="mt-4 text-xl">Start learning with expert instructors today</p>
                    </div>
                </div>
            </div>

            {/* Right side - Form */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    {/* Logo and title */}
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-foreground">algeria-bootcamp</span>
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">Create your account</h2>
                        <p className="mt-2 text-muted-foreground">
                            Join thousands of learners and start your journey
                        </p>
                    </div>

                    {/* Form */}
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="firstName">First name</Label>
                                    <div className="mt-1 relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            autoComplete="given-name"
                                            required
                                            className="pl-10"
                                            placeholder="First name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="lastName">Last name</Label>
                                    <div className="mt-1 relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <Input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            autoComplete="family-name"
                                            required
                                            className="pl-10"
                                            placeholder="Last name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="email">Email address</Label>
                                <div className="mt-1 relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="pl-10"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="password">Password</Label>
                                <div className="mt-1 relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="new-password"
                                        required
                                        className="pl-10 pr-10"
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <button
                                            type="button"
                                            className="text-muted-foreground hover:text-foreground"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="confirmPassword">Confirm password</Label>
                                <div className="mt-1 relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <Input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        autoComplete="new-password"
                                        required
                                        className="pl-10 pr-10"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <button
                                            type="button"
                                            className="text-muted-foreground hover:text-foreground"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start space-x-2">
                            <Checkbox
                                id="terms"
                                checked={agreeToTerms}
                                onCheckedChange={setAgreeToTerms}
                                className="mt-1"
                            />
                            <Label htmlFor="terms" className="text-sm leading-5">
                                I agree to the{' '}
                                <Link href="/terms" className="text-emerald-600 hover:text-emerald-500">
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link href="/privacy" className="text-emerald-600 hover:text-emerald-500">
                                    Privacy Policy
                                </Link>
                            </Label>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className="w-full bg-emerald-500 hover:bg-emerald-600"
                                disabled={!agreeToTerms}
                            >
                                Create account
                            </Button>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-muted-foreground">
                                Already have an account?{' '}
                                <Link
                                    href="/SignIn"
                                    className="font-medium text-emerald-600 hover:text-emerald-500"
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                    </form>

                    {/* Social login */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid  gap-3">
                            <Button variant="outline" className="w-full">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Google
                            </Button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
