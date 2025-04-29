import React from 'react';
import { Eye, Github} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  pdfUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            {project.id === 1 && (
              <a 
                href="https://gitlab.com/gitouan/Biblio-Nice" 
                className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="View Project"
              >
                <Github size={20} />
              </a>
            )}
            {project.id === 2 && (
              <a 
                href="#" 
                className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="View Project"
              >
                <Eye size={20} />
              </a>
            )}
             {project.id === 3 && (
              <a 
                href="https://mobile-mockup.partnerconnect.sp.enreach.com" 
                className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="View Project"
              >
                <Eye size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        {project.pdfUrl && (
          <a
            href={project.pdfUrl}
            download
            className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4"
          >
            Télécharger la fiche technique
          </a>
        )}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;