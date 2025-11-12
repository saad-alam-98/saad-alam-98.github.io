import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/saad-alam-98', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/saad-alam-sa/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:saadalam1192@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-secondary font-mono text-lg"
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="heading-primary"
            >
              Muhammad Saad Alam
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="heading-secondary text-textSecondary"
            >
              I create engaging mobile and web games and applications.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-body max-w-lg"
            >
              I build games. I love creating fun, smooth, and scalable experiences for mobile and Web3 platforms. Whether it’s gameplay, systems, or overall feel, I enjoy bringing ideas to life and making them actually fun to play.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="https://drive.google.com/file/d/1EsZO4I8LQq4eDZlaZYZ3XZ16zfpsiVov/view?usp=drive_link" className="btn-outline flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                <FiDownload />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end space-y-6"
          >
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="text-textSecondary hover:text-secondary transition-all duration-300 p-3 border border-gray-700 rounded-lg hover:border-secondary"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden lg:block w-px h-32 bg-gradient-to-b from-secondary to-transparent"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-secondary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 