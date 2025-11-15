import { z } from "zod";

export const firstNameSchema = z.string().min(1, "First name is required").max(50, "First name is too long");

export const lastNameSchema = z.string().min(1, "Last name is required").max(50, "Last name is too long")

export const genderSchema = z.enum(["male", "female", "other"], "Please select a gender")

export const classDropDownSchema = z.string().min(1, "Class is required")

export const emailSchema = z.email("Invalid email address").regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")

export const dobSchema = z.string().nonempty("Date of Birth is required");

export const phoneSchema = z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits");

export const addressSchema = z.string().min(5, "Address must be at least 5 characters");

export const fatherNameSchema = z.string().min(2, "Father name is required").max(50, "name is too long");

export const motherNameSchema = z.string().min(2, "Mother name is required").max(50, "name is too long");

export const guardianPhoneSchema = z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits");