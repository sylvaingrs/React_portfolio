import { Page } from '../types/index';

import sylvain_img from '../assets/sylvain_gross.jpg';

type HomeProps = {
  navigateTo: (page: Page) => void;
};

const Home = ({ navigateTo }: HomeProps) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Hello, I'm <span className="text-blue-600">Sylvain</span></h2>
            <h3 className="text-2xl text-gray-600 mb-4">Fullstack Developper</h3>
            <p className="text-lg text-gray-600 mb-6">
              Passionate about creating modern, high-performance user interfaces with React, TypeScript and the latest web technologies.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => navigateTo('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                See projects
              </button>
              <button 
                onClick={() => navigateTo('contact')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Contact me
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="rounded-full bg-blue-100 p-2">
              <div className="bg-blue-600 rounded-full p-1">
                <img 
                  src={sylvain_img}
                  alt="Sylvain"
                  className="w-64 h-64 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['C', 'C#', 'C++', 'Java', 'Python', 'TypeScript', 'Kotlin', 'Dart'].map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Frameworks / library</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Tailwind CSS', 'Vite', 'Node.js', 'Jetpack Compose', 'Flutter', 'Firebase', ].map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;