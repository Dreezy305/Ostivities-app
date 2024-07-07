'use client';
import DashboardLayout from "@/app/components/DashboardLayout/DashboardLayout";
import Steppers from "@/app/components/Steppper/Steppers";
import Details from "@/app/components/forms/events/Details";
import React, { useState } from "react";

function Events(): JSX.Element {
  const [activeTab, setActiveTab] = useState('createEvent');

  const title = (
    <div className="flex justify-between items-center w-full relative pb-2">
      <h1 style={{ fontSize: '24px' }}>Create Event</h1>
      <div className="flex space-x-4">
        <span
          className={`font-medium cursor-pointer relative ${activeTab === 'createEvent' ? 'text-black' : 'text-gray-400'}`}
          style={{ fontSize: '15px' }}
          onClick={() => setActiveTab('createEvent')}
        >
          Create Event
          {activeTab === 'createEvent' && (
            <div className="absolute left-0 bottom-[-16px] w-full h-1 bg-red-600 rounded-full"></div>
          )}
        </span>
        <span
          className={`font-medium cursor-pointer relative ${activeTab === 'eventsCreated' ? 'text-black' : 'text-gray-400'}`}
          style={{ fontSize: '15px' }}
          onClick={() => setActiveTab('eventsCreated')}
        >
          Events Created
          {activeTab === 'eventsCreated' && (
            <div className="absolute left-0 bottom-[-16px] w-full h-1 bg-red-600 rounded-full"></div>
          )}
        </span>
      </div>
    </div>
  );

  return (
    <DashboardLayout title={title} steppers={<Steppers />} isLoggedIn>
      <div className="w-5/6 mx-auto flex flex-col space-y-5 py-6">
        <Details />
      </div>
    </DashboardLayout>
  );
}

export default Events;


