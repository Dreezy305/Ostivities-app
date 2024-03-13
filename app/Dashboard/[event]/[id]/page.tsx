'use client';

import DashboardLayout from '@/app/components/DashboardLayout/DashboardLayout';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const EventDetail = ({ params }: { params: { id: string } }) => {
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

      <h1>Concert with davido</h1>
    </div>
  );

  return (
    <DashboardLayout title={title}>
      <section>
        <div className="flex gap-12">
          <div className="relative w-fit rounded-[3.125rem] overflow-hidden">
            <Image
              src="/images/placeholder.png"
              alt=""
              height={600}
              width={464}
              className=""
            />
            <div className="absolute inset-0 bg-image-card"></div>
          </div>
          <div className="py-8">
            <h2 className="font-semibold text-3xl">About this event</h2>
            <div className="mt-6 flex flex-col gap-12">
              <div className="flex gap-3">
                <div className="bg-OWANBE_PRY/20 p-2 rounded-xl flex-center justify-center">
                  <Image
                    src="/icons/calendar.svg"
                    alt=""
                    height={30}
                    width={30}
                  />
                </div>
                <div>
                  <div className="text-sm">Date</div>
                  <div>14 December, 2023</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-OWANBE_PRY/20 p-2 rounded-xl flex-center justify-center">
                  <Image src="/icons/time.svg" alt="" height={30} width={30} />
                </div>
                <div>
                  <div className="text-sm">Time</div>
                  <div>5:00PM - 10:00PM WAT</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-OWANBE_PRY/20 p-2 rounded-xl flex-center justify-center">
                  <Image
                    src="/icons/location.svg"
                    alt=""
                    height={30}
                    width={30}
                  />
                </div>
                <div>
                  <div className="text-sm">Loaction</div>
                  <div>3, Eko Hotel Roundabout, Lagos </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-OWANBE_PRY/20 p-2 rounded-xl flex-center justify-center">
                  <Image src="/icons/phone.svg" alt="" height={30} width={30} />
                </div>
                <div>
                  <div className="text-sm">Contact Us</div>
                  <div className="flex-center gap-4 mt-1">
                    <div className="bg-black w-6 h-6 rounded-full flex-center justify-center">
                      <Image
                        src="/icons/instagram.svg"
                        alt=""
                        height={14}
                        width={14}
                      />
                    </div>
                    <div className="bg-black w-6 h-6 rounded-full flex-center justify-center">
                      <Image src="/icons/x.svg" alt="" height={14} width={14} />
                    </div>
                    <div className="bg-black w-6 h-6 rounded-full flex-center justify-center">
                      <Image
                        src="/icons/facebook.svg"
                        alt=""
                        height={10}
                        width={10}
                      />
                    </div>
                    <div className="bg-black w-6 h-6 rounded-full flex-center justify-center">
                      <Image
                        src="/icons/youtube.svg"
                        alt=""
                        height={16}
                        width={16}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-fit my-auto border-l border-black px-6">
            <p>
              consectetur adipiscing elit. Fusce dapibus arcu id dui cursus
              egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce dapibus arcu id dui cursus egestas Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Fusce dapibus arcu id dui
              cursus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce dapibus arcu iui consectetur adipiscing elit. Fusce
              dapibus arcu id dui cursus egestas Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Fusce dapibus arcu id dui cursus
              egestas Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce dapibus arcu id dui cursus egestas. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Fusce dapibus arcu iui{' '}
            </p>
            <div className="flex justify-center mt-12">
              <button
                onClick={() => router.push('/Dashboard/tickets')}
                className="rounded-full bg-OWANBE_PRY px-24 py-3 text-white text-xl font-bold"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default EventDetail;
