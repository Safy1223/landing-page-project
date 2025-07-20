import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* الحقوق */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {currentYear} Mostafa Khalil. All rights reserved.</p>
          <p className="text-sm text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

        {/* روابط التواصل الاجتماعي */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Safy1223" // <-- ضع رابط GitHub هنا
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
