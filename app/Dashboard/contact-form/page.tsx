'use client';

import DashboardLayout from '@/app/components/DashboardLayout/DashboardLayout';
import Summary from '@/app/components/Discovery/Summary';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  phoneNumber: string;
}

const ContactForm = () => {
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <DashboardLayout title={title} isLoggedIn>
      <section className="flex gap-12">
        <section className="flex-1 pr-16">
          <div className=" bg-OWANBE_NOTIFICATION px-4 py-2 border-[0.5px] border-OWANBE_PRY rounded-[0.625rem]">
            We have reserved your tickets please complete checkout within{' '}
            <span className=" text-OWANBE_PRY">10:00</span> to secure your
            tickets.
          </div>
          <div className="pr-16 mt-16">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-10"
            >
              <div>
                <label htmlFor="firstname" className="grid grid-cols-6 gap-4">
                  <span className="col-span-2 self-center">First Name</span>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Enter First Name"
                    className="border border-[#D1D3D6] rounded-full py-2 px-3 col-span-4"
                    {...register('firstName', { required: true })}
                  />
                </label>
                {errors.firstName && <span>Please provide your first name</span>}
              </div>
              <div>
                <label htmlFor="lastname" className="grid grid-cols-6 gap-4">
                  <span className="col-span-2 self-center">Last Name</span>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Enter Last Name"
                    className="border border-[#D1D3D6] rounded-full py-2 px-3 fle col-span-4"
                    {...register('lastName', { required: true })}
                  />
                </label>
                {errors.lastName && <span>Please provide your Last name</span>}
              </div>
              <div>
                <label htmlFor="email" className="grid grid-cols-6 gap-4">
                  <span className="col-span-2 self-center">Email Address</span>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email Address"
                    className="border border-[#D1D3D6] rounded-full py-2 px-3 col-span-4"
                    {...register('email', { required: true })}
                  />
                </label>
                {errors.email && <span>Please provide your Email</span>}
              </div>
              <div>
                <label
                  htmlFor="confirmemail"
                  className="grid grid-cols-6 gap-4"
                >
                  <span className="col-span-2 self-center">Confirm Email</span>
                  <input
                    type="text"
                    id="confirmemail"
                    placeholder="Confirm Email Address"
                    className="border border-[#D1D3D6] rounded-full py-2 px-3 col-span-4"
                    {...register('confirmEmail', { required: true })}
                  />
                </label>
                {errors.confirmEmail && (
                  <span>Please confirm your Email</span>
                )}
              </div>
              <div>
                <label htmlFor="phoneNumber" className="grid grid-cols-6 gap-4">
                  <span className="col-span-2 self-center">Phone Number</span>
                  <div className="flex border border-[#D1D3D6] rounded-full col-span-4">
                    <select
                      name="code"
                      id="code"
                      className="bg-transparent py-2 px-3 border-r border-[#D1D3D6]"
                    >
                      {Array.from({ length: 5 }, (_, index) => (
                        <option key={index} value={`23${index + 1}`}>
                          +23{String(index + 1)}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      id="phoneNumber"
                      placeholder="Enter Phone Number"
                      className="py-2 px-3"
                      {...register('phoneNumber', { required: true })}
                    />
                  </div>
                </label>
                {errors.phoneNumber && <span>Please provide your Phone Number</span>}
              </div>
            </form>
          </div>
        </section>
        <Summary continueBtn />
      </section>
    </DashboardLayout>
  );
};

export default ContactForm;
