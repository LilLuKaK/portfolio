import { motion } from 'framer-motion';
import GlassCard from '../GlassCard';
import { skills } from '../../data/mockData';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: skills.frontend,
      color: 'from-blue-400 to-purple-600',
      icon: '🎨'
    },
    {
      title: 'Backend',
      skills: skills.backend,
      color: 'from-green-400 to-blue-600',
      icon: '⚙️'
    },
    {
      title: 'Databases',
      skills: skills.databases,
      color: 'from-yellow-400 to-orange-600',
      icon: '🗄️'
    },
    {
      title: 'Methodologies',
      skills: skills.methodologies,
      color: 'from-pink-400 to-red-600',
      icon: '📋'
    },
    {
      title: 'Operating Systems',
      skills: skills.os,
      color: 'from-indigo-400 to-purple-600',
      icon: '💻'
    },
    {
      title: 'Tools',
      skills: skills.tools,
      color: 'from-teal-400 to-cyan-600',
      icon: '🔧'
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-white/90 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;