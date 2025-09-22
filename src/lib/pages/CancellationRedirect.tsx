import React, { useState } from "react";
import toast from "react-hot-toast";

const CancellationRedirect = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [cancelled, setCancelled] = useState<boolean>(false); // protect route after submission

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cancel-booking`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to cancel booking");
      }

      toast.success("Your booking has been cancelled successfully ✅");
      setCancelled(true);
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 mt-32 max-w-md w-full">
        {!cancelled ? (
          <>
            <h1 className="text-4xl font-bold text-[#5c6a55] mb-4 text-center">
              Cancel Your Booking
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Enter your email below to confirm your booking cancellation. You
              will receive an email with further instructions.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your booking email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c6a55]"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer bg-[#5c6a55] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#495642] transition duration-300 flex items-center justify-center"
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
                {loading ? "Processing..." : "Confirm Cancellation"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#5c6a55] mb-4">
              Booking Cancelled
            </h1>
            <p className="text-gray-600 mb-6">
              Your booking has been successfully cancelled. A confirmation email
              has been sent to <span className="font-semibold">{email}</span>.
            </p>
            <p className="text-gray-500 text-sm">
              Thank you for choosing Zen Healing. If you wish to rebook, please
              visit our{" "}
              <a href="/" className="text-[#5c6a55] underline">
                homepage
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CancellationRedirect;
