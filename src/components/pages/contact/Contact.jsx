export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-50 text-center px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
      <p className="text-gray-600 mb-8">
        I’d love to hear from you! Fill out the form below or reach me directly.
      </p>
      <form className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full mb-4 p-3 border rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
