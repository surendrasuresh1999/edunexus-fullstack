import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface PlainTextInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  type?: string;
}
const PlainTextInput = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  type = "text",
}: PlainTextInputProps) => {
  return (
    <Field className="gap-1.5">
      <FieldLabel htmlFor={id}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </FieldLabel>

      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(error ? "border-red-500 focus:ring-red-500" : "")}
      />

      {error && (
        <FieldError className="text-sm text-red-500">
          {error}
        </FieldError>
      )}
    </Field>
  );
};

export default PlainTextInput;
