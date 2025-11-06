"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function page() {
  const router = useRouter();
  const [guardian, setGuardian] = useState({
    name: "",
    phone: "",
    relation: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuardian({ ...guardian, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    localStorage.setItem("guardianInfo", JSON.stringify(guardian));
    router.push("/dashboard/students/new/review");
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Guardian Name</Label>
        <Input name="name" value={guardian.name} onChange={handleChange} />
      </div>
      <div>
        <Label>Phone</Label>
        <Input name="phone" value={guardian.phone} onChange={handleChange} />
      </div>
      <div>
        <Label>Relation</Label>
        <Input name="relation" value={guardian.relation} onChange={handleChange} />
      </div>
      <div>
        <Label>Email</Label>
        <Input name="email" type="email" value={guardian.email} onChange={handleChange} />
      </div>

      <Button onClick={handleNext}>Next → Review</Button>
    </div>
  );
}
