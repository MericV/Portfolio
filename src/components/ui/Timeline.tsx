import React from 'react';

interface TimelineItem {
  id: number;
  period: string;
  title: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className={`relative flex flex-col md:flex-row md:justify-between ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white z-10">
              {item.icon}
            </div>
            
            {/* Content */}
            <div className="ml-12 md:ml-0 md:w-5/12 bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 animate-fade-in">
              <span className="text-sm font-medium text-white dark:text-gray-800 bg-blue-500 py-1 px-2 rounded inline-block mb-2">
                {item.period}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.title}</h3>
              <h4 className="text-md text-gray-600 dark:text-gray-400 mb-3">{item.institution}</h4>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
            
            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;