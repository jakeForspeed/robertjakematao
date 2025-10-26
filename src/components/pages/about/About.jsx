export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-center px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
        I’m a dedicated web developer with a strong focus on frontend and backend
        technologies. I enjoy solving real-world problems and learning new
        frameworks. My current stack includes ReactJS, Laravel, and Tailwind CSS.
      </p>
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">ReactJS</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">Laravel</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">Tailwind CSS</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">MySQL</span>
      </div>
    </section>
  );
}
