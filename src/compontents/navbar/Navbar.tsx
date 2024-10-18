

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">Alessandro Cascone</div>
        <div>
          <a href="#projects" className="mx-2 text-gray-700 hover:text-gray-900">Projects</a>
          <a href="#about" className="mx-2 text-gray-700 hover:text-gray-900">About</a>
          <a href="#contact" className="mx-2 text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
