import { useEffect } from "react";
import toast from "react-hot-toast";

const SuccessPaymentPage = () => {
  useEffect(() => {
    toast.success("✅ Thank you for your payment!");
    // Redirect after 5s
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-6xl font-semibold italic text-[#717d67] mb-6">
        Payment Successful 🎉
      </h1>
      <p className="text-md text-gray-700 mb-6">
        Thank you for booking with Zen Healing.
        <br />
        We’ve sent you a confirmation email with your session details.
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

export default SuccessPaymentPage;
