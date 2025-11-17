import DateOfBirthPicker from "@/common/DateOfBirthPicker";
import PlainSelectDropDown from "@/common/PlainSelectDropDown";
import PlainTextInput from "@/common/PlainTextInput";
import { Button } from "../../button";

const PersonalForm = ({
  formData,
  handleFieldChange,
  errors,
  handleValidate,
  handleBlur,
  dirtySteps
}: any) => {
  // Class list: 1-10 with A/B/C
  const classOptions = Array.from({ length: 10 }, (_, i) => {
    const grade = i + 1;
    return ["A", "B", "C"].map((section) => ({
      label: `${grade}-${section}`,
      value: `${grade}-${section}`,
    }));
  }).flat();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* FIRST NAME */}
        <PlainTextInput
          id="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={(e) => handleFieldChange("firstName", e.target.value,"personal")}
          error={errors.firstName}
          placeholder="John"
          required
        />

        {/* LAST NAME */}
        <PlainTextInput
          id="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={(e) => handleFieldChange("lastName", e.target.value,"personal")}
          error={errors.lastName}
          placeholder="Doe"
          required
        />

        {/* EMAIL */}
        <PlainTextInput
          id="email"
          label="Email"
          value={formData.email}
          onChange={(e) => handleFieldChange("email", e.target.value,"personal")}
          // onBlur={() => handleBlur("firstName", "personal")}
          error={errors.email}
          placeholder="john@example.com"
        />

        {/* GENDER */}
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
          onChange={(value) => handleFieldChange("gender", value,"personal")}
          error={errors.gender}
          required
        />

        {/* DATE OF BIRTH */}
        <DateOfBirthPicker
          id="dob"
          label="Date of Birth"
          value={formData.dob ? new Date(formData.dob) : undefined}
          onChange={(date) =>
            handleFieldChange("dob", date ? date.toISOString() : "","personal")
          }
          error={errors.dob}
          required
        />

        {/* PHONE NUMBER */}
        <PlainTextInput
          id="phoneNumber"
          label="Phone Number"
          value={formData.phoneNumber}
          onChange={(e) => handleFieldChange("phoneNumber", e.target.value,"personal")}
          error={errors.phoneNumber}
          placeholder="9876543210"
          required
        />

        {/* CLASS */}
        <PlainSelectDropDown
          id="class"
          label="Class"
          options={classOptions}
          placeholder="Choose class"
          value={formData.class}
          onChange={(value) => handleFieldChange("class", value,"personal")}
          error={errors.class}
          required
        />
      </div>

      {/* ADDRESS SECTION */}
      <div className="mt-5">
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          Residential Address
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <PlainTextInput
            id="houseNo"
            label="House No"
            value={formData.address.houseNo}
            onChange={(e) =>
              handleFieldChange("address", {
                ...formData.address,
                houseNo: e.target.value,
              },"personal")
            }
            error={errors.address?.houseNo}
            placeholder="123"
            required
          />

          <PlainTextInput
            id="street"
            label="Street"
            value={formData.address.street}
            onChange={(e) =>
              handleFieldChange("address", {
                ...formData.address,
                street: e.target.value,
              },"personal")
            }
            error={errors.address?.street}
            placeholder="MG Road"
            required
          />

          <PlainTextInput
            id="city"
            label="City"
            value={formData.address.city}
            onChange={(e) =>
              handleFieldChange("address", {
                ...formData.address,
                city: e.target.value,
              },"personal")
            }
            error={errors.address?.city}
            placeholder="Mumbai"
            required
          />

          <PlainTextInput
            id="pincode"
            label="Pincode"
            value={formData.address.pincode}
            onChange={(e) =>
              handleFieldChange("address", {
                ...formData.address,
                pincode: e.target.value,
              },"personal")
            }
            error={errors.address?.pincode}
            placeholder="400001"
            required
          />
        </div>
      </div>

      {/* VALIDATE BUTTON */}
      <div className="mt-6 text-right">
        <Button  disabled={!dirtySteps.personal} type="button" onClick={handleValidate}>
          Validate Student Details
        </Button>
      </div>
    </div>
  );
};

export default PersonalForm;
