import React from "react";
import { Styles } from "../utils/Style";
import contact from "../assets/contact-us.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v24hayn", "template_5dcugmj", form.current, {
        publicKey: "GqVZZI157TEkfDCKY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // alert("Email Send");
    e.target.reset();
  };
  return (
    <div id="Contact">
      <div>
        <div className="pt-3 mt-4 flex-row items-center pl-5 " id="Overview">
          <span className={Styles.sectionHeadText}>Contact</span>
          <hr className="w-[35%]"></hr>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap flex-row justify-around ">
          <div className="lg:w-[40%]">
            <form
              ref={form}
              onSubmit={sendEmail}
              action=""
              className="m-5 flex-col gap-3 flex "
            >
              <label htmlFor="" className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">
                  Your Name
                </span>
                <input
                  required
                  type="text"
                  name="from_name"
                  placeholder="What's your good name?"
                  className=" outline-none border-none font-medium bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg "
                />
              </label>
              <label htmlFor="" className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">
                  Your Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="What's your web address?"
                  className=" outline-none border-none font-medium bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg "
                />
              </label>
              <label htmlFor="" className="flex flex-col gap-3">
                <span className="text-violet-700 font-medium mb-2">
                  Your Message
                </span>
                <textarea
                  required
                  rows={5}
                  //   type="text"
                  name="message"
                  placeholder="What you want to say?"
                  className=" outline-none border-none font-medium bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg "
                />
              </label>

              <button
                type="submit"
                value="send"
                className="bg-slate-100 hover:shadow-orange-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="lg:w-[50%]">
            <img src={contact} alt="any img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
