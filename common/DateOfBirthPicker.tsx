"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

interface DateOfBirthPickerProps {
  id: string;
  label: string;
  value?: Date | undefined;
  onChange: (date: Date | undefined) => void;
  error?: string;
  required?: boolean;
}

const DateOfBirthPicker: React.FC<DateOfBirthPickerProps> = ({
  id,
  label,
  value,
  onChange,
  error,
  required,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Field className="gap-1.5">
      <FieldLabel htmlFor={id} className="px-1">
        {label} {required && <span className="text-red-500">*</span>}
      </FieldLabel>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id={id}
            className="justify-between font-normal w-full"
          >
            {value ? value.toLocaleDateString() : "Select date"}
            <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            captionLayout="dropdown"
            onSelect={(selectedDate) => {
              onChange(selectedDate);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
};

export default DateOfBirthPicker;
