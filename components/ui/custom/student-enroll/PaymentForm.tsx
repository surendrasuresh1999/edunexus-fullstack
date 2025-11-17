import PlainTextInput from "@/common/PlainTextInput";
import { Button } from "../../button";

const PaymentForm = ({
  formData,
  handleFieldChange,
  errors,
  handleValidate,
}: any) => {
  const paymentOptions = ["cash", "card", "online"];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* AMOUNT */}
        <PlainTextInput
          id="amount"
          label="Amount"
          value={formData.amount}
          onChange={(e) => handleFieldChange("amount", e.target.value)}
          error={errors.amount}
          placeholder="Enter amount"
          required
        />

        {/* PAYMENT MODE - RADIO BUTTONS */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Payment Mode</label>
          <div className="flex gap-4">
            {paymentOptions.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMode"
                  value={option}
                  checked={formData.paymentMode === option}
                  onChange={() => handleFieldChange("paymentMode", option)}
                  className="w-4 h-4"
                />
                <span className="capitalize">{option}</span>
              </label>
            ))}
          </div>
          {errors.paymentMode && (
            <p className="text-red-500 text-sm mt-1">{errors.paymentMode}</p>
          )}
        </div>
      </div>

      {/* OPTIONAL NOTES */}
      <div className="mt-5">
        <PlainTextInput
          id="paymentNotes"
          label="Payment Notes (Optional)"
          value={formData.paymentNotes || ""}
          onChange={(e) => handleFieldChange("paymentNotes", e.target.value)}
          placeholder="Any reference or note"
        />
      </div>

      {/* VALIDATE BUTTON */}
      <div className="mt-6 text-right">
        <Button type="button" onClick={handleValidate}>
          Validate Payment Info
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
