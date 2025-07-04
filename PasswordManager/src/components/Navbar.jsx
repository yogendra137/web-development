function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Password Manager</div>
        <ul className="flex space-x-4">
                <li><a className="text-white">Home</a></li>
                <li><a className="text-white">About</a></li>
                <li><a className="text-white">Contact</a></li>
        </ul>
        <div>
        <button className="text-white px-4 py-2 rounded hover:bg-gray-700">
            Login
        </button>
        <button className="text-white px-4 py-2 rounded hover:bg-gray-700 ml-2">
            Register
        </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;