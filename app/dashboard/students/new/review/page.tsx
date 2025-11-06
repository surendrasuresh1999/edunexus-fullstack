"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const student = JSON.parse(localStorage.getItem("studentInfo") || "{}");
    const guardian = JSON.parse(localStorage.getItem("guardianInfo") || "{}");
    setData({ student, guardian });
  }, []);

  const handleNext = () => router.push("/dashboard/students/new/payment");

  if (!data) return null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-semibold">Student Info</h2>
        <pre className="bg-gray-50 p-3 rounded">{JSON.stringify(data.student, null, 2)}</pre>
      </div>
      <div>
        <h2 className="font-semibold">Guardian Info</h2>
        <pre className="bg-gray-50 p-3 rounded">{JSON.stringify(data.guardian, null, 2)}</pre>
      </div>
      <Button onClick={handleNext}>Next → Payment</Button>
    </div>
  );
}
