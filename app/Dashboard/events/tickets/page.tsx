import DashboardLayout from "@/app/components/DashboardLayout/DashboardLayout";
import Steppers from "@/app/components/Steppper/Steppers";
import EventTicketForm from "@/app/components/forms/events/EventTickets";
import React from "react";

function EventsTickets(): JSX.Element {
  return (
    <DashboardLayout title="Events Creation" steppers={<Steppers />}>
      <div className="w-5/6 mx-auto flex flex-col space-y-5 py-6">
        <EventTicketForm />
      </div>
    </DashboardLayout>
  );
}

export default EventsTickets;
