import React, { useState } from 'react';
import SettlementController from '../controllers/settlementService';
import settlementService from '../controllers/settlementService';
import { useNavigate } from 'react-router-dom';


const SettlementForm = ({ onSettlementChanged }) => {
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState(null); // State for error message
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newSettlement = { name };  // currSettName(string) is the only key of a settlement

        // Addition to DB.
        try {
            await SettlementController.addSettlement(newSettlement);
            onSettlementChanged(); // Trigger refresh
            // Clean data
            setName('');
            setErrorMessage(null); 
            // send back to main screen
            navigate(`/`);

        } catch (error) {
            console.error('Error adding settlement:', error);
            setErrorMessage('Settlement already exists. Try different name, or delete the existing one before adding it again'); // Set error message
        }
    };

    return (
        <div className="main">
            <h2 className="my-4">Add Settlement</h2>
            {errorMessage && (
                <div className="error-dialog">
                    <p>{errorMessage}</p>
                    <button onClick={() => setErrorMessage(null)}>Close</button>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="settlementName" className="text">Name:</label>
                    <input type="text" className="text" id="settlementName" value={name} onChange={e => setName(e.target.value)} required />
                </div>

                <button type="submit" className="button_ok">Add Settlement</button>
            </form>
        </div>
    );
};

export default SettlementForm;
