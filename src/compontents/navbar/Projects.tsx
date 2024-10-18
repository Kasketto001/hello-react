
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Project 1" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Project Title 1</h3>
              <p className="text-gray-700 mb-4">Short project description that highlights the key features.</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
