
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Why Java is best programming language?",
            description: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ...",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Why Java is best programming language?",
            description: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ...",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Why Java is best programming language?",
            description: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ...",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Why Java is best programming language?",
            description: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ...",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Why Java is best programming language?",
            description: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ...",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Why Java is best programming language?",
            description: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ...",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        Blog Posts
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
                        Articles Will Help To To Stay Up To
                        <br />
                        Date With All The Knowledge
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Install our top-rated dropshipping app to your e-commerce site and get
                        <br />
                        access to US Suppliers, AliExpress vendors, and the best.
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card key={post.id} className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
                            <div className="relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-64 object-cover"
                                />
                            </div>

                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {post.description}
                                </p>

                                <Button
                                    variant="outline"
                                    className="bg-transparent border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-6 py-2 rounded-full font-medium flex items-center gap-2 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300"
                                >
                                    Read Article
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
