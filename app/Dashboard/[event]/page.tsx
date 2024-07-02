'use client';

import DashboardLayout from '@/app/components/DashboardLayout/DashboardLayout';
import InfoCard from '@/app/components/DashboardLayout/InfoCard';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

interface PropsI {
  event: 'popular' | 'discovery' | 'paid' | 'free' | 'online';
}

const Event = ({ params }: { params: { event: string } }) => {
  const uri = ['popular', 'discovery', 'paid', 'free', 'online'];
  const router = useRouter();

  const title = (
    <div className="flex-center gap-2">
      <Image
        src="/icons/back-arrow.svg"
        alt=""
        height={30}
        width={30}
        onClick={() => router.back()}
        className="cursor-pointer"
      />
      <h1>Popular Events</h1>
    </div>
  );

  useLayoutEffect(() => {
    if (!uri.includes(params.event)) {
      router.push('/Dashboard');
    }
  }, []);

  return (
    <DashboardLayout title={title} isLoggedIn>
      <section>
        <h2 className="font-semibold text-3xl mb-3">Explore Popular Events</h2>
        <div className="grid grid-cols-5 gap-3 gap-y-6 mt-7">
        <InfoCard
        title="Concert with Davido"
        about="Concert"
        status="Get Tickets"
        image="/images/placeholder-1.png"
        url="/Dashboard/discovery/1"
      />
      <InfoCard
        title="Muslim Tech Expo"
        about="Event"
        status="sold out"
        image="/images/placeholder-2.png"
        url="/Dashboard/discovery/1"
      />
      <InfoCard
        title="Tobi weds Shade"
        about="Wedding"
        status="Get Tickets"
        image="/images/placeholder-4.png"
        url="/Dashboard/discovery/1"
      />
      <InfoCard
        title="Agbaya Linkup"
        about="Hangout"
        status="sold out"
        image="/images/placeholder-5.png"
        url="/Dashboard/discovery/1"
      />
          <InfoCard
            title="Concert with Davido"
            about="Concert"
            status="sold out"
            image="/images/placeholder-1.png"
            url="/Dashboard/popular/1"
          />
          <InfoCard
            title="Concert with Davido"
            about="Concert"
            status="sold out"
            image="/images/placeholder-1.png"
            url="/popular/1"
          />
          <InfoCard
            title="Concert with Davido"
            about="Concert"
            status="sold out"
            image="/images/placeholder-1.png"
            url="/Dashboard/popular/1"
          />
          <InfoCard
            title="Concert with Davido"
            about="Concert"
            status="sold out"
            image="/images/placeholder-1.png"
            url="/Dashboard/popular/1"
          />
          <InfoCard
            title="Concert with Davido"
            about="Concert"
            status="sold out"
            image="/images/placeholder-1.png"
            url="/Dashboard/popular/1"
          />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Event;
