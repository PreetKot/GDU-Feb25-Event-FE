import React, { useState } from 'react';

const EventRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        event: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for registering, ${formData.name}!`);
        setFormData({
            name: '',
            email: '',
            event: '',
            message: ''
        });
    };

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center bg-cover pt-16 px-4 sm:px-8 md:px-16" style={{ backgroundImage: `url('/images/dragondungeon.webp') `}}>
            {/* Form Container */}
            <div className="relative bg-white/5 p-6 rounded-lg max-w-md w-full shadow-lg border-2 border-red-900 sm:p-8 md:max-w-lg lg:max-w-xl">
                {/* Dark Overlay for Form Background */}
                <div className="absolute inset-0 bg-black/70 rounded-lg"></div>

                <div className="relative z-10">
                    {/* Form Title */}
                    <h1 className="text-center text-2xl font-bold text-yellow-400 mb-6 md:text-3xl lg:text-4xl">⚔ Dragons & Dungeons Event Registration 🐉</h1>

                    {/* Form Elements */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <label htmlFor="name" className="block text-lg font-semibold">Adventurer's Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 bg-red-900 text-white border border-red-900 rounded-md placeholder:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your heroic name"
                            required
                        />

                        <label htmlFor="email" className="block text-lg font-semibold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 bg-red-900 text-white border border-red-900 rounded-md placeholder:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@realm.com"
                            required
                        />

                        <label htmlFor="event" className="block text-lg font-semibold">Quest Selection:</label>
                        <select
                            id="event"
                            name="event"
                            className="w-full px-4 py-2 bg-red-900 text-white border border-red-900 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            value={formData.event}
                            onChange={handleChange}
                            required
                        >
                            <option value="" className="text-yellow-300">Choose your adventure</option>
                            <option value="dragon-taming" className="text-black">Dragon Taming Workshop</option>
                            <option value="dungeon-crawl" className="text-black">Dungeon Crawl Adventure</option>
                            <option value="wizard-duel" className="text-black">Wizard Duel Tournament</option>
                        </select>

                        <label htmlFor="message" className="block text-lg font-semibold">Message to the Guildmaster:</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full px-4 py-2 bg-red-900 text-white border border-red-900 rounded-md placeholder:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Share your expectations or questions"
                        />

                        <button type="submit" className="w-full px-4 py-2 bg-red-800 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-400">Embark on Quest</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventRegistrationForm;