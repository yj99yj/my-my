import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    // Generic handleChange to update all form fields dynamically
    const handleChange = (e) => {
        const { name, value } = e.target; // Extract name and value from the input element

        if (name === 'date') setDate(value);
        if (name === 'time') setTime(value);
        if (name === 'guests') setGuests(value);
        if (name === 'occasion') setOccasion(value);

        // Dispatch event (assumed to update state)
        props.dispatch(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ date, time, guests, occasion }); // Pass the form data
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input 
                                id='book-date' 
                                name="date" 
                                value={date} 
                                onChange={handleChange} 
                                type='date' 
                                required 
                            />
                        </div>

                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select 
                                id="book-time" 
                                name="time" 
                                value={time} 
                                onChange={handleChange} 
                            >
                                <option value="">Select a Time</option>
                                {props.availableTimes.map((availableTime, index) => (
                                    <option key={index} value={availableTime}>
                                        {availableTime}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input 
                                id='book-guests' 
                                name="guests" 
                                type="number" 
                                min='1' 
                                value={guests} 
                                onChange={handleChange} 
                            />
                        </div>

                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select 
                                id='book-occasion' 
                                name="occasion" 
                                value={occasion} 
                                onChange={handleChange}
                            >
                                <option value="">Select an Occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        </div>

                        <div className='reservation'>
                            <input 
                                aria-label='On Click' 
                                type='submit' 
                                value="Make your reservation" 
                            />
                        </div>

                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;


