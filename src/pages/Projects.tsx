import { Project } from '../types';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "MedicApp",
      description: "A medical appointments and tracking application",
      image: "/api/placeholder/600/400",
      tags: ["Flutter", "Firebase", "Dart"],
      download: "/downloads/mon-app.zip",
    },
    {
      id: 2,
      title: "Portfolio V1",
      description: "My first portfolio with only pure HTML and CSS",
      image: "/api/placeholder/600/400",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://sylvaingrs.github.io/index.html",
    },
    {
      id: 3,
      title: "42sh",
      description: "mini shell POSIX",
      image: "/api/placeholder/600/400",
      tags: ["C", "Bison"],
    },
    {
      id: 4,
      title: "Tiger Compiler",
      description: "Compiler for TIGER language, from front to middle end.",
      image: "/api/placeholder/600/400",
      tags: ["C", "Autotools", "LLVM"],
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">My projects</h2>
        <p className="text-gray-600 mb-10">Discover the projects I've been working on recently</p>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.download && (
                    <a
                      href={project.download}
                      download
                      className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;