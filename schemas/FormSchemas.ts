import { z } from "zod";

export const firstNameSchema = z
  .string()
  .min(1, "First name is required")
  .max(50, "First name is too long");

export const lastNameSchema = z
  .string()
  .min(1, "Last name is required")
  .max(50, "Last name is too long");

export const genderSchema = z
  .union([
    z.enum(["male", "female", "other"]),
    z.literal(""),
  ])
  .refine((val) => val !== "", "Please select a gender");

export const classDropDownSchema = z.string().min(1, "Class is required");

export const emailSchema = z
  .email("Invalid email address")
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format");

export const dobSchema = z.string().nonempty("Date of Birth is required");

export const phoneSchema = z
  .string()
  .regex(/^[0-9]{10}$/, "Phone number must be 10 digits");

export const addressSchema = z.object({
  houseNo: z.string().min(1, "House number is required"),
  street: z.string().min(2, "Street is required"),
  city: z.string().min(2, "City is required"),
  pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),
});

export const fatherNameSchema = z
  .string()
  .min(2, "Father name is required")
  .max(50, "name is too long");

export const motherNameSchema = z
  .string()
  .min(2, "Mother name is required")
  .max(50, "name is too long");

export const guardianPhoneSchema = z
  .string()
  .regex(/^[0-9]{10}$/, "Phone number must be 10 digits");
