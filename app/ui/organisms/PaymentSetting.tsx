import { useState } from "react";
import Button from "../atoms/Button";
import H4 from "../atoms/H4";
import ToggleSwitch from "../atoms/ToggleSwitch";

const PaymentSetting = () => {
  const [activeToggle, setActiveToggle] = useState<string | null>(null);

  const handleToggle = (label: string) => {
    setActiveToggle((prev) => (prev === label ? null : label));
  };

  return (
    <form className="px-12 py-5 min-h-[60vh] flex flex-col items-center justify-between">
      <div className="self-start">
        <>
          <H4 content="Payment Setting" />
          <p className="text-OWANBE_PRY mt-3">
            When would you like to receive payouts of your event ticket sales?
          </p>
        </>

        <div className="flex flex-col gap-y-9 mt-11">
          <ToggleSwitch
            label="weeklyPayment"
            description="Weekly, Payments will be grouped and processed weekly, with disbursements made every Friday."
            isActive={activeToggle === "weeklyPayment"}
            onToggle={() => handleToggle("weeklyPayment")}
          />

          <ToggleSwitch
            label="monthlyPayment"
            description="Monthly, Payments will be processed and disbursed monthly on the last Friday of each month."
            isActive={activeToggle === "monthlyPayment"}
            onToggle={() => handleToggle("monthlyPayment")}
          />
        </div>
      </div>

      <Button
        label="Save"
        size="lg"
        className="mt-16 max-w-xs font-BricolageGrotesqueBold"
      />
    </form>
  );
};

export default PaymentSetting;
