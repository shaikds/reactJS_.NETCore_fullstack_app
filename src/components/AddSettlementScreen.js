import React from 'react';
import { Link } from 'react-router-dom';
import SettlementForm from './SettlementForm';

const AddSettlementScreen = ({ onSettlementChanged }) => {
    return (
        <div className="main">
        
            <SettlementForm onSettlementChanged={onSettlementChanged} />
            <Link to="/">Back to Main Screen</Link>
        </div>
    );
};

export default AddSettlementScreen;
