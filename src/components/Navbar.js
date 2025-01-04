const Navbar = () => {
    return (
        <div>
            <nav className="bg-[#232F3E] p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <img src="" alt="logo" className="h-8" />{" "}
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-white hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:underline">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:underline">
                                Resources
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:underline">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <a
                        href="#"
                        className="bg-yellow-500 text-blue-900 px-4 py-2 rounded hover:bg-yellow-600"
                    >
                        About Us
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;