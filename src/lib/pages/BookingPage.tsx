import { useEffect, useMemo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import { generateTimeSlots } from "../utils/generateSlots";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const sessionDurations: Record<string, number> = {
  "15-min": 15,
  "30-min": 30,
  "45-min": 45,
  "60-min": 60,
};

interface Booking {
  name: string;
  surname: string;
  email: string;
  phone?: string;
  date: string;
  time: string;
  session: string;
}

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

  const [formData, setFormData] = useState<Booking>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [bookedTimes, _setBookedTimes] = useState<string[]>([]);
  const [bookedSessions, setBookedSessions] = useState<
    { time: string; duration: number }[]
  >([]);

  // fetch existing bookings when date changes
  // Update the useEffect
  useEffect(() => {
    if (!formData.date) return;

    const fetchBookings = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/bookings?date=${formData.date}`
        );
        if (!res.ok) throw new Error("Failed to fetch bookings");
        const data: Booking[] = await res.json();

        // Map bookings to include time and duration
        const bookedSessionsData = data.map((booking) => ({
          time: booking.time,
          duration: sessionDurations[booking.session] || 15,
        }));

        setBookedSessions(bookedSessionsData);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        toast.error("Could not load booked times");
      }
    };

    fetchBookings();
  }, [formData.date]);

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
      // Check overlap before submission
      if (bookedTimes.includes(formData.time)) {
        toast.error(
          "That time slot has just been booked. Please pick another."
        );
        setLoading(false);
        return;
      }

      // Always save booking to backend
      const saveRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const savedData = await saveRes.json();

      if (!saveRes.ok) {
        throw new Error(savedData.error || "Failed to save booking");
      }

      // Wait 1-2s for UX
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For free 15-min session: backend already sends emails
      if (formData.session === "15-min") {
        toast.success("Your booking was successful ✅ Confirmation email sent");
        setFormData(initialFormData);
        setLoading(false);
        return; // No payment required
      }

      // For paid sessions, create Stripe checkout
      const stripeRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/stripe/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const stripeData = await stripeRes.json();

      if (stripeData?.id) {
        const stripe = await stripePromise;
        await stripe?.redirectToCheckout({ sessionId: stripeData.id });
      } else {
        toast.error("Error starting payment");
        setLoading(false);
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const selectedDuration = sessionDurations[formData.session] || 15;

  const slots = useMemo(() => {
    return generateTimeSlots(
      9,
      19,
      15,
      selectedDuration,
      bookedSessions // pass booked sessions with durations
    );
  }, [selectedDuration, bookedSessions]);

  return (
    <div className="lg:h-[220vh] sm:h-[320vh] md:h-[300vh] bg-gray-50">
      {/* Hero Section */}
      <div className="md:h-[500px] h-[550px] bg-[#eee6da] md:pt-[14em] pt-[10em] md:px-28 px-10">
        <h1 className="md:text-7xl text-6xl tracking-wider text-[#5c6a55]">
          Book Your Session Now
        </h1>
        <p className="text-neutral-500 md:text-4xl text-xl md:w-3/4 w-full tracking-wider leading-tight font-thin pt-6">
          Transformative healing sessions designed to restore balance, release
          energy blockages, and reconnect you with your inner calm.
        </p>
      </div>

      {/* Booking Form */}
      <div className="flex justify-center items-center py-12 px-6">
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
                name="phone"
                value={formData.phone}
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
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c6a55]"
                required
              >
                <option value="">Select a time</option>
                {slots.map((slot) => (
                  <option
                    key={slot.value}
                    value={slot.value}
                    disabled={slot.disabled}
                  >
                    {slot.label} {slot.disabled ? "(Not available)" : ""}
                  </option>
                ))}
              </select>
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
