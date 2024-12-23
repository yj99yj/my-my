import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';

const Main = () => {

    const seedRandom = function(seed) {
        var m =  2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function() {
            return (s = s * a % m) / m;
        }
    };

    const fetchAPI = function(date) {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <= 23; i++) {  // Corrected loop condition
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() > 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formDate) {
        return true;
    };

    // Corrected typo in `fetchAPI` call and properly instantiate state
    const initialState = { availableTimes: fetchAPI(new Date()) }; 
    const [state, dispatch] = useReducer(updateTimes, initialState);

    // Corrected reducer function
    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(date) };  // Corrected return object
    }

    const navigate = useNavigate();

    function submitForm(formDate) {
        if (submitAPI(formDate)) {
            navigate("/confirmed");
        }
    }

    return (
        <main>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='/booking' element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path='/confirmed' element={<div>Booking Confirmed!</div>} /> {/* Added a dummy confirmed route */}
            </Routes>
        </main>
    );
};

export default Main;
