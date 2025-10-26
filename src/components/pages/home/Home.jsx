export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white text-center px-4"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Hi, I’m <span className="text-blue-600">Jaynee Jane Velasco</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-xl">
        A passionate web developer focused on building modern, responsive
        websites using React, Laravel, and Tailwind CSS.
      </p>
      <a
        href="#contact"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Get in Touch
      </a>
    </section>
  );
}
