"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function page() {
  const router = useRouter();

  const handlePayment = async () => {
    // Simulate payment process
    await new Promise((res) => setTimeout(res, 1500));

    // Here you would call your backend API to store the student info
    router.push("/dashboard/students/new/success");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Enrollment Fee</h2>
      <p className="text-gray-600">Amount: ₹5000</p>
      <Button onClick={handlePayment}>Pay & Complete Enrollment</Button>
    </div>
  );
}
