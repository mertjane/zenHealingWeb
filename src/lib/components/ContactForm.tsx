const ContactForm = () => {
  return (
    <form className="mx-auto md:mt-10 mt-6 md:p-20 p-6 w-full flex flex-col gap-10">
      <div className="flex md:flex-row flex-col gap-6">
        <span className="flex-1 flex flex-col">
          <label
            htmlFor="fname"
            className="text-2xl tracking-wide text-[#5c6a55]"
          >
            First name <abbr title="required">*</abbr>
          </label>
          <input
            type="text"
            className="py-3 px-2 border-b-2 text-2xl border-[#5c6a55] outline-none"
          />
        </span>
        <span className="flex-1 flex flex-col">
          <label
            htmlFor="sname"
            className="text-2xl tracking-wide text-[#5c6a55]"
          >
            Last name <abbr title="required">*</abbr>
          </label>
          <input
            type="text"
            className="py-3 px-2 border-b-2 text-2xl border-[#5c6a55] outline-none"
          />
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
            type="text"
            className="py-3 px-2 border-b-2 text-2xl border-[#5c6a55] outline-none"
          />
        </span>
        <span className="flex-1 flex flex-col">
          <label
            htmlFor="number"
            className="text-2xl tracking-wide text-[#5c6a55]"
          >
            Phone <abbr title="required">*</abbr>
          </label>
          <input
            type="text"
            className="py-3 px-2 border-b-2 text-2xl border-[#5c6a55] outline-none"
          />
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
            id="message"
            rows={6}
            className="py-3 px-2 border-b-2 text-2xl border-[#5c6a55] outline-none"
          ></textarea>
        </span>
      </div>
      <button className="px-24 py-3 font-thin text-neutral-100 bg-[#5c6a55] rounded-full text-2xl w-max tracking-wide cursor-pointer hover:bg-gray-600 duration-300">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
