import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import { RiErrorWarningLine } from "react-icons/ri";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

const ContactForm = () => {
  const [form, setForm] = useState({
    fname: "",
    sname: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.fname) newErrors.fname = "First name is required";
    if (!form.sname) newErrors.sname = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid";
    if (!form.number) newErrors.number = "Phone number is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear individual error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.fname + " " + form.sname,
          from_email: form.email,
          phone: form.number,
          message: form.message,
        },
        publicKey
      );
      console.log(result)
      toast.success("Message sent successfully!");
      setForm({ fname: "", sname: "", email: "", number: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit}
        className="mx-auto md:mt-10 mt-6 md:p-20 p-6 w-full flex flex-col gap-10"
      >
        <div className="flex md:flex-row flex-col gap-6">
          <span className="flex-1 flex flex-col">
            <label
              htmlFor="fname"
              className="text-2xl tracking-wide text-[#5c6a55]"
            >
              First name <abbr title="required">*</abbr>
            </label>
            <input
              name="fname"
              type="text"
              value={form.fname}
              onChange={handleChange}
              className="py-3 px-2 border-b-2 text-2xl border-[#5c6a55] outline-none"
            />
            {errors.fname && (
              <span className="text-red-500 text-sm mt-3 flex items-center gap-2">
                <RiErrorWarningLine color="red" size={15} />
                {errors.fname}
              </span>
            )}
          </span>
          <span className="flex-1 flex flex-col">
            <label
              htmlFor="sname"
              className="text-2xl tracking-wide text-[#5c6a55]"
            >
              Last name <abbr title="required">*</abbr>
            </label>
            <input
              name="sname"
              type="text"
              value={form.sname}
              onChange={handleChange}
              className="py-3 px-2 border-b-2 text-2xl border-[#5c6a55] outline-none"
            />
            {errors.sname && (
              <span className="text-red-500 text-sm mt-3 flex items-center gap-2">
                <RiErrorWarningLine color="red" size={15} />
                {errors.sname}
              </span>
            )}
          </span>
        </div>
        <div className="flex md:flex-row flex-col gap-6">
          <span className="flex-1 flex flex-col">
            <label
              htmlFor="email"
              className="text-2xl tracking-wide text-[#5c6a55]"
            >
              Email <abbr title="required">*</abbr>
            </label>
            <input
              name="email"
              type="text"
              value={form.email}
              onChange={handleChange}
              className="py-3 px-2 border-b-2 text-2xl border-[#5c6a55] outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-3 flex items-center gap-2">
                <RiErrorWarningLine color="red" size={15} />
                {errors.email}
              </span>
            )}
          </span>
          <span className="flex-1 flex flex-col">
            <label
              htmlFor="number"
              className="text-2xl tracking-wide text-[#5c6a55]"
            >
              Phone <abbr title="required">*</abbr>
            </label>
            <input
              name="number"
              type="text"
              value={form.number}
              onChange={handleChange}
              className="py-3 px-2 border-b-2 text-2xl border-[#5c6a55] outline-none"
            />
            {errors.number && (
              <span className="text-red-500 text-sm mt-3 flex items-center gap-2">
                <RiErrorWarningLine color="red" size={15} />
                {errors.number}
              </span>
            )}
          </span>
        </div>
        <div className="flex">
          <span className="flex-1 flex flex-col">
            <label
              htmlFor="message"
              className="text-2xl tracking-wide text-[#5c6a55]"
            >
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              className="py-3 px-2 border-b-2 text-2xl border-[#5c6a55] outline-none"
            ></textarea>
          </span>
        </div>
        <button
          type="submit"
          className="px-24 py-3 font-thin text-neutral-100 bg-[#5c6a55] rounded-full text-2xl w-max tracking-wide cursor-pointer hover:bg-gray-600 duration-300"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
