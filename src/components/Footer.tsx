import React from "react";
import { Dog } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-petblue-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Dog className="h-8 w-8 text-white" />
              <span className="text-xl font-bold">Pawsome</span>
            </div>
            <p className="text-blue-200 mb-6">
              Revolutionizing pet care through technology and community.
            </p>
            <div className="flex space-x-4">
              <a
                href="linkedin.com/company/pawsome-lk"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM7.5 8.98h4.78v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 5.99 3.33 5.99 7.66V24h-5V16.2c0-1.85-.03-4.23-2.58-4.23-2.59 0-2.99 2.02-2.99 4.1V24h-5V8.98z"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/pawsome.lk.app/"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  AI Pet Assistance
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Rescue Community
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Pricing Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-blue-200 text-sm">
              &copy; {new Date().getFullYear()} Pawsome. All rights reserved.
            </p>
            <div className="md:text-right text-sm text-blue-300">
              Made with ❤️ for pets and their humans everywhere
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
