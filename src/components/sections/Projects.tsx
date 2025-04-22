import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { FolderGit2 } from 'lucide-react';

const Projects: React.FC = () => {
  // Placeholder projects - will be expanded in the future
  const projects = [
    {
      id: 1,
      title: 'Application de Gestion',
      description: 'Application web de gestion d\'une bibliothèque. Projet réalisé en formation ainsi qu\'en équipe.',
      technologies: ['MySQL', 'HTML', 'CSS', 'JavaScript','Agile'],
      imageUrl: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Portfolio Personnel',
      description: 'Site web portfolio responsive présentant mes compétences et projets. Développé avec React et Tailwind CSS.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      imageUrl: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'E4SP Mockup App Mobile',
      description: 'E4SP Mobile App Mockup is designed to provide a seamless user experience for color and theme customization. Actual version: 2.4.4',
      technologies: ['Html', 'Angular', 'TypeScript'],
      imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
          Projets
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-12 border-l-4 border-blue-500">
            <div className="flex items-start">
              <FolderGit2 className="text-blue-500 mr-3 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Mes Projets</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cette section présente quelques-uns de mes projets récents. Chaque projet reflète 
                  mes compétences techniques et ma capacité à résoudre des problèmes concrets. 
                  Ces projets seront enrichis au fur et à mesure de mon parcours.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;