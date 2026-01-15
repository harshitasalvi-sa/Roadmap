const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h3 className="text-2xl font-bold mb-3">EduTech Blog</h3>

        <p className="text-blue-200 max-w-xl mx-auto mb-6">
          Learn Web Development, Programming, and Computer Science concepts
          through simple, practical, and beginner-friendly blogs.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {["HTML", "CSS", "JavaScript", "React", "MERN", "Java"].map(
            (tech) => (
              <span
                key={tech}
                className="bg-blue-700 px-4 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            )
          )}
        </div>

        <p className="text-sm text-blue-300">
          © {new Date().getFullYear()} EduTech Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
