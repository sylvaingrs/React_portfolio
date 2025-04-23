import { Page } from '../types/index';

type HeaderProps = {
  currentPage: Page;
  navigateTo: (page: Page) => void;
};

const Header = ({ currentPage, navigateTo }: HeaderProps) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Sylvain</h1>
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li>
            <button 
              className={`hover:text-blue-500 transition-colors ${currentPage === 'home' ? 'text-blue-500 font-semibold' : ''}`}
              onClick={() => navigateTo('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={`hover:text-blue-500 transition-colors ${currentPage === 'projects' ? 'text-blue-500 font-semibold' : ''}`}
              onClick={() => navigateTo('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              className={`hover:text-blue-500 transition-colors ${currentPage === 'contact' ? 'text-blue-500 font-semibold' : ''}`}
              onClick={() => navigateTo('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;