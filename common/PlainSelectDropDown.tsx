"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field";

interface Option {
  label: string;
  value: string;
}

interface PlainSelectProps {
  id: string;
  label: string;
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}
const PlainSelectDropDown = ({
  id,
  label,
  options,
  placeholder = "Select an option",
  value,
  onChange,
  required = false,
  error,
  disabled = false,
}: PlainSelectProps) => {
  return (
    <Field className="gap-1.5">
      <FieldLabel htmlFor={id}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </FieldLabel>

      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger id={id}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {error && (
        <FieldError className="text-sm text-red-500">
          {error}
        </FieldError>
      )}
    </Field>
  );
};

export default PlainSelectDropDown;
