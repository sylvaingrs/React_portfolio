const Header = () => {
    return (
      <header className="bg-white shadow-md p-4 sticky top-0 z-50">
        <nav className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Sylvain</h1>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><a href="#about" className="hover:text-blue-500">À propos</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projets</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>
      
    )
  }
  
  export default Header