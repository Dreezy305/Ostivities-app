'use client';

import DashboardLayout from '@/app/components/DashboardLayout/DashboardLayout';
import React from 'react';
import DiscoverEvents from '../components/DashboardLayout/DiscoverEvents';
import PopularEvents from '../components/DashboardLayout/PopularEvents';
import { Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function Dashboard(): JSX.Element {
  const header = (
    <div className="flex-center justify-between w-full">
      <span>Event Discovery</span>
      <button className=" bg-OWANBE_PRY rounded-full px-4 py-2 text-xs font-semibold text-white">
        {' '}
        <PlusOutlined /> <span className="pl-1">Create New Event</span>
      </button>
    </div>
  );
  return (
    <DashboardLayout title={header}>
      <div className="flex flex-col gap-7">
        <DiscoverEvents />
        <div className="border-[1px] border-[#FADEDE] rounded-3xl p-8 shadow-md ">
          <h3 className="font-semibold mb-3">
            Find Events Happening around you
          </h3>
          <div>
            <form action="" className="flex gap-4 [&>lable]:flex-1">
              <label htmlFor="name" className="w-full">
                <span className=" text-OWANBE_PRY mb-1 block">Event Name</span>
                <Input placeholder="Enter Event Name" className="w-full" />
              </label>
              <label htmlFor="state" className="w-full">
                <span className=" text-OWANBE_PRY mb-1 block">Event State</span>
                <Select
                  defaultValue="Select State"
                  className="w-full"
                  // onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                  ]}
                />
              </label>
              <label htmlFor="type" className="w-full">
                <span className=" text-OWANBE_PRY mb-1 block">Event Type</span>
                <Select
                  defaultValue="Select event type"
                  className="w-full"
                  // onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                  ]}
                />
              </label>
              <div className="flex items-end">
                <button className=" place-items-end w-36 h-fit text-sm text-white bg-OWANBE_PRY py-3 px-12 rounded-full">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
        <PopularEvents />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
