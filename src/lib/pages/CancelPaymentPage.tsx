const CancelPaymentPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      <h1 className="text-6xl font-semibold italic text-[#717d67] mb-6">
        Payment Cancelled
      </h1>
      <p className="text-md text-gray-700 mb-6">
        Looks like you didn’t complete your booking. No worries — you can try
        again anytime.
      </p>
      <a
        href="/"
        className="bg-[#5c6a55] text-white px-6 py-3 rounded-lg shadow hover:bg-[#495642] transition"
      >
        Back to Home
      </a>
    </div>
  );
};

export default CancelPaymentPage;
