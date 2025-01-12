import React, { useState } from 'react';

const cardData = [
  {
    title: "Ancient Dragon's Lair",
    description:
      "Deep within the Forgotten Realms lies a legendary dragon's lair, rumored to hold treasures beyond mortal imagination...",
    challengeRating: 24,
    environment: "Volcanic",
    fullDescription:
      "Deep within the Forgotten Realms lies a legendary dragon's lair, rumored to hold treasures beyond mortal imagination. The ancient red dragon Infernothrax has made this volcanic cavern its home for millennia, amassing a hoard that would make kings weep with envy.",
    image: '/dragon.png', // Replace with actual path to your dragon.png file
  },
  {
    title: "Wizard's Tower",
    description: "A crystalline spire pierces the clouds, home to an eccentric archmage and their collection of forbidden spells...",
    challengeRating: 18,
    environment: "Arcane",
    fullDescription:
      "A crystalline spire pierces the clouds, home to an eccentric archmage and their collection of forbidden spells. The tower shifts and changes, its rooms rearranging themselves according to their master's whims.",
    image: null,
  },
  {
    title: "Goblin Caves",
    description: "Dark and damp, these caves are filled with scheming goblins ready to ambush unwary adventurers...",
    challengeRating: 5,
    environment: "Underground",
    fullDescription:
      "Dark and damp, these caves are filled with scheming goblins ready to ambush unwary adventurers. Hidden traps and secret passages await those who dare enter.",
    image: null,
  },
];

const DnDCard = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="relative w-full h-96 overflow-hidden transition-all duration-500 bg-gradient-to-br from-[#368BC1] to-[#142] hover:from-[#383838] hover:to-stone-800 border-2 border-amber-900 hover:border-amber-600 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-900/30 rounded-lg"
        onMouseEnter={() => setShowReadMore(true)}
        onMouseLeave={() => setShowReadMore(false)}
      >
        <div className="p-0 h-full">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwIC01NiAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPg==')]" />
          </div>

          {/* Card Content */}
          <div className="relative p-6 flex flex-col h-full">
            <h3 className="text-2xl font-medieval text-[#6C3B90]">{card.title}</h3>

            <img
              src={card.image || `https://via.placeholder.com/300x200?text=${encodeURIComponent(card.title)}`}
              alt={card.title}
              className="rounded-lg mb-4 object-cover"
            />

            <p className="text-amber-200/80 flex-grow">{card.description}</p>

            {/* Read More Button */}
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900 to-transparent p-6 transform transition-all duration-300 ${
                showReadMore ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              <button
                onClick={() => setIsOpen(true)}
                className="w-full py-2 px-4 bg-red-900 hover:bg-red-800 text-amber-400 rounded-md border border-amber-600 flex items-center justify-center gap-2 transition-colors duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-4xl bg-gradient-to-br from-stone-900 to-red-900 border-2 border-amber-600 text-amber-200 rounded-lg p-6 mx-4 overflow-auto flex flex-row gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Left Side: Image */}
            <div className="w-1/3">
              <img
                src={card.image || `https://via.placeholder.com/600x300?text=${encodeURIComponent(card.title)}`}
                alt={`${card.title} Expanded`}
                className="rounded-lg w-full object-cover mb-6 border border-amber-600/50"
              />
            </div>

            {/* Modal Right Side: Content */}
            <div className="w-2/3 flex flex-col">
              <h2 className="text-3xl font-medieval text-amber-400 mb-4">{card.title}</h2>
              <p className="text-lg leading-relaxed">{card.fullDescription}</p>

              <div className="mt-6 p-4 bg-stone-900/50 rounded-lg border border-amber-600/30">
                <h4 className="text-xl text-amber-400 mb-2">Dungeon Master's Notes</h4>
                <p className="text-amber-200/80">
                  Challenge Rating: {card.challengeRating} | Environment: {card.environment} | Treasure Hoard: Legendary
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const DnDCardGrid = () => {
  return (
    <div className="p-8 bg-stone-950 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <DnDCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
};

export default DnDCardGrid;

