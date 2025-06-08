
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Basics of JAVA",
      level: "Beginner Level",
      description: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ...",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      isLocked: false
    },
    {
      id: 2,
      title: "OOP Fundamentals",
      level: "Beginner Level", 
      description: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ...",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      isLocked: false
    },
    {
      id: 3,
      title: "Intro to UI/UX",
      level: "Beginner Level",
      description: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ...",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      isLocked: false
    },
    {
      id: 4,
      title: "UI Certification",
      level: "Beginner Level",
      description: "Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ...",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      isLocked: true
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Courses
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Best Courses Offered and Teach
            <br />
            By Best of The Instructors
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Install our top-rated dropshipping app to your e-commerce site and get
            <br />
            access to US Suppliers, AliExpress vendors, and the best.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courses.map((course) => (
            <Card key={course.id} className="bg-white text-gray-900 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 w-6 h-6 bg-red-500 rounded-full"></div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {course.title}
                  </CardTitle>
                </div>
                <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  {course.level}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-3">
                  <Button 
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-full"
                    disabled={course.isLocked}
                  >
                    View Course
                  </Button>
                  
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                    course.isLocked 
                      ? 'border-gray-300 bg-gray-100' 
                      : 'border-emerald-500 bg-emerald-50'
                  }`}>
                    <Lock className={`w-5 h-5 ${
                      course.isLocked ? 'text-gray-400' : 'text-emerald-600'
                    }`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Courses */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">View All Courses</h3>
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-medium flex items-center gap-2"
          >
            All Courses
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;