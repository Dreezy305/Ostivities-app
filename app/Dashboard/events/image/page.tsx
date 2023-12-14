import DashboardLayout from "@/app/components/DashboardLayout/DashboardLayout";
import Steppers from "@/app/components/Steppper/Steppers";
import EventImageForm from "@/app/components/forms/events/Eventimage";
import React from "react";

function EventsImage(): JSX.Element {
  return (
    <DashboardLayout title="Events Creation" steppers={<Steppers />}>
      <div className="w-5/6 mx-auto flex flex-col space-y-5 py-6">
        <EventImageForm />
      </div>
    </DashboardLayout>
  );
}

export default EventsImage;
