import React, { useState } from 'react';

import * as styles from './BookingModal.module.css';
import MultiStep from 'react-multistep';
import { Button, Radio, Form, Input, Icon } from 'antd';


const BookingModal = ({ onClose }) => {

    const StepOne = () => {
        const [selectedOption, setSelectedOption] = useState("");
    
        return (
            <div>
                <h3>Step One: Choose Your Rental Type</h3>
                <Form>
                    <Form.Item>
                        <Radio.Group 
                            value={selectedOption} 
                            onChange={e => setSelectedOption(e.target.value)}
                        >
                            <Radio value="specificDuration">Specific Duration Rental</Radio>
                            <Radio value="monthlyTerm">Monthly Term Rental</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </div>
        );
    };
    

    const StepTwo = () => {
        return (
            <div>
                <h3>Step Two</h3>
                {/* Your form or content for step two */}
            </div>
        );
    };

    const StepThree = () => {
        return (
            <div>
                <h3>Step Three</h3>
                {/* Your form or content for step three */}
            </div>
        );
    };

    const steps = [
        { component: <StepOne /> },
        { component: <StepTwo /> },
        { component: <StepThree /> },
    ];

    return (
        <>
            <div className={styles.modalOverlay} onClick={onClose}></div>
            <div className={styles.modalContent}>
                <h2>Your Booking Details</h2>
                <MultiStep steps={steps} />
                

            </div>
        </>
    );
};

export default BookingModal;
