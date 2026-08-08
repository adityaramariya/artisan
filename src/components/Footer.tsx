import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/yourstudio",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com/yourstudio",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://youtube.com/@yourstudio",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://linkedin.com/company/yourstudio",
    },
  ];

  return (
    <footer className="bg-black text-center text-gray-400">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Brand */}
        <h2 className="text-2xl font-bold tracking-wide text-white">
          Artisan Studio
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          Capturing timeless stories through photography. Every frame is crafted
          with creativity, emotion, and artistic vision.
        </p>

        {/* Divider */}
        <div className="my-10 border-t border-gray-800" />

        {/* Studio Information */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Address */}
          <div>
            <MapPin className="mx-auto mb-3 h-6 w-6 text-white" />

            <h4 className="mb-2 font-semibold text-white">Studio Address</h4>

            <p className="leading-7">
              Mumbai, Maharashtra
              <br />
              India
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-3 flex justify-center gap-3">
              <Phone className="h-6 w-6 text-white" />
            </div>

            <h4 className="mb-3 font-semibold text-white">Contact</h4>

            <div className="space-y-2">
              <a
                href="tel:+919876543210"
                className="block transition hover:text-white"
              >
                +91 98765 43210
              </a>

              <a
                href="mailto:hello@artisanstudio.com"
                className="block transition hover:text-white"
              >
                hello@artisanstudio.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Follow Us</h4>

            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 transition duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Artisan Studio. All rights reserved.
          </p>

          <p>
            Developed by <span className="text-white">Aditya Ramariya</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
