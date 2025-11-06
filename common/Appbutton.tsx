"use client";

import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface AppButtonProps {
  label?: string;
  icon?: LucideIcon;
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive";
  size?: "sm" | "default" | "lg" | "icon";
  onClick?: () => void;
  disabled?: boolean;
  iconPosition?: "left" | "right";
  className?: string;
}

export const AppButton = ({
  label,
  icon: Icon,
  variant = "default",
  size = "default",
  onClick,
  disabled = false,
  iconPosition = "left",
  className = "",
}: AppButtonProps) => {
  return (
    <Button
      variant={variant}
      size={Icon && !label ? "icon" : size}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 mr-2" />}
      {label}
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 ml-2" />}
    </Button>
  );
};
