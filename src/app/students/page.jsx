"use client";

import React, { useState } from "react";
import { Users, Search, Plus, BookOpen, University } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StudentsPage = () => {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([
    {
      id: 1,
      firstname: "Nour",
      lastname: "Ali",
      email: "nour.ali@example.com",
      university: "Abdelhamid Mehri University",
      courses: ["Python for Data Science", "React Fundamentals"],
    },
    {
      id: 2,
      firstname: "Sara",
      lastname: "Yahia",
      email: "sara.yahia@example.com",
      university: "Abdelhamid Mehri University",
      courses: ["UI/UX Design Masterclass"],
    },
  ]);

  const [newStudent, setNewStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    university: "",
  });

  const filtered = students.filter((s) => {
    const term = search.toLowerCase();
    return (
      s.firstname.toLowerCase().includes(term) ||
      s.lastname.toLowerCase().includes(term) ||
      s.email.toLowerCase().includes(term) ||
      s.university.toLowerCase().includes(term)
    );
  });

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudent.firstname.trim() || !newStudent.lastname.trim()) return;

    const studentToAdd = {
      id: Date.now(),
      firstname: newStudent.firstname.trim(),
      lastname: newStudent.lastname.trim(),
      email: newStudent.email.trim() || "no-email@local",
      university: newStudent.university.trim() || "Unknown",
      courses: [],
    };

    setStudents((prev) => [...prev, studentToAdd]);

    setNewStudent({
      firstname: "",
      lastname: "",
      email: "",
      university: "",
    });
  };

  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background/95 backdrop-blur">
        <Header />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Page header + add form */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-1">Students</h1>
              <p className="text-muted-foreground">
                Manage students and see which courses they are enrolled in.
              </p>
            </div>

            <form
              onSubmit={handleAddStudent}
              className="flex flex-col md:flex-row gap-2 md:items-center"
            >
              <Input
                placeholder="First name"
                value={newStudent.firstname}
                onChange={(e) =>
                  setNewStudent((p) => ({ ...p, firstname: e.target.value }))
                }
                className="md:w-32"
              />
              <Input
                placeholder="Last name"
                value={newStudent.lastname}
                onChange={(e) =>
                  setNewStudent((p) => ({ ...p, lastname: e.target.value }))
                }
                className="md:w-32"
              />
              <Input
                placeholder="Email"
                value={newStudent.email}
                onChange={(e) =>
                  setNewStudent((p) => ({ ...p, email: e.target.value }))
                }
                className="md:w-52"
              />
              <Input
                placeholder="University"
                value={newStudent.university}
                onChange={(e) =>
                  setNewStudent((p) => ({ ...p, university: e.target.value }))
                }
                className="md:w-52"
              />
              <Button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add student
              </Button>
            </form>
          </div>

          {/* Search and stats */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or university..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Total: {students.length}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                <span>
                  With courses:{" "}
                  {students.filter((s) => s.courses.length > 0).length}
                </span>
              </div>
            </div>
          </div>

          {/* Students grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((s) => (
              <Card key={s.id} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle>
                        {s.firstname} {s.lastname}
                      </CardTitle>
                      <CardDescription>{s.email}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <University className="w-3 h-3" />
                      {s.university}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Enrolled courses</p>
                    {s.courses.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        No courses yet.
                      </p>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {s.courses.map((c) => (
                          <Badge key={c} variant="outline">
                            {c}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Manage courses
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-300"
                      onClick={() => handleDeleteStudent(s.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No students match this search.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentsPage;
