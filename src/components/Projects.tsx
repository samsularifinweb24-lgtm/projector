

export default function Projects() {
  const projects = [
    {
      title: "Personal Project One",
      description: "This is my first project card with my own photo.",
      image: "/sohan3.jpg",
      color: "blue-300",
      shadow: "shadow-blue-500/50",
      bg: "bg-gray-900",
    },
    {
      title: "Personal Project Two",
      description: "Another styled project card with hover pink effect.",
      image: "/sohan1.jpg",
      color: "pink-300",
      shadow: "shadow-pink-500/50",
      bg: "bg-gray-800",
    },
    {
      title: "Personal Project Three",
      description: "Third card with green glowing shadow hover effect.",
      image: "/sohan2.jpg",
      color: "green-300",
      shadow: "shadow-green-500/50",
      bg: "bg-gray-700",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">Projects</h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-6 ${project.bg} rounded-2xl shadow-lg hover:scale-105 hover:${project.shadow} transition-transform duration-300`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-56 sm:h-64 md:h-72 lg:h-64 object-cover"
            />
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-${project.color}`}>
              {project.title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

