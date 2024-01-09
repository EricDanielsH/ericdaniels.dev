import React from "react";

const Contact = () => {
  const apiMail = process.env.FORM_KEY;

  return (
    <section className="py-28 bg-slate-50 px-4 md:px-16 flex flex-col justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold w-full max-w-[700px] ">
          / Contact Me
        </h3>

        <form
          action={`https://getform.io/f/${apiMail}`}
          method="POST"
          className="max-w-[300px] md:max-w-[600px] w-full"
        >
          <div className="flex flex-col w-full gap-0 mb-2">
            <label htmlFor="name">Name</label>
            <input
              className="p-1 pl-2 border-slate-400 border-2 rounded-md"
              type="text"
              placeholder="Keanu Reeves"
              name="name"
              required
            />
          </div>

          <input type="hidden" name="_gotcha" style={{ display: "none" }} />

          <div className="flex flex-col w-full gap-0 mb-2">
            <label htmlFor="email">Email</label>
            <input
              className="p-1 pl-2 border-slate-400 border-2 rounded-md"
              type="email"
              placeholder="email@gmail.com"
              name="email"
              required
            />
          </div>

          <div className="flex flex-col w-full gap-0 mb-2">
            <label htmlFor="message">Message</label>
            <textarea
              className="p-1 pl-2 border-slate-400 border-2 rounded-md"
              placeholder="I love this page!"
              name="message"
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" className="bg-pink-200 p-2 font-semibold rounded-full px-4 mt-4">SEND</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
