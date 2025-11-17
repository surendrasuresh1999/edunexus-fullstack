import PlainTextInput from "@/common/PlainTextInput";
import { Button } from "../../button";

const GuardianForm = ({
  formData,
  handleFieldChange,
  errors,
  handleValidate,
}: any) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* FATHER NAME */}
        <PlainTextInput
          id="fatherName"
          label="Father's Name"
          value={formData.fatherName}
          onChange={(e) => handleFieldChange("fatherName", e.target.value)}
          error={errors.fatherName}
          placeholder="John Doe Sr."
          required
        />

        {/* MOTHER NAME */}
        <PlainTextInput
          id="motherName"
          label="Mother's Name"
          value={formData.motherName}
          onChange={(e) => handleFieldChange("motherName", e.target.value)}
          error={errors.motherName}
          placeholder="Jane Doe"
          required
        />

        {/* GUARDIAN PHONE */}
        <PlainTextInput
          id="guardianPhone"
          label="Guardian Phone Number"
          value={formData.guardianPhone}
          onChange={(e) => handleFieldChange("guardianPhone", e.target.value)}
          error={errors.guardianPhone}
          placeholder="9876543210"
          required
        />
        <PlainTextInput
          id="guardianEmail"
          label="Guardian Email (Optional)"
          value={formData.guardianEmail || ""}
          onChange={(e) => handleFieldChange("guardianEmail", e.target.value)}
          error={errors.guardianEmail}
          placeholder="guardian@example.com"
        />
      </div>

      {/* VALIDATE BUTTON */}
      <div className="mt-6 text-right">
        <Button type="button" onClick={handleValidate}>
          Validate Gardian Details
        </Button>
      </div>
    </div>
  );
};

export default GuardianForm;
