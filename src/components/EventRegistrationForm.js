import React, { useState } from 'react';
import './EventRegistrationForm.css';

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
        <div className="form-page">
            {/* Form Container */}
            <div className="form-container">
                {/* Dark Overlay for Form Background */}
                <div className="overlay"></div>

                <div className="form-content">
                    {/* Form Title */}
                    <h1 className="form-title">⚔️ Dragons & Dungeons Event Registration 🐉</h1>

                    {/* Form Elements */}
                    <form onSubmit={handleSubmit} className="dragon-form thematic-borders">
                        <label htmlFor="name" className="form-label">Adventurer's Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your heroic name"
                            required
                        />

                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@realm.com"
                            required
                        />

                        <label htmlFor="event" className="form-label">Quest Selection:</label>
                        <select
                            id="event"
                            name="event"
                            className="form-select"
                            value={formData.event}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose your adventure</option>
                            <option value="dragon-taming">Dragon Taming Workshop</option>
                            <option value="dungeon-crawl">Dungeon Crawl Adventure</option>
                            <option value="wizard-duel">Wizard Duel Tournament</option>
                        </select>

                        <label htmlFor="message" className="form-label">Message to the Guildmaster:</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-textarea"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Share your expectations or questions"
                        />

                        <button type="submit" className="form-button">Embark on Quest</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventRegistrationForm;
