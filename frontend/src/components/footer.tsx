const Footer = () => {
    return (
        <footer className="bg-black text-neutral-300 py-10 border-t border-neutral-700">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo Section */}
            <div className="flex flex-col space-y-4 md:text-left text-center">
              <h2 className="text-white font-bold text-xl">Tricode</h2>
              <p className="text-sm max-w-xs">
                Master the art of collaborative coding with Tricode, the platform where you can code together, learn, and build amazing projects.
              </p>
            </div>
            
            {/* Social Links Section */}
            <div className="flex flex-col space-y-4 md:text-right text-center mt-6 md:mt-0">
              <h3 className="text-white font-semibold">Follow Us</h3>
              <ul className="flex justify-center md:justify-end space-x-4">
                <li>
                  <a href="https://github.com/Sivasish48/TriCode" aria-label="GitHub" className="hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.261.82-.578 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.547-1.387-1.334-1.758-1.334-1.758-1.09-.745.083-.73.083-.73 1.204.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.774.42-1.305.764-1.605-2.664-.305-5.467-1.332-5.467-5.933 0-1.31.468-2.38 1.237-3.221-.124-.305-.536-1.528.117-3.184 0 0 1.01-.322 3.305 1.23a11.52 11.52 0 0 1 3.007-.404c1.02.005 2.045.137 3.006.404 2.294-1.552 3.305-1.23 3.305-1.23.653 1.656.241 2.88.118 3.184.77.841 1.236 1.911 1.236 3.221 0 4.61-2.806 5.625-5.476 5.921.432.371.818 1.1.818 2.219 0 1.604-.014 2.895-.014 3.292 0 .319.218.694.825.576C20.565 21.795 24 17.302 24 12 24 5.37 18.63 0 12 0z" />
                    </svg>
                  </a>
                </li>
                {/* Additional social links can be added here */}
              </ul>
            </div>
          </div>
  
          <div className="pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Tricode. All rights reserved By Sivasish Praharaj</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  