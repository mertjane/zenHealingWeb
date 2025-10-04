/* import { useEffect } from "react";
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
 */


import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SuccessPaymentPage = () => {
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const triggerConfirmationEmail = async () => {
      try {
        // Get the session ID from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session_id');
        
        if (!sessionId) {
          console.warn("No session ID found in URL");
          return;
        }

        // Call backend to trigger email sending
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/stripe/trigger-confirmation-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId }),
        });

        if (response.ok) {
          setEmailSent(true);
          console.log("✅ Confirmation email triggered successfully");
        } else {
          console.error("Failed to trigger confirmation email");
        }
      } catch (error) {
        console.error("Error triggering confirmation email:", error);
      }
    };

    toast.success("✅ Thank you for your payment!");
    
    // Trigger email sending
    triggerConfirmationEmail();

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
        {emailSent ? (
          <span className="text-green-600 font-semibold">
            ✅ Confirmation email sent to your inbox!
          </span>
        ) : (
          <span className="text-gray-600">
            We're sending you a confirmation email with your session details...
          </span>
        )}
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
