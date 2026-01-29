import React from 'react';

interface AboutUsProps {
  onBack: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onBack }) => {
  return (
    <div className="flex-grow flex flex-col bg-white">
      {/* Hero Section with Image Background */}
      <div className="bg-cover bg-center py-20 px-7 relative" style={{ backgroundImage: 'url(/1764583936123.jpg)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Avenga</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A global engineering and consulting partner trusted by leading AdTech, MarTech, and media companies.
          </p>
        </div>
      </div>

      {/* Values Cards Section */}
      <div className="bg-gradient-to-br from-[#FF3E24]/5 to-transparent py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            {/* Card 1: Specialized Expertise */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: 'url(/1.jpg)' }}>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Businesses today need more than technology vendors — they need strategic partners who truly understand their industries.
                </p>
              </div>
            </div>

            {/* Card 2: Personalized Client Experience */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: 'url(/2.jpg)' }}>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Client Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strong partnerships are built on deep understanding. That's why we invest time in learning our clients' business models, objectives, and operational challenges.
                </p>
              </div>
            </div>

            {/* Card 3: Creative Human Touch */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: 'url(/3.jpg)' }}>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Human Touch</h3>
                <p className="text-gray-600 leading-relaxed">
                  Technology alone does not drive innovation; creativity and insight do. We approach every challenge with a solution-oriented mindset that enables meaningful progress.
                </p>
              </div>
            </div>

            {/* Card 4: Passion for Innovation */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: 'url(/4.jpg)' }}>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Passion for Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  When we say digital tomorrow matters, we commit to building organizations that are ready for a successful future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#FF3E24] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We operate with transparency and honesty in all our dealings, ensuring trust with clients, partners, and team members.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#FF3E24] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We pursue excellence in every project, delivering solutions that exceed expectations and drive real business impact.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#FF3E24] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace cutting-edge technologies and creative thinking to solve complex challenges and create new opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-[#1A0C2F] to-[#2A1C4F] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/80 mb-8">
            Partner with Avenga to design, build, and scale high-performance solutions tailored to your needs.
          </p>
          <button
            onClick={onBack}
            className="px-8 py-4 bg-[#FF3E24] hover:bg-[#D92D16] text-white font-bold rounded-lg transition-colors duration-300"
          >
            Back to Quiz
          </button>
        </div>
      </div>
    </div>
  );
};
