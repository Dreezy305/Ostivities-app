"use client";

import DashboardLayout from "@/app/components/DashboardLayout/DashboardLayout";
import Tab from "@/app/ui/molecules/Tab";
import { useCallback, useState } from "react";

import Billing from "@/app/ui/organisms/Billing";
import Profile from "@/app/ui/organisms/Profile";
import OrderNotifications from "@/app/ui/organisms/OrderNotification";
import PaymentSetting from "@/app/ui/organisms/PaymentSetting";

const tabs = ["Profile", "Billing", "Order Notifications", "Payment Settings"];

function Settings() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const selectCurrentTab = useCallback((tab: string) => {
    setCurrentTab(tab);
  }, []);
  return (
    <DashboardLayout
      title="Settings"
      extraComponents={
        <Tab
          tabs={tabs}
          currentTab={currentTab}
          handleCurrentTab={selectCurrentTab}
        />
      }
      isLoggedIn
    >
      {currentTab === "Profile" ? (
        <Profile />
      ) : currentTab === "Billing" ? (
        <Billing />
      ) : currentTab === "Order Notifications" ? (
        <OrderNotifications />
      ) : currentTab === "Payment Settings" ? (
        <PaymentSetting />
      ) : null}
    </DashboardLayout>
  );
}

export default Settings;
