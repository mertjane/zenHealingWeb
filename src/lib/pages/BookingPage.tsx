import { useState } from "react";
import emailjs from "emailjs-com";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const BookingPage = () => {
  const initialFormData = {
    name: "",
    surname: "",
    email: "",
    number: "",
    date: "",
    time: "",
    session: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Wait 3 seconds before sending request (spinner)
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Send to Admin
      if (formData.session === "15-min") {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name + " " + formData.surname,
            from_email: formData.email,
            phone: formData.number,
            to_email: "info@zenhealing.co.uk",
            message: `New booking received:
              Name: ${formData.name} ${formData.surname}
              Email: ${formData.email}
              Phone: ${formData.number}
              Date: ${formData.date}
              Time: ${formData.time}
              Session: ${formData.session}`,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        // Send confirmation to User
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: "Zen Healing", // or your business name
            from_email: "info@zenhealing.co.uk",
            phone: "N/A",
            to_email: formData.email, // ✅ User’s email
            message: `Hi ${formData.name},

Thank you for booking a free 15-min consultation! 🎉  

Here are your booking details:
- Date: ${formData.date}
- Time: ${formData.time}
- Session: 15-min free consultation

We look forward to connecting with you!  

Zen Healing Team`,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        toast.success("You booking successfully proceed! ✅");
        setLoading(false);
        setFormData(initialFormData);
        return; // no payment required
      }

      // For paid sessions, call Stripe checkout
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/stripe/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data?.id) {
        const stripe = await stripePromise;
        await stripe?.redirectToCheckout({ sessionId: data.id });
      } else {
        toast.error("Error starting payment");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="lg:h-[220vh] sm:h-[320vh] md:h-[300vh] bg-gray-50">
      {/* Hero Section */}
      <div className="md:h-[500px] h-[400px] bg-[#eee6da] md:pt-[14em] pt-[10em] md:px-28 px-10">
        <h1 className="md:text-7xl text-6xl tracking-wider text-[#5c6a55]">
          Book Your Session Now
        </h1>
        <p className="text-neutral-500 md:text-4xl text-xl md:w-3/4 w-full tracking-wider leading-tight font-thin pt-6">
          Transformative healing sessions designed to restore balance, release
          energy blockages, and reconnect you with your inner calm.
        </p>
      </div>

      {/* Booking Form */}
      <div className="flex justify-center items-center py-40 px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-2xl space-y-8"
        >
          <h2 className="text-4xl font-semibold text-[#5c6a55] mb-12 text-center">
            Book your session
          </h2>

          {/* Name & Surname */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c6a55]"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Surname
              </label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c6a55]"
                placeholder="Enter your surname"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c6a55]"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c6a55]"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c6a55]"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c6a55]"
                required
              />
            </div>
          </div>

          {/* Session Options */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Session
            </label>
            <select
              name="session"
              value={formData.session}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c6a55]"
              required
            >
              <option value="">Choose a session</option>
              <option value="15-min">15 min free consultation</option>
              <option value="30-min">30 min session – £45</option>
              <option value="45-min">45 min session – £67.50</option>
              <option value="60-min">1 hr session – £90</option>
            </select>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#5c6a55] flex gap-2 cursor-pointer text-white px-8 py-4 rounded-xl shadow-md hover:bg-[#495642] transition duration-300"
            >
              {loading && (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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
              {loading ? "Processing..." : "Confirm Booking & Pay"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
