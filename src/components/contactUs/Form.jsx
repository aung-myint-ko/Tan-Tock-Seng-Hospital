import React from "react";

const Form = () => {
  return (
    <div className=" overflow-hidden mx-5 sm:mx-16 md:mx-24 mb-10">
      <h3
        data-aos="fade-down"
        data-aos-delay="1000"
        className="red pt-6 pb-4 text-base sm:text-2xl font-semibold "
      >
        You Can Drop Your Suggestions Here..
      </h3>
      <form
        data-aos="fade-right"
        className="md:grid md:grid-cols-2 md:gap-x-8 md:w-3/4"
        action=""
      >
        <div className="">
          <label className="block text-sm md:text-base mb-2 " htmlFor="">
            Name
          </label>
          <input
            className=" outline-none border border-gray-400 p-2 mb-3  w-full "
            type="text"
          />
          <label className="block text-sm md:text-base mb-2 " htmlFor="">
            Email
          </label>
          <input
            className=" outline-none border border-gray-400 p-2 mb-3  w-full "
            type="text"
          />
        </div>
        <div className="">
          <label className="block text-sm md:text-base mb-2 " htmlFor="">
            Phone
          </label>
          <input
            className=" outline-none border border-gray-400 p-2 mb-3  w-full "
            type="text"
          />
          <label className="block text-sm md:text-base mb-2 " htmlFor="">
            Subject
          </label>
          <input
            className=" outline-none border border-gray-400 p-2 mb-3  w-full "
            type="text"
          />
        </div>
        <div className=" col-span-2">
          <label className="block text-sm md:text-base mb-2 " htmlFor="">
            Suggestions
          </label>
          <textarea
            className="  outline-none border border-gray-400 p-2 mb-3 w-full "
            cols="30"
            rows="5"
          ></textarea>
        </div>
      </form>
      <button
        data-aos="flip-right"
        class="button2 block md:inline w-28 h-10 mx-auto text-base  md:text-lg"
      >
        Send
      </button>
    </div>
  );
};

export default Form;
