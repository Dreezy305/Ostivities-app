'use client';

import React from 'react';
import DiscoverEvents from '../components/DashboardLayout/DiscoverEvents';
import PopularEvents from '../components/DashboardLayout/PopularEvents';
import { Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { Country, State } from "country-state-city";
import { EVENT_TYPES } from '../utils/data';
import DashboardLayout from '../components/DashboardLayout/DashboardLayout';

function PublicEvents(): JSX.Element {
  const route = useRouter();
  const COUNTRY_JSON: any = Country.getAllCountries().map((i: any) => {
    return { value: i?.name, label: i?.name, isoCode: i?.isoCode };
  });
const STATE_BY_COUNTRYCODE = (stateCode: string): { label: string; value: string }[] => {
  const result: any = State.getStatesOfCountry(stateCode);
  const stateJson: { label: string; value: string }[] = result.map((i: any) => {
    return { label: i?.name, value: i?.name };
  });
  return stateJson;
};
  
  const header = (
    <div className="flex-center justify-between w-full">
      <span>Discovery</span>
    </div>
  );
  return (
    <DashboardLayout title={header}>
      <div className="flex flex-col gap-7">
        <DiscoverEvents />
        <div className="border-[1px] border-[#FADEDE] rounded-3xl p-8 shadow-md ">
          <h3 className="font-semibold mb-3">
            Find events happening around you.
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
                    ...STATE_BY_COUNTRYCODE("NG")
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
                    ...EVENT_TYPES
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

export default PublicEvents;
