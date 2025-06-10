
import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
    return (
        <footer className="bg-muted border-t border-border">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-foreground">algeria-bootcamp</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Empowering learners worldwide with expert-led courses and comprehensive educational resources.
                            Join thousands of students on their journey to success.
                        </p>
                        <div className="flex space-x-3">
                            <Button variant="ghost" size="icon" className="hover:text-emerald-500">
                                <Facebook className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-emerald-500">
                                <Twitter className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-emerald-500">
                                <Instagram className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-emerald-500">
                                <Linkedin className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="hover:text-emerald-500">
                                <Youtube className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    All Courses
                                </a>
                            </li>
                            <li>
                                <a href="/categories" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    Categories
                                </a>
                            </li>
                            <li>
                                <a href="/instructors" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    Instructors
                                </a>
                            </li>
                            <li>
                                <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/help" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/refund" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter & Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
                        <p className="text-muted-foreground text-sm">
                            Subscribe to our newsletter for the latest courses and updates.
                        </p>
                        <div className="flex space-x-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1"
                            />
                            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                                Subscribe
                            </Button>
                        </div>

                        <div className="space-y-2 pt-4">
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4" />
                                <span>support@elearning.com</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-border py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-muted-foreground">
                            © 2024 eLearning Platform. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Sitemap
                            </a>
                            <a href="/accessibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Accessibility
                            </a>
                            <a href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;