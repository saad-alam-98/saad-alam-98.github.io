import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiDownload, FiUsers, FiAward, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const FeaturedGame = () => {
  const [activeGame, setActiveGame] = useState(0);

  const featuredGames = [
    {
      id: 1,
      title: 'Tollan Survivors',
      description: 'Backed by a USD 3,000 seed-funded prize pool, and it grows with the community. 70% of all Crown revenue this season will be added to the player-funded prize pool.',
      image: '/TollanSurvivorsSeason-1.png',
      videoLink: null,
      webLink: 'https://tollansurvivors.com/',
      technologies: ['Unity3D', 'C#', 'Web', 'Blockchain'],
      downloads: 'N/A',
      rating: 'N/A',
      features: [
        'Smooth bouncing physics',
        'Multiple challenging levels',
        'Progressive difficulty system',
        'Optimized for all devices',
        'Engaging reward mechanics'
      ],
      icon: '/Icons/TollanSurvivorsSeason-1.png',
    },
    {
      id: 2,
      title: 'El Patrón - Idle Cartel',
      description: 'An idle management game where players build and expand their cartel empire. Features incremental progression, resource management, and strategic gameplay that creates addictive gameplay loops.',
      image: '/el-patron.jpg',
      videoLink: null,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.tiltingpoint.bigwolf.narcosfactory&hl=en',
      technologies: ['Unity3D', 'C#', '...'],
      downloads: '1M+',
      rating: '4.6★',
      features: [
        'Idle progression mechanics',
        'Resource management system',
        'Strategic empire building',
        'Multiple upgrade paths',
        'Engaging idle gameplay'
      ],
      icon: '/Icons/NarcosCartel.png',
    },
    {
      id: 3,
      title: 'Narcos: Idle Empire of Crime',
      description: 'Build your criminal empire in this idle game inspired by the world of Narcos. Manage resources, expand your operations, and climb the ranks of the underworld.',
      image: '/narcos-idle-empire.jpg',
      videoLink: null,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.bigwolf.narcos.idle.empire',
      technologies: ['Unity3D', 'C#', '...'],
      downloads: '50K+',
      rating: '5.0★',
      features: [
        'Idle criminal empire building',
        'Resource and territory management',
        'Upgrade and expansion system',
        'Narcos-themed story and characters',
        'Strategic gameplay mechanics'
      ],
      icon: '/Icons/NarcosEmpire.png',
    }
  ];

  const nextGame = () => {
    setActiveGame((prev) => (prev + 1) % featuredGames.length);
  };

  const prevGame = () => {
    setActiveGame((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);
  };

  const currentGame = featuredGames[activeGame];

  return (
    <section className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiStar className="text-secondary text-2xl" />
            <h2 className="heading-secondary">
              Featured <span className="text-secondary">Games</span>
            </h2>
            <FiStar className="text-secondary text-2xl" />
          </div>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevGame}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-secondary text-primary p-3 rounded-full shadow-lg hover:bg-secondary/80 transition-colors duration-300"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            onClick={nextGame}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-secondary text-primary p-3 rounded-full shadow-lg hover:bg-secondary/80 transition-colors duration-300"
          >
            <FiChevronRight size={24} />
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Game Video/Image */}
            <motion.div
              key={`image-${currentGame.id}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <div
                  className="w-full h-96 flex items-end justify-center relative overflow-hidden bg-gray-950"
                  style={
                    currentGame.icon
                      ? {
                          backgroundImage: `url(${currentGame.icon})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : { backgroundColor: "#0a0a0a" }
                  }
                >
                  <div className="absolute inset-0 bg-gray-950 bg-opacity-30"></div>
                  {/* Removed all overlay text from the image area */}
                </div>
              </div>
            </motion.div>

            {/* Game Details */}
            <motion.div
              key={`details-${currentGame.id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-textPrimary mb-4">
                  {currentGame.title}
                </h3>
                <p className="text-body mb-6">{currentGame.description}</p>
              </div>

              {/* Game Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-950 bg-opacity-50 rounded-lg border border-gray-800">
                  <FiUsers className="text-secondary text-2xl mx-auto mb-2" />
                  <p className="text-textPrimary font-semibold">
                    {currentGame.downloads} Downloads
                  </p>
                  <p className="text-textSecondary text-sm">Active Players</p>
                </div>
                <div className="text-center p-4 bg-gray-950 bg-opacity-50 rounded-lg border border-gray-800">
                  <FiAward className="text-secondary text-2xl mx-auto mb-2" />
                  <p className="text-textPrimary font-semibold">
                    {currentGame.rating} Rating
                  </p>
                  <p className="text-textSecondary text-sm">Google Play</p>
                </div>
              </div>

              {/* Game Features */}
              <div>
                <h4 className="text-lg font-semibold text-textPrimary mb-3">
                  Game Features
                </h4>
                <ul className="space-y-2 text-textSecondary">
                  {currentGame.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-textPrimary mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentGame.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary bg-opacity-10 text-secondary rounded-full text-sm font-medium border border-secondary border-opacity-30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {currentGame.playStoreLink &&
                  currentGame.playStoreLink.trim() !== "" && (
                    <motion.a
                      href={currentGame.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiDownload />
                      Download on Play Store
                    </motion.a>
                  )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {currentGame.webLink && currentGame.webLink.trim() !== "" && (
                  <motion.a
                    href={currentGame.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiDownload />
                    Visit Website
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredGames.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveGame(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeGame ? "bg-secondary" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame; 