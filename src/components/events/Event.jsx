import React, { useState } from 'react';

const cards = [
  {
    title: 'Ancient Dragon',
    class: 'Monster',
    description: 'A mighty wyrm of incredible power and ancient knowledge.',
    image: '/api/placeholder/300/400'
  },
  {
    title: 'Mystic Wizard',
    class: 'Spellcaster',
    description: 'Master of arcane arts and keeper of forbidden spells.',
    image: '/api/placeholder/300/400'
  },
  {
    title: 'Noble Paladin',
    class: 'Holy Warrior',
    description: 'A righteous warrior blessed with divine power.',
    image: '/api/placeholder/300/400'
  },
  {
    title: 'Deadly Rogue',
    class: 'Assassin',
    description: 'Silent killer moving through shadows unseen.',
    image: '/api/placeholder/300/400'
  },
  {
    title: 'Nature Druid',
    class: 'Shapeshifter',
    description: 'Guardian of the wild places and nature\'s fury incarnate.',
    image: '/api/placeholder/300/400'
  }
];

const Card = ({ title, class: characterClass, description, image, index, activeIndex, totalCards }) => {
  const isActive = index === activeIndex;
  const diff = (index - activeIndex + totalCards) % totalCards;
  
  // Calculate positions for helix-like movement
  const getTransform = () => {
    if (isActive) {
      return `
        translate3d(0, 0, 200px) 
        rotateX(0deg) 
        scale(1.1)
      `;
    }
    
    const angle = (diff / totalCards) * Math.PI * 2;
    const radius = 400;
    const x = Math.sin(angle) * radius;
    const y = Math.cos(angle) * 50; // Add vertical offset for helix effect
    const z = (Math.cos(angle) * radius - radius) / 2;
    
    return `
      translate3d(${x}px, ${y}px, ${z}px) 
      rotateY(${-angle * (180 / Math.PI)}deg)
      rotateX(${y / 2}deg)
      scale(0.8)
    `;
  };

  return (
    <div
      className={`absolute left-0 top-0 w-64 h-96 transition-all duration-1000 ease-out
                ${isActive ? 'z-30' : 'z-20'}`}
      style={{
        transform: getTransform(),
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative w-full h-full group perspective">
        {/* Card Base with Prismatic Effect */}
        <div 
          className="absolute inset-0 bg-slate-900 rounded-lg shadow-xl 
                   transform transition-all duration-700"
        >
          {/* Prismatic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-purple-500/20 to-blue-500/20 
                       rounded-lg backdrop-blur-sm opacity-75
                       animate-gradient-shift"/>
          
          {/* Magic Runes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full
                         animate-floating-rune"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Card Content with Flip Effect */}
        <div className="relative h-full p-4 flex flex-col transform-gpu transition-transform duration-1000
                      group-hover:rotate-y-180 preserve-3d">
          {/* Front Face */}
          <div className="absolute inset-0 p-4 backface-hidden">
            <div className="relative h-48 overflow-hidden rounded-t-lg mb-4">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform transition-transform duration-700
                         group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
            </div>
            
            <h3 className="text-xl font-medieval text-purple-300 mb-2">
              {title}
            </h3>
            
            <div className="text-sm font-bold text-blue-300">
              {characterClass}
            </div>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 p-4 backface-hidden rotate-y-180
                       bg-gradient-to-br from-purple-900/90 to-blue-900/90 rounded-lg">
            <div className="h-full flex flex-col justify-center items-center text-center">
              <p className="text-gray-200 mb-4">
                {description}
              </p>
              <div className="w-16 h-16 border-4 border-purple-400 rounded-full
                           animate-pulse"/>
            </div>
          </div>
        </div>

        {/* Energy Effects */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                     transition-opacity duration-500">
          {/* Pulsing Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 
                       rounded-lg opacity-0 group-hover:opacity-70 blur-sm
                       animate-border-pulse"/>
          
          {/* Corner Sparks */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-blue-400 rounded-full blur-sm
                       animate-spark"
              style={{
                top: i < 2 ? '-0.5rem' : 'auto',
                bottom: i >= 2 ? '-0.5rem' : 'auto',
                left: i % 2 === 0 ? '-0.5rem' : 'auto',
                right: i % 2 === 1 ? '-0.5rem' : 'auto',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const DnDCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = cards.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes floating-rune {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(10px, -10px) scale(1.5); opacity: 0.6; }
        }
        
        @keyframes border-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.02); }
        }
        
        @keyframes spark {
          0%, 100% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .perspective {
          perspective: 1000px;
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s linear infinite;
          background-size: 200% 200%;
        }

        .animate-floating-rune {
          animation: floating-rune 4s ease-in-out infinite;
        }

        .animate-border-pulse {
          animation: border-pulse 2s ease-in-out infinite;
        }

        .animate-spark {
          animation: spark 1.5s ease-in-out infinite;
        }
      `}</style>
      
      <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center"
           style={{ perspective: '2000px' }}>
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-50 px-6 py-3 
                   bg-gradient-to-r from-purple-600 to-blue-600
                   rounded-lg text-white font-bold
                   transform transition-all duration-300
                   hover:scale-110 hover:brightness-110
                   active:scale-95"
        >
          ← Previous
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-4 z-50 px-6 py-3
                   bg-gradient-to-r from-blue-600 to-purple-600
                   rounded-lg text-white font-bold
                   transform transition-all duration-300
                   hover:scale-110 hover:brightness-110
                   active:scale-95"
        >
          Next →
        </button>

        {/* Cards Container */}
        <div className="relative w-64 h-96" style={{ transformStyle: 'preserve-3d' }}>
          {cards.map((card, index) => (
            <Card
              key={card.title}
              {...card}
              index={index}
              activeIndex={activeIndex}
              totalCards={totalCards}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DnDCarousel;