import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/saad-alam-98/', label: 'GitHub' },
    { icon: FiLinkedin, href: 'http://www.linkedin.com/in/saad-alam-sa', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:saadalam1192@gmail.com', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 bg-opacity-20 border-t border-gray-800">
      <div className="container-custom">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-secondary font-bold text-xl font-mono">
                &lt;Muhammad Saad Alam /&gt;
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                A passionate Team Lead & Senior Software Engineer with 10+ years of experience in 
                full-stack development, game development, and scalable backend systems. Specializing 
                in Unity3D, React, Go, and cloud-native architectures.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-textPrimary font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Portfolio', href: '#projects' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-textSecondary hover:text-secondary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-textPrimary font-semibold">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <p className="text-textSecondary">
                  <span className="text-secondary">Email:</span> saadalam1192@gmail.com
                </p>
                <p className="text-textSecondary">
                  <span className="text-secondary">Phone:</span> +92 332-218-0984
                </p>
                <p className="text-textSecondary">
                  <span className="text-secondary">Location:</span> Karachi, Pakistan
                </p>
                <p className="text-textSecondary">
                  <span className="text-secondary">Experience:</span> 10+ Years
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="text-textSecondary hover:text-secondary transition-all duration-300 p-3 border border-gray-700 rounded-lg hover:border-secondary"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-8"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-textSecondary text-sm cursor-default">
              © {currentYear} Muhammad Saad Alam. All rights reserved. Made with{' '}
              <FiHeart className="inline text-red-500" /> by{' '}
              <span className="text-secondary">Muhammad Saad Alam</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 