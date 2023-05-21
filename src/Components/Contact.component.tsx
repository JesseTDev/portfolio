import React from "react";
import {AiOutlineMail} from "react-icons/ai"

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me or contact provided email</p>
          <div className="flex justify-center"><AiOutlineMail className="self-center"/> <p className="px-2">jessetaylordev5@gmail.com</p></div>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/2a469b55-2bbf-4bdc-8052-110ec2b8d346"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={10}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;