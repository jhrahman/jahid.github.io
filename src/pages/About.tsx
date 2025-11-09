import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    'AWS Cloud',
    'PostgreSQL',
    'Linux System Administration',
    'QA Testing',
    'BugBug QA Automation',
    'Postman',
    'Ansible',
    'Docker',
    'Bash Scripting',
    'DevOps Practices',
    'Networking'
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-accent px-4"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2 }}
      >
        About Me
      </motion.h2>
      
      <motion.div
        className="bg-secondary p-4 md:p-6 rounded-lg mb-8 mx-4"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-lg mb-4">
          I'm a Technical Support Associate (Second-Line), handling advanced and escalated software issues 
          to ensure smooth operations for SaaS platforms. I work with AWS services as part of my regular 
          workflow and continue building skills in DevOps practices, covering AWS, bash scripting, advanced 
          Linux commands, and QA automation to streamline testing and improve efficiency.
        </p>
        <p className="text-lg">
          My expertise spans across cloud infrastructure, database management, and system administration,
          allowing me to effectively troubleshoot and resolve complex technical challenges while
          contributing to the improvement of operational processes.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-accent">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-secondary p-4 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold mb-6 text-accent">License & Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AWS Certification */}
          <motion.div
            className="bg-secondary p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <img
                src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
                alt="AWS Logo"
                className="w-12 h-12 mr-4"
              />
              <h4 className="text-xl font-semibold">AWS Cloud Technical Essentials</h4>
            </div>
            <a className="text-text/80" href= "https://coursera.org/verify/NUK7RYKTU75D" target='blank_'>See Completion</a> 
          </motion.div>

          {/* Google IT Support */}
          <motion.div
            className="bg-secondary p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <img
                src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                alt="Google Logo"
                className="w-24 h-8 mr-4"
              />
              <h4 className="text-xl font-semibold">IT Support Specialization</h4>
            </div>
            <a className="text-text/80" href= "https://coursera.org/share/83eee8cdbc24c97596a2ea628a23911a" target='blank_'>See Completion</a>             
          </motion.div>


          

          {/* HackerRank SQL */}
          <motion.div
            className="bg-secondary p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <img
                src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png"
                alt="HackerRank Logo"
                className="w-12 h-12 mr-4"
              />
              <h4 className="text-xl font-semibold">SQL</h4>
            </div>
            <a className="text-text/80" href= "https://www.hackerrank.com/certificates/3798371304ba" target='blank_'>See Completion</a> 
          </motion.div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold mb-6 text-accent">Education</h3>
        <div className="space-y-8">
          {/* Bachelor's Degree */}
          <motion.div
            className="bg-secondary p-6 rounded-lg"
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold">North South University, Dhaka</h4>
              <span className="text-accent">2016 - 2020</span>
            </div>
            <p className="text-lg font-medium mb-2">B.Sc in Electrical and Electronic Engineering</p>
            <p className="text-text/80">
              Key areas: Communication Systems, C Programming, Semiconductor and Devices Technology, 
              Signal & Systems, Web Technology
            </p>
          </motion.div>

          {/* Higher Secondary */}
          <motion.div
            className="bg-secondary p-6 rounded-lg"
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold">Birshreshtha Noor Mohammad Public College, Dhaka</h4>
              <span className="text-accent">2014 - 2015</span>
            </div>
            <p className="text-lg font-medium mb-2">Higher Secondary School Certificate</p>
            <p className="text-text/80">
              Studied science with focus on mathematics, chemistry, physics, and biology.
            </p>
          </motion.div>

          {/* Secondary School */}
          <motion.div
            className="bg-secondary p-6 rounded-lg"
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold">Comilla Modern High School, Comilla</h4>
              <span className="text-accent">2010 - 2012</span>
            </div>
            <p className="text-lg font-medium mb-2">Secondary School Certificate</p>
            <p className="text-text/80">
              Selected for the science group through a rigorous selection procedure based on 
              intellectual and theoretical understanding.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About