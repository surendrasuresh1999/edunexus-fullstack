"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GuardianForm from "@/components/ui/custom/student-enroll/GuardianForm";
import PaymentForm from "@/components/ui/custom/student-enroll/PaymentForm";
import PersonalForm from "@/components/ui/custom/student-enroll/PersonalForm";
import { useState } from "react";
import z, { ZodObject, ZodRawShape } from "zod";
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

export const studentSchema = z.object({
  // Personal
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

  // Payment
  amount: z.string().min(1, "Amount is required"),
  paymentMode: z.enum(["cash", "card", "online"]),
});

type StudentFormData = z.infer<typeof studentSchema>;

const defaultStudentFormData: StudentFormData = {
  firstName: "",
  lastName: "",
  gender: "",
  class: "",
  email: "",
  dob: "",
  phoneNumber: "",
  address: { houseNo: "", street: "", city: "", pincode: "" },
  fatherName: "",
  motherName: "",
  guardianPhone: "",
  amount: "",
  paymentMode: "cash",
};

const EnrollmentPage = () => {
  const [formData, setFormData] = useState<StudentFormData>(
    defaultStudentFormData
  );
  const [dirtySteps, setDirtySteps] = useState({
  personal: false,
  guardian: false,
  payment: false,
});
  const [errors, setErrors] = useState<
    Partial<Record<keyof StudentFormData, string>>
  >({});
  const [enabledSteps, setEnabledSteps] = useState({
    personal: true,
    guardian: false,
    payment: false,
  });
  const [expandedSteps, setExpandedSteps] = useState<string[]>(["item-1"]);
  const mapErrors = (issues: z.ZodIssue[]) => {
    const errors: any = {};
    issues.forEach((issue) => {
      let current = errors;
      const path = issue.path;

      path.forEach((key, index) => {
        if (index === path.length - 1) {
          current[key] = issue.message;
        } else {
          if (!current[key]) current[key] = {};
          current = current[key];
        }
      });
    });
    return errors;
  };
  // Handle field change
 const handleFieldChange = (field: keyof StudentFormData, value: any, step: "personal" | "guardian" | "payment") => {
  setFormData((prev) => ({ ...prev, [field]: value }));
  console.log("field change",step)
  // Mark step as dirty
  setDirtySteps((prev) => ({ ...prev, [step]: true }));

  // Clear error for this field immediately
  setErrors((prev) => {
    if (prev[field]) {
      const { [field]: _, ...rest } = prev;
      return rest;
    }
    return prev;
  });
};


  // Validate only certain fields per step
  const validateStep = (step: "personal" | "guardian" | "payment") => {
    let stepSchema: ZodObject<ZodRawShape>;

    if (step === "personal") {
      stepSchema = z.object({
        firstName: studentSchema.shape.firstName,
        lastName: studentSchema.shape.lastName,
        gender: studentSchema.shape.gender,
        class: studentSchema.shape.class,
        email: studentSchema.shape.email,
        dob: studentSchema.shape.dob,
        phoneNumber: studentSchema.shape.phoneNumber,
        address: studentSchema.shape.address,
      });
    } else if (step === "guardian") {
      stepSchema = z.object({
        fatherName: studentSchema.shape.fatherName,
        motherName: studentSchema.shape.motherName,
        guardianPhone: studentSchema.shape.guardianPhone,
      });
    } else if (step === "payment") {
      stepSchema = z.object({
        amount: studentSchema.shape.amount,
        paymentMode: studentSchema.shape.paymentMode,
      });
    } else {
      return false;
    }

    const result = stepSchema.safeParse(formData);

    if (!result.success) {
      const newErrors = mapErrors(result.error.issues);
      setErrors(newErrors);
      return;
    }

    // Clear step errors if valid
    Object.keys(stepSchema.shape).forEach((key) => {
      setErrors((prev) => {
        const { [key as keyof StudentFormData]: _, ...rest } = prev;
        return rest;
      });
    });

    return true;
  };

  const handleBlur = (field: keyof StudentFormData, step: "personal" | "guardian" | "payment") => {
  const isValid = validateStep(step);

  if (step === "personal") {
    setEnabledSteps((prev) => ({ ...prev, guardian: !!isValid }));
  }

  if (step === "guardian") {
    setEnabledSteps((prev) => ({ ...prev, payment: !!isValid }));
  }
};

  // Handle step validation & enable next step
  const handleStepValidation = (step: "personal" | "guardian" | "payment") => {
    const isValid = validateStep(step);

    if (step === "personal" && isValid) {
      setEnabledSteps((prev) => ({ ...prev, guardian: true }));
      setExpandedSteps((prev) => [...prev, "item-2"]);
    }

    if (step === "guardian" && isValid) {
      setEnabledSteps((prev) => ({ ...prev, payment: true }));
      setExpandedSteps((prev) => [...prev, "item-3"]);
    }

    return isValid;
  };

  // Final submit
  const handleSubmit = () => {
    const result = studentSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0];
        if (typeof path === "string") newErrors[path] = issue.message;
      });
      setErrors(newErrors);
      alert("Please fix errors before submitting");
      return;
    }
    alert(
      `✅ Enrollment Successful\n\n${JSON.stringify(result.data, null, 2)}`
    );
    console.log("Form Data:", result.data);
  };

  return (
    <div>
      <form>
        <Accordion
          type="multiple"
          value={expandedSteps}
          onValueChange={(val) => setExpandedSteps(val as string[])}
          className="flex flex-col gap-3"
        >
          {/* Personal Information */}
          <AccordionItem
            value="item-1"
            className="bg-white shadow rounded-md px-4"
          >
            <AccordionTrigger className="text-xl text-gray-800 hover:no-underline flex items-center">
              Personal Information
            </AccordionTrigger>
            <AccordionContent className="px-2">
              <PersonalForm
                formData={formData}
                handleFieldChange={handleFieldChange}
                errors={errors}
                handleValidate={() => handleStepValidation("personal")}
                handleBlur={handleBlur}
                dirtySteps={dirtySteps.personal}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Guardian Information */}
          <AccordionItem
            value="item-2"
            className={`bg-white shadow rounded-md px-4 ${
              !enabledSteps.guardian ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <AccordionTrigger className="text-xl text-gray-800 hover:no-underline">
              Guardian Information
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <GuardianForm
                formData={formData}
                handleFieldChange={handleFieldChange}
                errors={errors}
                handleValidate={() => handleStepValidation("guardian")}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Payment */}
          <AccordionItem
            value="item-3"
            className={`bg-white shadow rounded-md px-4 ${
              !enabledSteps.payment ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <AccordionTrigger className="text-xl text-gray-800 hover:no-underline">
              Payment
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <PaymentForm
                formData={formData}
                handleFieldChange={handleFieldChange}
                errors={errors}
                handleValidate={() => handleStepValidation("payment")}
              />

              {/* Final Submit */}
              {enabledSteps.payment && (
                <div className="mt-4 text-right">
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    onClick={handleSubmit}
                  >
                    Submit Enrollment
                  </button>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </div>
  );
};

export default EnrollmentPage;
