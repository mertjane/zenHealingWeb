const TermsConditionsPage = () => {
  return (
    <div className="md:h-[750px] mt-40">
      <h1 className="text-[#717d67] text-center mt-10 py-10 text-5xl">
        Terms & Conditions
      </h1>

      <div className="py-4 mx-auto  md:w-4xl">
        <h2 className="text-[#717d67] text-lg">1. Introduction</h2>
        <p className="text-md tracking-wide text-gray-800 mx-auto">
          Welcome to Zen Healing. By accessing or using our services, you agree
          to comply with these Terms and Conditions.
        </p>
      </div>

      <div className="py-4 mx-auto  md:w-4xl">
        <h2 className="text-[#717d67] text-lg">2. Booking and Payments</h2>
        <p className="text-md tracking-wide text-gray-800 mx-auto">
          All bookings are subject to availability. Payments are processed
          securely. Cancellation and refund policies apply as stated on our
          website.
        </p>
      </div>

      <div className="py-4 mx-auto  md:w-4xl">
        <h2 className="text-[#717d67] text-lg">3. Cancellations and Refunds</h2>
        <p className="text-md tracking-wide text-gray-800 mx-auto">
          Bookings cancelled more than 24 hours before the session will receive
          a full refund. Bookings cancelled within 24 hours will receive a 50%
          refund.
        </p>
      </div>

      <div className="py-4 mx-auto  md:w-4xl">
        <h2 className="text-[#717d67] text-lg">4. Liability</h2>
        <p className="text-md tracking-wide text-gray-800 mx-auto">
          Zen Healing is not responsible for any personal injury, loss, or
          damage incurred during sessions. Clients attend sessions at their own
          risk.
        </p>
      </div>

      <div className="py-4 mx-auto  md:w-4xl">
        <h2 className="text-[#717d67] text-lg">5. Changes to Terms</h2>
        <p className="text-md tracking-wide text-gray-800 mx-auto">
          We may update these Terms and Conditions from time to time. Continued
          use of our services constitutes acceptance of the updated terms.
        </p>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
