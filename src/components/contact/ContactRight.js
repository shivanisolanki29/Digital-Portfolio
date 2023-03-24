import React, { useState } from "react";

const ContactRight = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNamber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  //================= Email Validation start Here==========
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  //==================== Email Validation end here==================

  const handleSend = (e) => {
    e.preventDefault();
    // console.log(username);
    if (username === "") {
      setErrMsg("Username is required!");
      // console.log(errMsg);
    } else if (phoneNumber === "") {
      setErrMsg("Phone Number is required!");
      // console.log(errMsg/);
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNamber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <div
      className="w-[60%] h-full 
    bg-gradient-to-r from-[#1e2024] to-[#23272b]
    shadow-shadowOne rounded-lg gap-8 p-8
    flex flex-col 
    justify-center"
    >
      <form className="w-full flex flex-col gap-6 py-5">
        {/* Name and phone number */}
        {errMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024]
            shadow-shadowOne  text-center text-orange-500 text-base 
            tracking-wide animate-bounce"
          >
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024]
            shadow-shadowOne  text-center text-green-500 text-base 
            tracking-wide"
          >
            {successMsg}
          </p>
        )}
        <div className="flex w-full gap-10">
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Your name
            </p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className={`${
                errMsg === "Username is required!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone number
            </p>
            <input
              onChange={(e) => setPhoneNamber(e.target.value)}
              value={phoneNumber}
              className={`${
                errMsg === "Phone Number is required!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
        </div>
        {/* Email */}
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={`${
              (errMsg === "Please give your Email!" ||
                errMsg === "Give a valid Email!") &&
              "outline-designColor"
            } contactInput`}
            type="email"
          />
        </div>
        {/* Subject */}
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm  text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className={`${
              errMsg === "Plese give your Subject!" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        {/* Your message */}
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Your message{" "}
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={`${
              errMsg === "Message is required!" && "outline-designColor"
            } contactTextArea`}
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <div>
          <button
            onClick={handleSend}
            className="w-full h-12 bg-[#191b1e] rounded-lg
            text-base text-gray-400 uppercase hover:text-white 
            duration-300 hover:border-[1px] hover:border-designColor
            border-transparent
          "
          >
            Send Message
          </button>
        </div>
        {errMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024]
            shadow-shadowOne  text-center text-orange-500 text-base 
            tracking-wide animate-bounce"
          >
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024]
            shadow-shadowOne  text-center text-green-500 text-base 
            tracking-wide"
          >
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactRight;
