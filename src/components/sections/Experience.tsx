import React from 'react';
import Timeline from '../ui/Timeline';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experienceData = [
    {
      id: 1,
      period: 'Juin 2024',
      title: 'Stagiaire',
      institution: 'Enreach For Service Provider, Sophia Antipolis',
      description: 'Création d\'une application internet afin de présenter un mockup de couleur de la prochaine application client',
      icon: <Briefcase size={20} />
    },
    {
      id: 2,
      period: '2024 - à ce jour',
      title: 'Assistant Logistique (CDI Étudiant)',
      institution: 'Leroy Merlin, Nice',
      description: 'Préparation des commandes et opérations d\'entrepôt. Gestion des stocks et coordination avec l\'équipe de vente. Utilisation de systèmes de gestion d\'inventaire informatisés.',
      icon: <Briefcase size={20} />
    },
    {
      id: 3,
      period: 'Février 2025',
      title: 'Stagiaire',
      institution: 'Enreach For Service Provider, Sophia Antipolis',
      description: 'Versioning de l\'application internet, mise à jour des demandes et des évolutions du marché',
      icon: <Briefcase size={20} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
          Expérience Professionnelle
        </h2>

        <div className="max-w-4xl mx-auto">
          <Timeline items={experienceData} />
          
          <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400">Compétences Professionnelles Développées</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc pl-5">
              <li>Gestion efficace du temps et organisation des tâches</li>
              <li>Communication claire avec les clients et les membres de l'équipe</li>
              <li>Résolution de problèmes dans un environnement commercial</li>
              <li>Maîtrise des outils informatiques de gestion d'inventaire</li>
              <li>Travail en équipe dans un environnement dynamique</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;