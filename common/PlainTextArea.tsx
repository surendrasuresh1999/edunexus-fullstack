"use client";

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface PlainTextAreaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  rows?: number;
  resize?: boolean;
}

const PlainTextArea = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  resize = false,
  rows = 4,
}: PlainTextAreaProps) => {
  return (
    <Field className="gap-1.5">
      {/* Label */}
      <FieldLabel htmlFor={id}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </FieldLabel>

      {/* Textarea */}
      <Textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          !resize ? "resize-none" : "",
          error ? "border-red-500 focus:ring-red-500" : ""
        )}
      />

      {/* Error message */}
      {error && (
        <FieldError className="text-sm text-red-500">{error}</FieldError>
      )}
    </Field>
  );
};

export default PlainTextArea;
