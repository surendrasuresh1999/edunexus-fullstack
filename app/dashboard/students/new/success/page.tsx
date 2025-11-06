
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2Icon, GraduationCap, LogInIcon } from "lucide-react";

export default function page() {
  const paymentStatus = "Partial";
  return (
    <div className="max-w-3xl mx-auto space-y-4 py-5">
      <div className="flex flex-col justify-center items-center">
        <CheckCircle2Icon className="text-green-500 animate-bounce h-14 w-14" />
        <h1 className="text-2xl lg:text-4xl font-bold text-black/80">
          Enrollment Successful!
        </h1>
        <p className="text-gray-600 text-center">
          Welcome to the <b>School Name</b> family, <b>Student Name</b> comes
          here.
        </p>
      </div>
      <div className="bg-white shadow rounded-md space-y-2 p-4">
        <h2 className="text-lg font-medium">Enrollment Summary</h2>
        <div className="text-sm space-y-1">
          <p>
            Your Enrollment ID: <b>ESD-2025-98765</b>
          </p>
          <p>
            Student Name: <b>Rahul Kumar</b>
          </p>
          <p>
            Father Name: <b>Ramesh Kumar</b>
          </p>
          <p>
            Mother Name: <b>Lakshmi</b>
          </p>
          <p>
            Enrollment Date: <b>June 15, 2024</b>
          </p>
          <p>
            Class: <b>5-2A</b>
          </p>
          <p>
            Payment Status:{" "}
            <span
              className={`font-semibold ${
                paymentStatus === "Partial"
                  ? "text-green-600"
                  : paymentStatus === "Partial"
                  ? "text-yellow-600"
                  : paymentStatus === "Pending"
                  ? "text-red-600"
                  : paymentStatus === "Waived"
                  ? "text-purple-600"
                  : "text-gray-600"
              }`}
            >
              {paymentStatus === "Partial"
                ? `Paid (₹${5000} / ₹${10000})`
                : paymentStatus}
            </span>
          </p>
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-xl font-bold text-black/60 text-center">
          Next Steps
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white shadow rounded-md p-3 space-y-2.5">
            <h1 className="flex items-center gap-2 text-lg font-medium text-black/80">
              <span className="bg-primary/20 text-center p-2 rounded-full">
                <LogInIcon className="h-3 w-3 text-primary" />
              </span>
              Login Instructions
            </h1>
            <p className="text-gray-600 italic text-sm font-medium">
              We have sent login instruction to your registed email. Use the
              credentials to log in to the Student portal. after logging in, you
              can access your dashboard, view class schedules, track academic
              progress, and communicate with teachers. and please change your
              password after your first login for security reasons.
            </p>
          </div>
          <div className="bg-white shadow rounded-md p-3 space-y-2.5">
            <h1 className="flex items-center gap-2 text-lg font-medium text-black/80">
              <span className="bg-green-200 text-center p-2 rounded-full">
                <GraduationCap className="h-3 w-3 text-green-600" />
              </span>
              Student Portal
            </h1>
            <p className="text-gray-600 italic text-sm font-medium">
              Access the student portal to explore resources, check assignments,
              and stay updated with school announcements. The portal is your
              gateway to a successful academic journey with us!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-end gap-2 items-center">
        <Link href="/dashboard/students">
          <Button>Go Back to Students List</Button>
        </Link>
        <Button
          variant="default"
        //   onClick={() => toast.warning("This feature is coming soon!")}
        >
          Print PDF
        </Button>
      </div>
    </div>
  );
}
