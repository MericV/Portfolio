import React, { useState } from 'react';
import { Mail,Phone, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://formspree.io/f/mnndqddo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        alert('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Erreur lors de l'envoi. Veuillez vérifier les champs.");
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  };
  

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
          Contact
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-t-lg py-10 px-8">
            <h3 className="text-2xl font-bold mb-4">Besoin de me contacter ?</h3>
            <p className="opacity-90 max-w-lg">
              N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez 
              discuter d'opportunités professionnelles. Je serais ravi d'échanger avec vous !
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 shadow-2xl rounded-b-lg overflow-hidden">
            <div className="bg-blue-700 text-white p-8 md:col-span-2">
              <h4 className="text-xl font-semibold mb-6">Informations de Contact</h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="opacity-70">Nom</p>
                    <p className="font-medium">Meric Vaillant</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="opacity-70">Email</p>
                    <a href="mailto:vaillant.meric@icloud.com" className="font-medium hover:underline">
                      vaillant.meric@icloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="opacity-70">Telephone</p>
                    <a href="tel:+33787601907" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +33 7 87 60 19 07
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4">Suivez-moi</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/MericV" 
                    className="bg-blue-600 hover:bg-blue-800 p-2 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/meric-vaillant-256672295/" 
                    className="bg-blue-600 hover:bg-blue-800 p-2 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 md:col-span-3">
              <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Envoyez-moi un message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="_gotcha" className="hidden" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nom complet
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white text-sm py-3"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white text-sm py-3"
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare size={16} className="text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white text-sm"
                      placeholder="Votre message..."
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors shadow-md hover:shadow-lg font-medium"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;