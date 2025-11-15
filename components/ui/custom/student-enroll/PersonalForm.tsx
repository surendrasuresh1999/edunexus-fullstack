import DateOfBirthPicker from "@/common/DateOfBirthPicker";
import PlainSelectDropDown from "@/common/PlainSelectDropDown";
import PlainTextArea from "@/common/PlainTextArea";
import PlainTextInput from "@/common/PlainTextInput";
import { Button } from "../../button";

const PersonalForm = ({ formData,handleFieldChange,errors,handleValidate }: any) => {
  const classOptions: { label: string; value: string }[] = Array.from(
    { length: 10 },
    (_, i) => {
      const grade = i + 1;
      return ["A", "B", "C"].map((section) => ({
        label: `${grade}-${section}`,
        value: `${grade}-${section}`,
      }));
    }
  ).flat();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <PlainTextInput
          id="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={(e) => handleFieldChange("firstName", e.target.value)}
          error={errors.firstName}
          placeholder="John"
          required
        />

        <PlainTextInput
          id="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={(e) => handleFieldChange("lastName", e.target.value)}
          error={errors.lastName}
          placeholder="Doe"
          required
        />

        <PlainTextInput
          id="email"
          label="Email"
          value={formData.email}
          onChange={(e) => handleFieldChange("email", e.target.value)}
          error={errors.email}
          placeholder="john@example.com"
          required
        />

        <PlainSelectDropDown
          id="gender"
          label="Gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ]}
          placeholder="Select gender"
          value={formData.gender}
          onChange={(value) => handleFieldChange("gender", value)}
          error={errors.gender}
          required
        />

        <DateOfBirthPicker
          id="dob"
          label="Date of Birth"
          value={formData.dob ? new Date(formData.dob) : undefined}
          onChange={(date) =>
            handleFieldChange("dob", date ? date.toISOString() : "")
          }
          error={errors.dob}
        />

        <PlainTextInput
          id="phoneNumber"
          label="Phone Number"
          value={formData.phoneNumber}
          onChange={(e) => handleFieldChange("phoneNumber", e.target.value)}
          error={errors.phoneNumber}
          placeholder="9876543210"
          required
        />

        <PlainSelectDropDown
          id="class"
          label="Class"
          options={classOptions}
          placeholder="Choose class"
          value={formData.class}
          onChange={(value) => handleFieldChange("class", value)}
          error={errors.class}
          required
        />

        <PlainTextArea
          id="address"
          label="Address"
          placeholder="Enter student's full address"
          value={formData.address}
          onChange={(e) => handleFieldChange("address", e.target.value)}
          error={errors.address}
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

export default PersonalForm;
