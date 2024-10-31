import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full pt-[75px] bg-purple-primary py-4">
      <div className="container mx-auto px-4 flex items-center">
        <Logo />

        <div className="hidden md:flex pl-[184px] pr-[51px] items-center space-x-[83px]">
          <a href="#" className="text-white nav-item hover:text-orange-500">
            Home
          </a>
          <a href="#" className="text-white nav-item hover:text-orange-500">
            Our Services
          </a>
          <a href="#" className="text-white nav-item hover:text-orange-500">
            About
          </a>
          <a href="#" className="text-white nav-item hover:text-orange-500">
            Why Choose Us?
          </a>
        </div>
        <button className="bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600 transition-colors">
          Get In Touch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
