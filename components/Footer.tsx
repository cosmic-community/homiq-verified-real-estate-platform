export default function Footer() {
  return (
    <footer id="contact" className="bg-text text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <div className="text-2xl sm:text-3xl font-clash font-bold mb-4">
              Homiq
            </div>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              Find verified homes instantly with AI-powered recommendations and real-time availability.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-clash font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-sm sm:text-base opacity-80 hover:opacity-100 transition-opacity">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#properties" className="text-sm sm:text-base opacity-80 hover:opacity-100 transition-opacity">
                  Properties
                </a>
              </li>
              <li>
                <a href="#verification" className="text-sm sm:text-base opacity-80 hover:opacity-100 transition-opacity">
                  How We Verify
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm sm:text-base opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-clash font-bold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm sm:text-base opacity-80">
              <p>📧 hello@homiq.com</p>
              <p>📞 (555) 123-4567</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Twitter
                </a>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Facebook
                </a>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm opacity-60">
            © {new Date().getFullYear()} Homiq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}