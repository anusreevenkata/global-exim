import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
    .sendForm(
      "service_oelsvmg",
      "template_zy4kj7z",
      form.current,
      "o-ryk8CFNpLI0_8P4"
    )
    .then((result) => {
      console.log("SUCCESS!", result.text);

      setSuccess(true);
      setLoading(false);
      form.current.reset();
    })
    .catch((error) => {
      console.error("EMAILJS ERROR:", error);

      alert(
        `Failed to send inquiry.\n\nStatus: ${error.status}\nText: ${error.text}`
      );

      setLoading(false);
    });
};

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-5xl font-bold text-center mb-4">
          Contact Global Exim
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Send us your inquiry and we will get back to you shortly.
        </p>

        {success && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
            Inquiry sent successfully!
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="hidden"
            name="title"
            value="Website Inquiry"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full border p-4 rounded-lg"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

        </form>

        <div className="mt-12 border-t pt-8">
          <h3 className="text-2xl font-bold mb-4">
            Contact Information
          </h3>

          <p>
            <strong>Email:</strong> nattechand111@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> +91 8008529646
          </p>

          <p>
            <strong>Location:</strong> Hyderabad, India
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contact;