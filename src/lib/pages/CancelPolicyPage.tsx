const CancelPolicyPage = () => {
  return (
    <div className="h-[600px] mt-40 ">
      <h1 className="text-[#717d67] text-center mt-10 py-10 text-5xl">
        Cancellation Policy
      </h1>

      <div className="text-center">
        <p className="text-md tracking-wide text-gray-800 mx-auto pb-6">
          At Zen Healing, we understand that plans can change. Please review our
          cancellation policy carefully.
        </p>
      </div>

      <div className="py-4 mx-auto  md:w-4xl">
        <h2 className="text-[#717d67] text-lg">1. Cancelling Your Booking</h2>
        <p className="text-md tracking-wide text-gray-800 mx-auto">
          You may cancel your booking at any time through our{" "}
          <strong>Manage Booking</strong> page or by contacting us directly.
        </p>
      </div>

      <div className="py-4 mx-auto  md:w-4xl">
        <h2 className="text-[#717d67] text-lg">2. Refunds</h2>
        <ul>
          <li className="text-gray-800 text-md tracking-wide">
            Cancelled more than 24 hours before the session:{" "}
            <strong>Full refund</strong>
          </li>
          <li className="text-gray-800 text-md tracking-wide">
            Cancelled within 24 hours of the session:{" "}
            <strong>50% refund</strong>
          </li>
        </ul>
      </div>

      <div className="py-4 mx-auto md:w-4xl">
        <h2 className="text-[#717d67] text-lg">3. No-Shows</h2>
        <p className="text-gray-800 text-md tracking-wide">
          Failure to attend a session without cancellation will be treated as a
          no-show and no refund will be issued.
        </p>
      </div>

      <div className="py-4 mx-auto md:w-4xl">
        <p className="text-gray-800 text-md tracking-wide">
          For any questions regarding cancellations or refunds, please contact
          us at <strong>info@zenhealing.co.uk</strong>.
        </p>
      </div>
    </div>
  );
};

export default CancelPolicyPage;
