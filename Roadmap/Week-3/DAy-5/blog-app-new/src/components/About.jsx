const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 ">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        About Us
      </h1>

      <p className="text-justify text-lg text-slate-700 leading-relaxed mb-4">
        EduTech Blog is an educational platform built for students,
        engineers, and aspiring developers who want to learn programming
        concepts in a clear and practical way.
      </p>

      <p className="text-justify text-lg text-slate-700 leading-relaxed mb-4">
        We focus on simplifying complex topics like JavaScript, React,
        MERN Stack, and core Computer Science concepts using real-world
        intuition and examples.
      </p>

      <p className="text-justify text-lg text-slate-700 leading-relaxed mb-10">
        This blog is built with modern web technologies like React and
        React Router, following clean UI and industry-standard practices.
      </p>

      <div className="text-justify grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            What We Teach
          </h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React & MERN Stack</li>
            <li>Java Programming</li>
            <li>Computer Science Basics</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Who This Is For
          </h3>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Engineering Students</li>
            <li>Beginner Developers</li>
            <li>Frontend Learners</li>
            <li>Placement Aspirants</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
