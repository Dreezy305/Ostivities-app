'use client';

import DashboardLayout from '@/app/components/DashboardLayout/DashboardLayout';
import Summary from '@/app/components/Discovery/Summary';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Tickets = () => {
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

      <h1>Choose your Tickets</h1>
    </div>
  );

  return (
    <DashboardLayout title={title} isLoggedIn>
      <section className="flex gap-12">
        <section className="flex-1 pr-16">
          <div className="flex-center justify-between">
            <div className="flex-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-OWANBE_PRY/10 flex-center justify-center">
                <Image
                  src="/icons/calendar.svg"
                  alt=""
                  height={30}
                  width={30}
                />
              </div>
              <div>
                <h3 className="text-xs">Date</h3>
                <span>14 December, 2023</span>
              </div>
            </div>
            <div className="flex-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-OWANBE_PRY/10 flex-center justify-center">
                <Image src="/icons/time.svg" alt="" height={30} width={30} />
              </div>
              <div>
                <h3 className="text-xs">Time</h3>
                <span>5:00PM - 10:00PM WAT</span>
              </div>
            </div>
          </div>
          <div className=" mt-7 flex flex-col gap-6">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="card-shadow">
                <div>
                  <h2 className=" text-OWANBE_PRY text-lg">Early Bird</h2>
                  <h3>
                    <span className=" text-OWANBE_PRY text-sm">#5,000</span>{' '}
                    Including #300 fee
                  </h3>
                  <p className=" text-ss mt-4">
                    lorem ipsum dolor sit amet, consectetur adicing elit. Fusce
                    dapibus arcu id dui cursus{' '}
                  </p>
                </div>
                <select
                  name="amount"
                  id=""
                  className=" px-2 py-1 border-[0.5px] border-[#525252] rounded-md w-16 bg-white text-lg"
                >
                  <option value="0">0</option>
                  {Array.from({ length: 10 }, (_, index) => (
                    <option key={index} value={String(index + 1)}>
                      {String(index + 1)}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </section>
        <Summary continueBtn />
      </section>
    </DashboardLayout>
  );
};

export default Tickets;
