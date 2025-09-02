// src/components/sections/Projects.jsx
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useI18n } from '../../context/i18nContext';
import GlassSurface from './../GlassSurface';
import { projects } from '../../data/mockData';

const Projects = () => {
  const { t } = useI18n();

  // Mapeo de categorías: slug estable + label traducida
  const categoryOptions = useMemo(() => ([
    { key: 'all', label: t('filter_all') },
    { key: 'web', label: t('filter_web') },
    { key: 'dashboard', label: t('filter_dashboard') },
    { key: 'ui', label: t('filter_ui') },
  ]), [t]);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(p => p.categoryKey === selectedCategory);
  }, [selectedCategory]);

  const getCategoryLabel = (key) => {
    switch (key) {
      case 'web': return t('filter_web');
      case 'dashboard': return t('filter_dashboard');
      case 'ui': return t('filter_ui');
      default: return t('filter_all');
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            {t('projects_title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto"></div>
        </motion.div>

        {/* Mensaje si no hay proyectos */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white/70 text-lg mb-12"
          >
            <div className="inline-block px-6 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-md">
              {t('projects_under_construction')}
            </div>
          </motion.div>
        )}

        {/* Grid de proyectos */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const title = project.titleKey ? t(project.titleKey) : project.title;
              const description = project.descriptionKey ? t(project.descriptionKey) : project.description;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Versión móvil (glass simple) */}
                  <div className="glass-effect-mobile h-full p-6">
                    <div className="flex flex-col w-full">
                      <img
                        src={project.image}
                        alt={title}
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />
                      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">{description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies?.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/50 text-xs">
                          {getCategoryLabel(project.categoryKey)}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs rounded-full font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-2 mt-4">
                        {project?.links?.live && (
                          <a
                            href={project.links.live}
                            className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                            target="_blank" rel="noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        )}
                        {project?.links?.github && (
                          <a
                            href={project.links.github}
                            className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                            target="_blank" rel="noreferrer"
                          >
                            <Github className="w-4 h-4 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Versión desktop (GlassSurface) 
                  <div className="hidden 2xl:block lg:hidden  h-full">
                    <GlassSurface
                      width="auto"
                      height="100%"
                      borderRadius={17}
                      brightness={50}
                      blur={10}
                      opacity={0.93}
                      redOffset={0}
                      greenOffset={10}
                      blueOffset={20}
                      displace={0.5}
                      distortionScale={-25}
                      mixBlendMode="screen"
                      performanceMode="low"
                      className="h-full p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
                    >
                      <div className="flex flex-col w-full h-full justify-start">
                        <div className="flex flex-col w-full">
                          <div className="relative overflow-hidden rounded-xl mb-4 w-full">
                            <img
                              src={project.image}
                              alt={title}
                              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="flex space-x-2">
                                {project?.links?.live && (
                                  <a
                                    href={project.links.live}
                                    className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                                    target="_blank" rel="noreferrer"
                                  >
                                    <ExternalLink className="w-4 h-4 text-white" />
                                  </a>
                                )}
                                {project?.links?.github && (
                                  <a
                                    href={project.links.github}
                                    className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                                    target="_blank" rel="noreferrer"
                                  >
                                    <Github className="w-4 h-4 text-white" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4 w-full">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                              <p className="text-white/70 text-sm leading-relaxed">{description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {project.technologies?.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <div className="flex justify-between items-center">
                              <span className="text-white/50 text-xs">
                                {getCategoryLabel(project.categoryKey)}
                              </span>
                              {project.featured && (
                                <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs rounded-full font-medium">
                                  Featured
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassSurface>
                  </div>
        */}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/70 text-lg mb-6">
            {t('projects_flex')}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/70 text-lg mb-6">
            {t('projects_interest')}
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="transition-all duration-300 transform hover:scale-105"
          >
            <GlassSurface
              borderRadius={50}
              displace={0.5}
              distortionScale={-180}
              redOffset={0}
              greenOffset={10}
              blueOffset={20}
              brightness={50}
              opacity={0.93}
              mixBlendMode="screen"
              performanceMode="auto"
            >
              <span className="px-8 py-4 text-white">{t('projects_contact')}</span>
            </GlassSurface>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
