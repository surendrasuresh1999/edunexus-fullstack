"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GuardianForm from "@/components/ui/custom/student-enroll/GuardianForm";
import PersonalForm from "@/components/ui/custom/student-enroll/PersonalForm";
import {
  addressSchema,
  classDropDownSchema,
  dobSchema,
  emailSchema,
  fatherNameSchema,
  firstNameSchema,
  genderSchema,
  guardianPhoneSchema,
  lastNameSchema,
  motherNameSchema,
  phoneSchema,
} from "@/schemas/FormSchemas";
import { useState } from "react";
import z from "zod";

export const studentSchema = z.object({
  // Student
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  gender: genderSchema,
  class: classDropDownSchema,
  email: emailSchema,
  dob: dobSchema,
  phoneNumber: phoneSchema,
  address: addressSchema,

  // Guardian
  fatherName: fatherNameSchema,
  motherName: motherNameSchema,
  guardianPhone: guardianPhoneSchema,

  //  Payment
  amount: z.string().min(1, "Amount is required"),
  paymentMode: z.enum(["cash", "card", "online"]),
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
    setErrors((prevErrors) => {
      if (prevErrors[field]) {
        const { [field]: _, ...rest } = prevErrors;
        return rest;
      }
      return prevErrors;
    });
  };

  const handleValidate = () => {
    const result = studentSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const path = issue.path[0];

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

  return (
    <div>
      <form>
        <Accordion
          type="multiple"
          defaultValue={["item-1"]}
          className="flex flex-col gap-3"
        >
          <AccordionItem
            value="item-1"
            className="bg-white shadow rounded-md px-4"
          >
            <AccordionTrigger className="text-xl text-gray-800">
              Personal Information
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <PersonalForm
                formData={formData}
                handleFieldChange={handleFieldChange}
                errors={errors}
                handleValidate={handleValidate}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="bg-white shadow rounded-md px-4"
          >
            <AccordionTrigger className="text-xl text-gray-800">Guardian Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <GuardianForm
                formData={formData}
                handleFieldChange={handleFieldChange}
                errors={errors}
                handleValidate={handleValidate}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="bg-white shadow rounded-md px-4"
          >
            <AccordionTrigger>Payment</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Our flagship product combines cutting-edge technology...</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                dolores expedita excepturi reprehenderit nesciunt deleniti a hic
                labore necessitatibus et suscipit magnam id libero, temporibus
                fugit corrupti nulla quis dolorum.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </div>
  );
};

export default page;
