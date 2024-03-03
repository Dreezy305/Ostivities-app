'use client';

import DashboardLayout from '@/app/components/DashboardLayout/DashboardLayout';
import Summary from '@/app/components/Discovery/Summary';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Payment = () => {
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
      <section className="flex gap-12">
        <section className="flex-1">
          <div className=" bg-OWANBE_NOTIFICATION px-4 py-2 border-[0.5px] border-OWANBE_PRY rounded-[0.625rem]">
            We have reserved your tickets please complete checkout within 10:00
            to secure your tickets.
          </div>
          <div className="pr-16 mt-16">
            <div className="card-shadow flex justify-between">
              <div className="flex gap-3 items-start">
                <div className="pt-1">
                  <input type="checkbox" name="" id="" />
                </div>
                <div>
                  <h2 className="text-lg text-OWANBE_PRY">
                    Pay with Card or Bank
                  </h2>
                  <span className="text-ss">
                    Pay with a MasterCard, Visa, Verve Card or directly with
                    your bank
                  </span>
                </div>
              </div>
              <Image
                src="/images/paystack.svg"
                alt="paystack"
                height={18}
                width={80}
              />
            </div>
            <div className="card-shadow flex justify-between">
              <div className="flex gap-3 items-start">
                <div className="pt-1">
                  <input type="checkbox" name="" id="" />
                </div>
                <div>
                  <h2 className="text-lg text-OWANBE_PRY">
                    Pay with Bank Transfer
                  </h2>
                  <span className="text-ss">
                    Pay with a MasterCard, Visa, Verve Card or directly with
                    your bank
                  </span>
                </div>
              </div>
              <Image
                src="/images/paystack.svg"
                alt="paystack"
                height={18}
                width={80}
              />
            </div>
            <div className="flex-center gap-2 mt-3 [&>p>a]:text-OWANBE_PRY">
              <div className="">
                <input type="checkbox" name="" id="" />
              </div>
              <p>
                I accept the{' '}
                <Link href="#">terms and condition, Refund Policy</Link> and
                <Link href="#"> Privacy Policy</Link>
              </p>
            </div>
            <div className=" mt-16">
              <button className="primary-btn w-full">Make Payment</button>
            </div>
          </div>
        </section>
        <Summary />
      </section>
    </DashboardLayout>
  );
};

export default Payment;
