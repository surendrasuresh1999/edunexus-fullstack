"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, School, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-linear-to-b from-white to-blue-100 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-32">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          EduNexus
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A unified digital platform for schools — connecting Super Admins, Principals, Teachers, Students, and Parents seamlessly.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <Link href="/public/register">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
              Get Started
            </Button>
          </Link>
          <Link href="/public/login">
            <Button size="lg" variant="outline" className="rounded-xl">
              Login
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Empower Every Role in Your School
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-md hover:shadow-lg transition rounded-2xl border-0">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center px-6 py-24 bg-linear-to-r from-blue-600 to-indigo-600 text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Ready to transform your school digitally?
        </motion.h2>
        <p className="text-lg text-blue-100 mb-8">
          Join hundreds of institutions managing their operations effortlessly with EduNexus.
        </p>
        <Link href="/public/register">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 rounded-xl font-semibold">
            Create Free Account
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} EduNexus. Built with ❤️ using Next.js, Supabase & shadcn/ui.
      </footer>
    </main>
  );
}

const features = [
  {
    title: "School Management",
    description: "Manage schools, users, and academic structures from a single dashboard.",
    icon: School,
  },
  {
    title: "Teacher Tools",
    description: "Plan classes, track attendance, and assign homework efficiently.",
    icon: BookOpen,
  },
  {
    title: "Student Portal",
    description: "Access assignments, results, and learning materials anytime, anywhere.",
    icon: Users,
  },
  {
    title: "Analytics & Reports",
    description: "Gain insights through real-time analytics and visual dashboards.",
    icon: LineChart,
  },
];
