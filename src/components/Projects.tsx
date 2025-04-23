type Project = {
    title: string;
    image: string;
    github: string;
    download: string;
};

const projects: Project[] = [
    {
      title: "Mon App React",
      image: "/project1.png",
      github: "https://github.com/sylvain/mon-app",
      download: "/downloads/mon-app.zip",
    },
    {
      title: "Portfolio V1",
      image: "/project2.png",
      github: "https://github.com/sylvain/portfolio-v1",
      download: "/downloads/portfolio-v1.zip",
    },
]

const Projects = () => {
    return (
    <section id="projects" className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Mes Projets</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-sm"
                  >
                    Voir sur GitHub
                  </a>
                  <a
                    href={project.download}
                    download
                    className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-sm"
                  >
                    Télécharger
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;