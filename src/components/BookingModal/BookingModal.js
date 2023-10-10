import React from 'react';
import MultiStep from 'react-multistep';

const BookingModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const steps = [
        { name: 'Select Porta Potty', component: <Step1 /> },
        { name: 'Choose Rental Dates', component: <Step2 /> },
        { name: 'Delivery Details', component: <Step3 /> }
    ];

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose}>Close</button>
                <MultiStep steps={steps} />
            </div>
        </div>
    );
};

const Step1 = () => {
    return (
        <div>
            <h2>Select the type of porta potty you wish to rent.</h2>
            {/* Your form/component for selecting the type of porta potty goes here */}
        </div>
    );
};

const Step2 = () => {
    return (
        <div>
            <h2>Select the start and end dates for your rental.</h2>
            {/* Your form/component for choosing rental dates goes here */}
        </div>
    );
};

const Step3 = () => {
    return (
        <div>
            <h2>Provide the location and any specific instructions for delivery.</h2>
            {/* Your form/component for entering delivery details goes here */}
        </div>
    );
};

export default BookingModal;
