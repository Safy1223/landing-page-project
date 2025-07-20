import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="#home" className="text-2xl font-bold text-gray-800">
          MyBrand
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-600 hover:text-blue-500">
            Features
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-500 ">
            About
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
