import { useState } from "react";
import contactPage from '../assets/contact.png';

export default function Contact() {
  const [enquiry, setEnquiry] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notify, setNotify] = useState({
    message: "",
    state: false,
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setEnquiry((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(enquiry);

    fetch(`${import.meta.env.VITE_API_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: enquiry.name,
        email: enquiry.email,
        message: enquiry.message,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // You can display it to the user:
        setNotify({message :"Enquiry sent successfully!", state: false});

        // Clear the form
        setEnquiry({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setNotify({message: "Something went wrong. Please try again!", state:true});
      });
  }
  return (
    <main className="min-h-screen font-minecraft">
      <section className="text-white flex flex-col gap-4 w-11/12 mx-auto mt-20">
        <div className="text-3xl 2xl:text-5xl">Contact</div>
        <div>Let’s build something together!</div>
        <div className="flex gap-4 items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-1/2 rounded-md p-10 text-sm"
          >
            {notify.message &&<div className={`${notify.state ? 'text-red-500' : 'text-green-500'}   text-center text-xs`}>{notify.message}</div>}
            <label htmlFor="name">Name</label>
            <input
              value={enquiry.name}
              onChange={handleChange}
              name="name"
              className="border p-3 text-xs rounded-md"
              placeholder="Your name..."
              type="text"
            />
            <label className="mt-4" htmlFor="email">
              E-mail
            </label>
            <input
              value={enquiry.email}
              onChange={handleChange}
              name="email"
              className="border p-3 text-xs rounded-md"
              placeholder="Your email here..."
              type="email"
            />
            <label className="mt-4" htmlFor="content">
              Message
            </label>
            <textarea
              name="message"
              value={enquiry.message}
              onChange={handleChange}
              placeholder="Enter message..."
              className="border rounded-md p-3 text-xs"
            ></textarea>
            <button className="mt-4 w-fit rounded-md px-2 py-2 bg-white text-neutral-700 cursor-pointer">
              Submit
            </button>
          </form>
          <div className="w-1/2 flex justify-center">
            <img className="w-4/6 rounded-xl" src={contactPage} alt="contact-page" />
          </div>
        </div>
      </section>
    </main>
  );
}
