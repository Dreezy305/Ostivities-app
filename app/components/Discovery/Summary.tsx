import Link from 'next/link';

const Summary = ({ continueBtn }: { continueBtn?: boolean }) => {
  return (
    <section className="flex-1">
      <h2 className=" text-3xl text-center">Summary</h2>
      <section className=" mt-14 px-20 h-4/5 border-l border-[#525252]">
        <div>
          <h3 className=" text-OWANBE_PRY text-xl">Event</h3>
          <span className="text-OWANBE_FADE">Concert with Davido</span>
        </div>
        <div>
          <div className=" mt-3 border-b border-[#525252] pb-10">
            <h3 className=" text-OWANBE_PRY text-xl">Payment details</h3>
            <div className="flex flex-col gap-2 mt-2 text-OWANBE_FADE">
              <div className="flex-center justify-between">
                <div>Tickets fee x 2 - Early Bird</div>
                <div>#10,000.00</div>
              </div>
              <div className="flex-center justify-between">
                <div>Fees</div>
                <div>#300.00</div>
              </div>
              <div className="flex-center justify-between">
                <div>Subtotal</div>
                <div>#10,300.00</div>
              </div>
            </div>
          </div>
          <div className="flex-center justify-between font-semibold text-2xl text-OWANBE_PRY my-6">
            <div>Total</div>
            <div>#10,300.00</div>
          </div>
          {continueBtn && (
            <div className="flex justify-center mt-12 mb-6">
              <Link
                href="/Dashboard/payment"
                className="primary-btn hover:none"
              >
                Continue
              </Link>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Summary;
