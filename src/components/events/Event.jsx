import React, { useState } from 'react';

const DnDCardGrid = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Custom icon components to replace Lucide icons
  const IconBook = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  );

  const IconSword = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 17.5L3 6V3h3l11.5 11.5"></path>
      <path d="M13 19l6-6"></path>
      <path d="M16 16l4 4"></path>
      <path d="M19 21l2-2"></path>
    </svg>
  );

  const IconCrown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
    </svg>
  );

  const IconShield = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );

  const IconStar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  const IconScroll = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
    </svg>
  );

  const IconHeart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  const IconMoon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );

  const IconFlame = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
    </svg>
  );

  const IconSkull = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="12" r="1"></circle>
      <circle cx="15" cy="12" r="1"></circle>
      <path d="M8 20v2h8v-2"></path>
      <path d="M12.5 17l-.5-1-.5 1h1z"></path>
      <path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"></path>
    </svg>
  );

  const cardData = [
    {
      id: 1,
      title: "Ancient Dragon's Grimoire",
      icon: <IconBook />,
      description: "A mystical tome containing powerful dragon magic",
      details: "This ancient book, bound in dragon scales, contains forgotten spells and rituals from the age of the great wyrms. Its pages shimmer with an otherworldly glow, and those who study it claim to hear distant dragon roars."
    },
    {
      id: 2,
      title: "Blade of Shadow",
      icon: <IconSword />,
      description: "A legendary sword that drinks darkness",
      details: "Forged in the depths of the Shadowfell, this blade seems to absorb light around it. Its wielder gains supernatural stealth abilities, but at what cost to their soul?"
    },
    {
      id: 3,
      title: "Crown of Winter",
      icon: <IconCrown />,
      description: "Relic of the Frost Giant Kings",
      details: "This crown, crafted from eternal ice, grants its wearer command over winter itself. It was worn by the greatest of the Frost Giant kings during the Age of Winter's Reign."
    },
    {
      id: 4,
      title: "Aegis of the Faithful",
      icon: <IconShield />,
      description: "Holy shield of divine protection",
      details: "Blessed by the gods themselves, this shield radiates divine protection. Its surface bears constantly shifting holy symbols of all good-aligned deities."
    },
    {
      id: 5,
      title: "Star of Power",
      icon: <IconStar />,
      description: "Controls the fundamental forces",
      details: "A crystalline star that channels the raw power of the cosmos. Each point glows with different magical energies, representing the fundamental forces of the universe."
    },
    {
      id: 6,
      title: "Scroll of Time",
      icon: <IconScroll />,
      description: "Contains temporal magic",
      details: "This paradoxical scroll exists in multiple timestreams simultaneously. Reading it grants visions of possible futures, but each reading ages the reader slightly."
    },
    {
      id: 7,
      title: "Phoenix Heart",
      icon: <IconHeart />,
      description: "Eternal flame of rebirth",
      details: "The crystallized heart of an ancient phoenix, still burning with immortal flame. It pulses with healing energy and can restore life to the recently deceased once per century."
    },
    {
      id: 8,
      title: "Moon Blessed Crystal",
      icon: <IconMoon />,
      description: "The ultimate lunar catalyst",
      details: "A crystal blessed by the moon goddess herself, capable of harnessing lunar energy for powerful magic. It grows stronger as the moon waxes and can control the tides of magic."
    },
    {
      id: 9,
      title: "Infernal Flame",
      icon: <IconFlame />,
      description: "Shapes the wielder's destiny",
      details: "A captured flame from the Nine Hells, this eternally burning ember grants its wielder control over hellfire but comes with a terrible price for the soul."
    },
    {
      id: 10,
      title: "Necromancer's Skull",
      icon: <IconSkull />,
      description: "Ancient repository of dark magic",
      details: "A crystal skull imbued with the knowledge of a long-dead arch-necromancer. It whispers forbidden secrets to those who dare to listen."
    }
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="group relative transform transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in"
            style={{
              animationDelay: `${index * 150}ms`,
              animation: 'fadeIn 0.5s ease-out forwards'
            }}
          >
            <div className="bg-gray-800 rounded-lg p-6 h-full border-2 border-amber-600/30 hover:border-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/20">
              <div className="flex flex-col items-center space-y-4">
                <div className="text-amber-500 transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-500 text-center">{card.title}</h3>
                <p className="text-gray-400 text-center">{card.description}</p>
                <button
                  onClick={() => handleCardClick(card)}
                  className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-500"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          <div className="relative bg-gray-800 text-white border-2 border-amber-600 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-xl transform transition-all">
            <div className="flex items-center justify-between p-6 border-b border-amber-600/30">
              <div className="flex items-center gap-4">
                <span className="text-amber-500">{selectedCard.icon}</span>
                <h2 className="text-2xl text-amber-500 font-bold">{selectedCard.title}</h2>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <p className="text-gray-300 leading-relaxed">{selectedCard.details}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DnDCardGrid;