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
        <PlainTextInput
          id="fatherName"
          label="Father Name"
          value={formData.fatherName}
          onChange={(e) => handleFieldChange("fatherName", e.target.value)}
          error={errors.fatherName}
          placeholder="John"
          required
        />

        <PlainTextInput
          id="motherName"
          label="Mother Name"
          value={formData.motherName}
          onChange={(e) => handleFieldChange("motherName", e.target.value)}
          error={errors.motherName}
          placeholder="Doe"
          required
        />

        <PlainTextInput
          id="guardianPhone"
          label="guardianPhone"
          value={formData.guardianPhone}
          onChange={(e) => handleFieldChange("guardianPhone", e.target.value)}
          error={errors.guardianPhone}
          placeholder="9876543210"
          required
        />
      </div>

      <div className="mt-6 text-right">
        <Button type="button" onClick={handleValidate}>
          Validate
        </Button>
      </div>
    </div>
  );
};

export default GuardianForm;
