function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-black py-12 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Contact Info*/}
        <div className="text-center md:text-left font-serif">
          <h2 className="text-2xl font-bold mb-2">Nivethitha Kirupakaran</h2>
          <p className="text-gray-400 dark:text-gray-500">Full stack developer Intern | Navicode</p>
          <p className="text-gray-400 mt-2 dark:text-gray-500">Atchuvely, Jaffna</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-gray-400">
          <a href="mailto:nivethithakirupakaran@gmail.com" className="hover:text-white transition italic underline decoration-blue-500 underline-offset-4">Email Me</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">© 2026 All Rights Reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;