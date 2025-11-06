import { z } from "zod";

// ✅ Define schema using Zod
export const studentSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dob: z.string().nonempty("Date of Birth is required"),
  gender: z.enum(["male", "female", "other"]),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  class: z.string().nonempty("Class is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
});

type StudentFormData = z.infer<typeof studentSchema>;
