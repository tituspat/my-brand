
import contactInfo from '../data/contact';
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ExternalLink, 
  ArrowRight,
  Code,
  CheckCircle,
  MessageCircle 
} from 'lucide-react';

const Footer = () => {
  const services = [
    "Website Custom",
    "Company Profile",
    "E-Commerce",
    "Web Application",
    "Landing Page",
    "Sistem Informasi"
  ];

  const resources = [
    "portfolio",
    /*"Case Studies",
    "Blog & Artikel",
    "Dokumentasi API",
    "Privacy Policy",
    "Terms of Service"*/
  ];

  const socials = [
    { icon: <Facebook className="w-5 h-5" />, link: "#", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, link: "#", name: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, link: "#", name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, link: "#", name: "LinkedIn" }
  ];

  const quickContact = {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Need help?",
    description: "Konsultasikan project Anda dengan tim kami",
    link: "#kontak"
  };

  const features = [
    "Modern Tech Stack",
    "SEO Optimized",
    "Responsive Design",
    "Fast Performance",
    "Secure & Reliable",
    "24/7 Support"
  ];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Scroll dengan animasi halus
    } else {
      console.error(`Element with ID "${section}" not found.`);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Pre-Footer CTA */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              {quickContact.icon}
              <div>
                <h3 className="text-white font-semibold">{quickContact.title}</h3>
                <p className="text-gray-400">{quickContact.description}</p>
              </div>
            </div>
            <a 
              href={quickContact.link}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Hubungi Kami
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Code className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold text-white">WCS</span>
            </div>
            <p className="text-gray-400">
              Solusi digital terbaik untuk mengembangkan bisnis Anda ke level berikutnya dengan website modern dan sistem yang handal.
            </p>
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Layanan</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    
                    onClick={() => scrollToSection(resource)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 capitalize"
                  >
                    <ArrowRight className="w-4 h-4 " />
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <a 
                href={contactInfo.whatsapp}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                {contactInfo.email}
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                {contactInfo.address}
              </div>

              {/* Social Links */}
              {/*<div className="pt-4">
                <div className="flex gap-4">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>*/}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 WCS. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {/*<a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;