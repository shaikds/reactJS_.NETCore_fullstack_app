// src/components/UpdateForm.js
import React, { useState } from 'react';
import SettlementController from '../controllers/settlementService';
import { useNavigate } from 'react-router-dom';


const UpdateForm = ({ name, onSettlementChanged }) => {
    const [newName, setNewName] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedSettlement = { name: newName };

        try {
            await SettlementController.updateSettlement(name, updatedSettlement);
            onSettlementChanged(); // Trigger refresh
            //Clean Data
            setNewName('');
            setErrorMessage(null);
            // get back when finishes
            navigate(`/`);
        } catch (error) {
            console.error('Error updating settlement:', error);
            setErrorMessage('Error updating settlement. Please try again.');
        }
    };

    return (
        <div className="main">

            <h2 className="my-4">Edit {name}</h2>
            {errorMessage && (
                <div className="error-dialog">
                    <p>{errorMessage}</p>
                    <button onClick={() => setErrorMessage(null)}>Close</button>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="settlementName" className="text">New Name:</label>
                    <input type="text" className="text" id="settlementName" value={newName} onChange={e => setNewName(e.target.value)} required />
                </div>
                <button type="submit" className="button_ok">Update Settlement</button>
            </form>
        </div>
    );
};

export default UpdateForm;
