import React from "react";
import {
    Home,
    Users,
    User,
    UserCheck,
    BookOpen,
    Columns,
    Book,
    FileText,
    Clipboard,
    CheckSquare,
    CalendarCheck,
    Calendar,
    MessageSquare,
    Bell,
    GraduationCap,
    UsersRound,
} from "lucide-react";

export type SidebarItem = {
    key: string;
    title: string;
    path: string;
    icon: React.ReactNode;
};

export const sidebarItems: SidebarItem[] = [
    { key: "home", title: "Home", path: "/", icon: <Home size={14} aria-hidden /> },
    { key: "teachers", title: "Teachers", path: "/dashboard/teachers", icon: <GraduationCap size={14} aria-hidden /> },
    { key: "students", title: "Students", path: "/dashboard/students", icon: <User size={14} aria-hidden /> },
    { key: "parents", title: "Parents", path: "/dashboard/parents", icon: <UsersRound size={14} aria-hidden /> },
    { key: "subjects", title: "Subjects", path: "/dashboard/subjects", icon: <BookOpen size={14} aria-hidden /> },
    { key: "classes", title: "Classes", path: "/dashboard/classes", icon: <Columns size={14} aria-hidden /> },
    { key: "lessons", title: "Lessons", path: "/dashboard/lessons", icon: <Book size={14} aria-hidden /> },
    { key: "exams", title: "Exams", path: "/dashboard/exams", icon: <FileText size={14} aria-hidden /> },
    { key: "assignments", title: "Assignments", path: "/dashboard/assignments", icon: <Clipboard size={14} aria-hidden /> },
    { key: "results", title: "Results", path: "/dashboard/results", icon: <CheckSquare size={14} aria-hidden /> },
    { key: "attendence", title: "Attendence", path: "/dashboard/attendence", icon: <CalendarCheck size={14} aria-hidden /> },
    { key: "events", title: "Events", path: "/dashboard/events", icon: <Calendar size={14} aria-hidden /> },
    { key: "messages", title: "Messages", path: "/dashboard/messages", icon: <MessageSquare size={14} aria-hidden /> },
    { key: "announcements", title: "Announcements", path: "/dashboard/announcements", icon: <Bell size={14} aria-hidden /> },
];

export default sidebarItems;

export const teacherData = [
  {
    id: 1,
    name: "Surendra Parla",
    email: "surendra@example.com",
    teacherId: "TCH1001",
    classes: "10A, 10B",
    subjects: "Math, Physics",
    phone: "9876543210",
    address: "Hyderabad, India",
  },
  {
    id: 2,
    name: "Kiran Reddy",
    email: "kiran@example.com",
    avatar: "/avatars/kiran.jpg",
    teacherId: "TCH1002",
    classes: "9A",
    subjects: "English, History",
    phone: "9012345678",
    address: "Chennai, India",
  },
{
    id: 3,
    name: "Asha Rao",
    email: "asha.rao@example.com",
    avatar: "/avatars/asha.jpg",
    teacherId: "TCH1003",
    classes: "8A, 8B",
    subjects: "Biology, Chemistry",
    phone: "9123456780",
    address: "Mumbai, India"
},
{
    id: 4,
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    teacherId: "TCH1004",
    classes: "11A",
    subjects: "Physics, Math",
    phone: "9988776655",
    address: "Bengaluru, India"
},
{
    id: 5,
    name: "Meera Nair",
    email: "meera.nair@example.com",
    avatar: "/avatars/meera.jpg",
    teacherId: "TCH1005",
    classes: "7A, 7B",
    subjects: "English, Social Studies",
    phone: "9445566778",
    address: "Kochi, India"
},
{
    id: 6,
    name: "Amit Singh",
    email: "amit.singh@example.com",
    teacherId: "TCH1006",
    classes: "12A",
    subjects: "Economics, Accounts",
    phone: "9876501234",
    address: "New Delhi, India"
},
{
    id: 7,
    name: "Priya Joshi",
    email: "priya.joshi@example.com",
    avatar: "/avatars/priya.jpg",
    teacherId: "TCH1007",
    classes: "10C",
    subjects: "Computer Science",
    phone: "9011223344",
    address: "Pune, India"
},
{
    id: 8,
    name: "Vikram Patel",
    email: "vikram.patel@example.com",
    teacherId: "TCH1008",
    classes: "9B, 9C",
    subjects: "History, Geography",
    phone: "9422334455",
    address: "Ahmedabad, India"
},
{
    id: 9,
    name: "Sunita Verma",
    email: "sunita.verma@example.com",
    teacherId: "TCH1009",
    classes: "6A, 6B",
    subjects: "Math, General Science",
    phone: "9566778899",
    address: "Lucknow, India"
},
{
    id: 10,
    name: "Deepak Rao",
    email: "deepak.rao@example.com",
    teacherId: "TCH1010",
    classes: "8C",
    subjects: "Physical Education",
    phone: "9300112233",
    address: "Hyderabad, India"
},
{
    id: 11,
    name: "Latha Menon",
    email: "latha.menon@example.com",
    avatar: "/avatars/latha.jpg",
    teacherId: "TCH1011",
    classes: "5A, 5B",
    subjects: "English, Art",
    phone: "9544332211",
    address: "Thiruvananthapuram, India"
},
{
    id: 12,
    name: "Rohit Desai",
    email: "rohit.desai@example.com",
    teacherId: "TCH1012",
    classes: "11B",
    subjects: "Chemistry",
    phone: "9890098765",
    address: "Surat, India"
},
{
    id: 13,
    name: "Anjali Gupta",
    email: "anjali.gupta@example.com",
    teacherId: "TCH1013",
    classes: "12B",
    subjects: "Biology",
    phone: "9776655443",
    address: "Jaipur, India"
},
{
    id: 14,
    name: "Karthik Srinivas",
    email: "karthik.srinivas@example.com",
    teacherId: "TCH1014",
    classes: "9A",
    subjects: "Math, Computer Science",
    phone: "9167788990",
    address: "Mysore, India"
},
{
    id: 15,
    name: "Nisha Kapoor",
    email: "nisha.kapoor@example.com",
    avatar: "/avatars/nisha.jpg",
    teacherId: "TCH1015",
    classes: "10A, 10B",
    subjects: "English, Drama",
    phone: "9223344556",
    address: "Chandigarh, India"
},
{
    id: 16,
    name: "Sandeep Chatterjee",
    email: "sandeep.chatterjee@example.com",
    teacherId: "TCH1016",
    classes: "7C",
    subjects: "Social Studies, History",
    phone: "9871234500",
    address: "Kolkata, India"
},
{
    id: 17,
    name: "Bhavna Shah",
    email: "bhavna.shah@example.com",
    avatar: "/avatars/bhavna.jpg",
    teacherId: "TCH1017",
    classes: "6C, 7A",
    subjects: "Science, Math",
    phone: "9112233445",
    address: "Nagpur, India"
}
];