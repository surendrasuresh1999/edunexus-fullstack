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
          <div className="flex items-center justify-between relative overflow-auto">
            {steps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isActive = index === currentStepIndex;

              return (
                <div key={step.id} className="flex-1 flex items-center">
                  {/* Step Circle */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={cn(
                        "flex items-center justify-center text-sm h-7 w-7 rounded-full border-2 transition-all duration-300",
                        isCompleted
                          ? "bg-blue-600 border-blue-600 text-white"
                          : isActive
                          ? "border-blue-600 text-blue-600"
                          : "border-gray-300 text-gray-400"
                      )}
                    >
                      {step.id}
                    </div>
                    <p
                      className={cn(
                        "text-xs mt-1 text-center",
                        isActive || isCompleted
                          ? "text-blue-600 font-medium"
                          : "text-gray-500"
                      )}
                    >
                      {step.label}
                    </p>
                  </div>

                  {/* Connecting Line */}
                  {index !== steps.length - 1 && (
                    <div className="flex-1 h-0.5 mx-2 mb-3 relative">
                      <div className="absolute inset-0 bg-gray-200" />
                      {isCompleted && (
                        <motion.div
                          className="absolute inset-0 bg-blue-600"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
