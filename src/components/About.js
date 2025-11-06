import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';

const About = () => {
  const personalInfo = [
    { icon: FiCalendar, label: 'Birthday', value: '1996' },
    { icon: FiMapPin, label: 'Location', value: 'Karachi, Pakistan' },
    { icon: FiBriefcase, label: 'Experience', value: '7+ Years' },
  ];

  const skills = [
    // Programming Languages
    'C#', 'Go (Golang)', 'TypeScript', 'Dart (Flutter)', 'Node.js',
    // Game Development
    'Unity3D', 'PixiJS', 'AR/VR',
    // Web Development
    'Next.js', 'React', 'Tailwind CSS', 'Responsive UI/UX',
    // Databases & Storage
    'PostgreSQL', 'CockroachDB', 'Supabase', 'DynamoDB', 'AWS S3', 'Prisma ORM', 'GORM',
    // Server & Backend
    'Multiplayer Server', 'Nakama', 'REST APIs', 'Backend Architecture',
    // APIs & SDKs
    'Firebase', 'Analytics', 'In-Game Ads', 'Third-Party SDKs',
    // Cloud & DevOps
    'Docker', 'AWS', 'DigitalOcean', 'CI/CD',
    // Version Control & Collaboration
    'GitHub', 'Project Management', 'Asana', 'Slack'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-96 h-96 rounded-lg mx-auto relative overflow-hidden">
                <img 
                  src="/MyPhoto.jpg" 
                  alt="Saad Alam" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-10"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">7+</span>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="text-secondary">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <span className="text-textSecondary">{info.label}: </span>
                    <span className="text-textPrimary font-medium">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-textPrimary">
              A passionate Software Engineer with extensive experience
            </h3>
            
            <div className="space-y-4 text-body">
  <p>
    I am a passionate <strong>Team Lead & Senior Software Engineer</strong> with 7+ years of 
    experience building high-quality software, web and mobile applications. Skilled in <strong>full-stack 
    development, backend systems, and scalable multiplayer architectures</strong>, I focus on 
    delivering performance-driven and innovative solutions.
  </p>
  <p>
    Starting with <strong>Unity3D</strong>, my expertise has expanded to <strong>Flutter, React, 
    Next.js, Go (Golang), and Node.js</strong>. I have led projects ranging from <strong>hyper-casual 
    and idle games</strong> to <strong>real-time multiplayer platforms</strong> with cloud deployment 
    and third-party integrations.
  </p>
</div>

            {/* Skills Tags */}
            <div>
              <h4 className="text-lg font-semibold text-textPrimary mb-4">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-secondary bg-opacity-10 text-secondary rounded-full text-sm font-medium border border-secondary border-opacity-30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <a href="https://docs.google.com/document/d/1Ortgj91p9afvXMVNzSCTMImKctSNAtbRh1g2ctpl7us/edit?usp=sharing" className="btn-primary mt-6 inline-block" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 