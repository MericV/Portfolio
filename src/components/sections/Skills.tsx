import React from 'react';
import SkillBar from '../ui/SkillBar';
import { Code, Database, Layout, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'Angular', level: 70 }
  ];

  const backendSkills = [
    { name: 'PHP', level: 75 },
    { name: 'Java (JEE)', level: 70 },
    { name: 'Python', level: 65 }
  ];

  const databaseSkills = [
    { name: 'SQL', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'PostgreSQL', level: 65 }
  ];

  const otherSkills = [
    { name: 'Git', level: 70 },
    { name: 'Agile/Scrum', level: 65 },
    { name: 'UI/UX', level: 60 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
          Compétences Techniques
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Layout className="text-blue-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Frontend</h3>
            </div>
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Server className="text-blue-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Backend</h3>
            </div>
            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Database className="text-blue-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Base de données</h3>
            </div>
            <div className="space-y-5">
              {databaseSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Code className="text-blue-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Autres compétences</h3>
            </div>
            <div className="space-y-5">
              {otherSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">Compétences Transversales</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Travail d\'équipe', 'Communication', 'Résolution de problèmes', 'Gestion du temps', 'Adaptabilité', 'Autonomie', 'Rigueur', 'Organisation'].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium transition-transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;