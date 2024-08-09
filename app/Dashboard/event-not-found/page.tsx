"use client";
import DashboardLayout from "@/app/components/DashboardLayout/DashboardLayout";
import React from "react";
import { useRouter } from "next/navigation";
import notfound from '@/public/notfound.svg';
import Image from 'next/image';

function EventNotFound(): JSX.Element {
  const router = useRouter();

  const handleBackToDiscovery = () => {
    // Add the route you want to navigate to
    router.push("/Dashboard");
  };

  const title = (
    <div className="flex justify-between items-center w-full relative pb-2">
      <h1 style={{ fontSize: '24px' }}>Discovery</h1>
    </div>
  );

  return (
    <DashboardLayout title={title} isLoggedIn>
      <div className="w-full mx-auto flex flex-row items-center justify-between space-y-5 py-6">
        <div className="w-1/2 flex flex-col gap-2 p-[8rem] justify-center">
          <h2 className="w-full md:w-full font-BricolageGrotesqueMedium text-3xl font-bold mb-4">Oops.... event not found!</h2>
          <p className="w-full md:w-full font-BricolageGrotesqueMedium text-md mb-6">This Event Page doesn`t exist or was removed!
          We suggest you confirm if the url is correct and try again.</p>
          <button
            onClick={handleBackToDiscovery}
            className="primary-btn hover:none w-100 text-center text-white py-2 px-6 rounded-full text-lg"
            style={{ borderRadius: '20px' }} // Apply corner radius
          >
            Back to discovery
          </button>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image 
            src={notfound} 
            alt="Event not found" 
            className="ms-1" 
            width={430} // Adjust the width as needed
            height={430} // Adjust the height as needed
            style={{ objectFit: 'contain' }} // Maintain aspect ratio
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default EventNotFound;
