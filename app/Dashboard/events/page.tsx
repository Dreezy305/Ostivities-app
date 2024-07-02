import DashboardLayout from "@/app/components/DashboardLayout/DashboardLayout";
import Steppers from "@/app/components/Steppper/Steppers";
import Details from "@/app/components/forms/events/Details";
import React from "react";

function Events(): JSX.Element {
  return (
    <DashboardLayout title="Event Creation" steppers={<Steppers />} isLoggedIn>
      <div className="w-5/6 mx-auto flex flex-col space-y-5 py-6">
        <Details />
      </div>
    </DashboardLayout>
  );
}

export default Events;
