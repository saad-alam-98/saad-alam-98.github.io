import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [openVideo, setOpenVideo] = useState(null); // Track open video

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'card', name: 'Card Games' },
    { id: 'idle', name: 'Idle Games' },
    { id: 'hypercasual', name: 'Hyper-Casual' },
  ];

  const projects = [
    // Card Games
    {
      id: 1,
      title: 'Spades Game for Spill',
      description: 'A classic card game built with Flutter Flame engine. Features multiplayer functionality, smooth animations, and engaging gameplay mechanics.',
      image: '/spades-game.jpg',
      technologies: ['Flutter', 'Flutter Flame', 'Dart', 'Firebase'],
      github: 'https://github.com/msaleemsidd',
      videoLink: null,
      category: 'card',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.spill.spill&hl=en',
      icon: '/Icons/SpillSpades.png',
    },
    {
      id: 2,
      title: 'Check! Games',
      description: 'An engaging card-based puzzle game with multiple game modes and challenging levels. Features intuitive controls and progressive difficulty.',
      image: '/check-games.jpg',
      technologies: ['Unity3D', 'C#', 'AdMob', 'Firebase'],
      github: 'https://github.com/msaleemsidd',
      videoLink: null,
      category: 'card',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.optimumopusgames.checkgames&pcampaignid=web_share',
      icon: '/Icons/CheckGames.png',
    },
    // Idle Games
    {
      id: 3,
      title: 'El Patrón - Idle Cartel',
      description: 'An idle management game where players build and expand their cartel empire. Features incremental progression, resource management, and strategic gameplay.',
      image: '/el-patron.jpg',
      technologies: ['Unity3D', 'C#', 'AdMob', 'Firebase Analytics'],
      github: 'https://github.com/msaleemsidd',
      videoLink: null,
      category: 'idle',
      featured: true,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.tiltingpoint.bigwolf.narcosfactory&hl=en',
      icon: '/Icons/NarcosCartel.png',
    },
    {
      id: 4,
      title: 'Narcos: Idle Empire of Crime',
      description: 'An idle empire building game with crime-themed progression. Features multiple upgrade paths, resource optimization, and engaging idle mechanics.',
      image: '/narcos-idle.jpg',
      technologies: ['Unity3D', 'C#', 'AdMob', 'Game Analytics'],
      github: 'https://github.com/msaleemsidd',
      videoLink: null,
      category: 'idle',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.bigwolf.narcos.idle.empire&hl=en',
      icon: '/Icons/NarcosEmpire.png',
    },
    {
      id: 5,
      title: 'High Tide: Weed Game',
      description: 'An idle farming game with cannabis cultivation theme. Features plant management, business expansion, and incremental progression mechanics.',
      image: '/high-tide.jpg',
      technologies: ['Unity3D', 'C#', 'AdMob', 'Firebase'],
      github: 'https://github.com/msaleemsidd',
      videoLink: null,
      category: 'idle',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.hazyarts.weed.hightide&pcampaignid=web_share',
      icon: '/Icons/HighTide.png',
    },
    // Hyper-Casual Games
    {
      id: 6,
      title: 'Wonder Ball',
      description: 'A hyper-casual ball rolling game with physics-based gameplay. Features smooth controls, multiple levels, and engaging obstacle challenges.',
      image: '/wonder-ball.jpg',
      technologies: ['Unity3D', 'C#', 'Physics Engine', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/1xtsNG0IcF_rgUCzoIcuswkZja85Gntw-/view?usp=drive_link',
      category: 'hypercasual',
      featured: true,
      icon: '/Icons/WonderBall.png',
    },
    {
      id: 7,
      title: 'Crack The Block',
      description: 'A puzzle-based hyper-casual game where players strategically break blocks to achieve objectives. Features intuitive touch controls and progressive difficulty.',
      image: '/crack-block.jpg',
      technologies: ['Unity3D', 'C#', 'Puzzle Mechanics', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/1F4LCkM2VH__2wD6_rbSQwkLQYJ4xOWuC/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/CrackTheBlock.png',
    },
    {
      id: 8,
      title: 'Drift 2 Win',
      description: 'A racing-based hyper-casual game with drift mechanics. Features smooth car controls, multiple tracks, and competitive gameplay elements.',
      image: '/drift-win.jpg',
      technologies: ['Unity3D', 'C#', 'Racing Physics', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/1H3xeRm0CopZT41_27UfP3IH2dnOKfs12/view?usp=sharing',
      category: 'hypercasual',
      icon: '/Icons/Drift2Win.png',
    },
    {
      id: 9,
      title: 'Filler 3D',
      description: 'A 3D puzzle game where players fill spaces with blocks. Features intuitive 3D controls, multiple puzzle types, and engaging progression system.',
      image: '/filler-3d.jpg',
      technologies: ['Unity3D', 'C#', '3D Graphics', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/1JzhfTOl9RwZYICqH8zjgvMPnMsyu94c_/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/FIller3D.png',
    },
    {
      id: 10,
      title: 'Angry Bees',
      description: 'A physics-based hyper-casual game with bee-themed gameplay. Features projectile mechanics, multiple levels, and engaging sound effects.',
      image: '/angry-bees.jpg',
      technologies: ['Unity3D', 'C#', 'Physics Engine', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/1T_VC6ygbCJuet0eClfCDZ2pYNXi0fgfY/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/AngryBees.png',
    },
    {
      id: 11,
      title: 'Jump Shot Mania',
      description: 'A basketball-themed hyper-casual game with precise shooting mechanics. Features multiple game modes, progressive difficulty, and satisfying gameplay.',
      image: '/jump-shot.jpg',
      technologies: ['Unity3D', 'C#', 'Physics Engine', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/13qHR-FcX0DSee5T5vLEVLajEDOXL3uQn/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/JumpShot.png',
    },
    {
      id: 12,
      title: 'Fist Fight',
      description: 'A combat-based hyper-casual game with fighting mechanics. Features responsive controls, multiple characters, and engaging combat system.',
      image: '/fist-fight.jpg',
      technologies: ['Unity3D', 'C#', 'Combat System', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/18cVsj0OXg0ksqjZjpL-XteQL3kBDWChD/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/FistFight.png',
    },
    {
      id: 13,
      title: 'Axe Master',
      description: 'A skill-based hyper-casual game with axe throwing mechanics. Features precise aiming, multiple targets, and progressive difficulty scaling.',
      image: '/axe-master.jpg',
      technologies: ['Unity3D', 'C#', 'Physics Engine', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/1w0R-tyPy-U4Hhk_tGMwZYUZqAnHDsJmc/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/AxeMaster.png',
    },
    {
      id: 14,
      title: 'Bounce Through',
      description: 'A platformer hyper-casual game with bouncing mechanics. Features smooth controls, multiple obstacles, and engaging level progression.',
      image: '/bounce-through.jpg',
      technologies: ['Unity3D', 'C#', 'Platformer Physics', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/1NdxANN9zTHfezylvA07letPwAiV2in7A/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/BounceThrough.png',
    },
    {
      id: 15,
      title: 'Mighty Box',
      description: 'A puzzle-based hyper-casual game with box manipulation mechanics. Features strategic gameplay, multiple solutions, and engaging challenges.',
      image: '/mighty-box.jpg',
      technologies: ['Unity3D', 'C#', 'Puzzle Mechanics', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/1hzdDANFJp1FP_WWDGS1hMbamt8bWItzq/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/MightyBox.png',
    },
    {
      id: 16,
      title: 'Sling Panda',
      description: 'A physics-based hyper-casual game with slingshot mechanics. Features cute panda character, multiple levels, and engaging physics puzzles.',
      image: '/sling-panda.jpg',
      technologies: ['Unity3D', 'C#', 'Physics Engine', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/176Xtd2G8ML1u9eArLyQXaHzCr2rhNHQt/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/SlingPanda.png',
    },
    {
      id: 17,
      title: 'Super Doodle Dash',
      description: 'A runner-based hyper-casual game with doodle art style. Features endless running mechanics, multiple obstacles, and engaging progression system.',
      image: '/doodle-dash.jpg',
      technologies: ['Unity3D', 'C#', 'Runner Mechanics', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/17i83SXESgAkjoFew67rexTMasslLqExZ/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/SuperDoodleDash.png',
    },
    {
      id: 18,
      title: 'Tomato Run',
      description: 'A unique hyper-casual game with tomato-themed running mechanics. Features innovative gameplay, multiple challenges, and engaging visual effects.',
      image: '/tomato-run.jpg',
      technologies: ['Unity3D', 'C#', 'Runner Mechanics', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/17t66NnAUIPemLJ9oOLaXuOWWKNs3l4Ib/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/TomatoRun.png',
    },
    {
      id: 19,
      title: 'Stick Hero',
      description: 'A skill-based hyper-casual game with stick figure hero mechanics. Features precise timing, multiple challenges, and engaging progression system.',
      image: '/stick-hero.jpg',
      technologies: ['Unity3D', 'C#', 'Skill Mechanics', 'AdMob'],
      github: 'https://github.com/msaleemsidd',
      videoLink: 'https://drive.google.com/file/d/1zNj-_AydHKdDwAh5LG4TmVvllvBEW468/view?usp=drive_link',
      category: 'hypercasual',
      icon: '/Icons/StickHero.png',
    },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            <span className="text-secondary">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-secondary text-primary'
                  : 'text-textSecondary hover:text-secondary border border-gray-700 hover:border-secondary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`card group ${project.featured ? 'ring-2 ring-secondary' : ''}`}
              >
                {/* Featured Badge */}
                {/* Removed the featured badge rendering */}

                                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div
                    className="w-full h-48 flex items-end justify-center relative overflow-hidden"
                    style={project.icon ? { backgroundImage: `url(${project.icon})`, backgroundSize: 'cover', backgroundPosition: 'center' } : { background: 'linear-gradient(to bottom right, var(--color-secondary), #3b82f6)' }}
                  >
                    <div className="absolute inset-0 bg-gray-950 bg-opacity-30"></div>
                    {project.videoLink && (
                      <button
                        type="button"
                        onClick={() => setOpenVideo(project.videoLink)}
                        className="absolute inset-0 w-full h-full cursor-pointer z-20 bg-transparent border-none p-0 m-0"
                        aria-label="Watch Video"
                        style={{ outline: 'none' }}
                      />
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  {/* Removed icon from above the title and from the box content */}
                  <h3 className="text-xl font-semibold text-textPrimary group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary bg-opacity-10 text-secondary text-xs rounded border border-secondary border-opacity-30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.videoLink && (
                      <motion.button
                        type="button"
                        onClick={() => setOpenVideo(project.videoLink)}
                        className="btn-outline flex-1 flex items-center justify-center gap-2 text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Watch Video
                      </motion.button>
                    )}
                    {project.playStoreLink && (
                      <motion.a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Play Store
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>


      </div>
      {/* Video Modal */}
      {openVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-70">
          <div className="bg-gray-950 rounded-lg shadow-2xl p-4 max-w-2xl w-full relative">
            <button
              className="absolute top-4 right-4 flex items-center justify-center text-white bg-secondary rounded-full w-10 h-10 p-0 hover:bg-secondary/80 transition-colors shadow-lg border-2 border-white focus:outline-none"
              onClick={() => setOpenVideo(null)}
              aria-label="Close video"
              type="button"
            >
              <FiX size={24} />
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src={getDriveEmbedUrl(openVideo)}
                title="Project Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-96 rounded-lg border-none"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 

// Helper function to convert Google Drive link to embed URL
function getDriveEmbedUrl(url) {
  // Example: https://drive.google.com/file/d/FILE_ID/view?usp=drive_link
  const match = url.match(/\/file\/d\/([\w-]+)\//);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
} 