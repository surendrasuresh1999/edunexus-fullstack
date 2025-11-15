"use client";

import DateOfBirthPicker from "@/common/DateOfBirthPicker";
import PlainSelectDropDown from "@/common/PlainSelectDropDown";
import PlainTextArea from "@/common/PlainTextArea";
import PlainTextInput from "@/common/PlainTextInput";
import { Button } from "@/components/ui/button";
import {
  addressSchema,
  classDropDownSchema,
  dobSchema,
  emailSchema,
  firstNameSchema,
  genderSchema,
  lastNameSchema,
  phoneSchema,
} from "@/schemas/FormSchemas";
import { useState } from "react";
import z from "zod";

export const studentSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  gender: genderSchema,
  class: classDropDownSchema,
  email: emailSchema,
  dob: dobSchema,
  phoneNumber: phoneSchema,
  address: addressSchema,
});

type StudentFormData = z.infer<typeof studentSchema>;

const defaultStudentFormData: StudentFormData = Object.keys(
  studentSchema.shape
).reduce((acc, key) => ({ ...acc, [key]: "" }), {} as StudentFormData);

const page = () => {
  const [formData, setFormData] = useState<StudentFormData>(
    defaultStudentFormData
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof StudentFormData, string>>
  >({});

  const handleFieldChange = (field: keyof StudentFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // ✅ Immediately clear the error for this field if it exists
    setErrors((prevErrors) => {
      if (prevErrors[field]) {
        const { [field]: _, ...rest } = prevErrors;
        return rest;
      }
      return prevErrors;
    });
  };

  // ✅ Validate + log
  const handleNext = () => {
    const result = studentSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const path = issue.path[0];

        // ✅ Safely handle only string paths
        if (typeof path === "string") {
          newErrors[path] = issue.message;
        }
      });

      setErrors(newErrors);
      return;
    }
    alert(`form data ${JSON.stringify(result.data)}`);
    console.log("✅ Form data:", result.data);
  };

  const classOptions: { label: string; value: string }[] = Array.from(
    { length: 10 },
    (_, i) => {
      const grade = i + 1;
      return ["A", "B", "C"].map((section) => ({
        label: `${grade}-${section}`,
        value: `${grade}-${section}`,
      }));
    }
  ).flat();
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <PlainTextInput
          id="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={(e) => handleFieldChange("firstName", e.target.value)}
          error={errors.firstName}
          placeholder="John"
          required
        />

        <PlainTextInput
          id="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={(e) => handleFieldChange("lastName", e.target.value)}
          error={errors.lastName}
          placeholder="Doe"
          required
        />

        <PlainTextInput
          id="email"
          label="Email"
          value={formData.email}
          onChange={(e) => handleFieldChange("email", e.target.value)}
          error={errors.email}
          placeholder="john@example.com"
          required
        />

        <PlainSelectDropDown
          id="gender"
          label="Gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ]}
          placeholder="Select gender"
          value={formData.gender}
          onChange={(value) => handleFieldChange("gender", value)}
          error={errors.gender}
          required
        />

        <DateOfBirthPicker
          id="dob"
          label="Date of Birth"
          value={formData.dob ? new Date(formData.dob) : undefined}
          onChange={(date) =>
            handleFieldChange("dob", date ? date.toISOString() : "")
          }
          error={errors.dob}
        />

        <PlainTextInput
          id="phoneNumber"
          label="Phone Number"
          value={formData.phoneNumber}
          onChange={(e) => handleFieldChange("phoneNumber", e.target.value)}
          error={errors.phoneNumber}
          placeholder="9876543210"
          required
        />

        <PlainSelectDropDown
          id="class"
          label="Class"
          options={classOptions}
          placeholder="Choose class"
          value={formData.class}
          onChange={(value) => handleFieldChange("class", value)}
          error={errors.class}
          required
        />

        <PlainTextArea
          id="address"
          label="Address"
          placeholder="Enter student's full address"
          value={formData.address}
          onChange={(e) => handleFieldChange("address", e.target.value)}
          error={errors.address}
          required
        />
      </form>

      <div className="mt-6 text-right">
        <Button type="button" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default page;
