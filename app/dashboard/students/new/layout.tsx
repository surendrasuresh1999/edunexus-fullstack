"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // optional helper if you use shadcn
import { motion } from "framer-motion";

const steps = [
  { id: 1, path: "personal", label: "Personal Info" },
  { id: 2, path: "guardian", label: "Guardian Info" },
  { id: 3, path: "review", label: "Review" },
  { id: 4, path: "payment", label: "Payment" },
  { id: 5, path: "success", label: "Success" },
];

export default function EnrollmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // determine which step is active
  const currentStepIndex = steps.findIndex((s) => pathname.includes(s.path));
  const isSuccessPage = pathname.includes("success");

  return (
    <div className="space-y-7">
      {!isSuccessPage && (
        <div className="space-y-7">
          <div>
            <h1 className="text-2xl lg:text-3xl text-black/70 font-semibold">
              New Student Enrollment
            </h1>
            <p className="text-gray-500 font-medium text-sm">
              Follow the steps to enroll a new student
            </p>
          </div>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
