import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettlementListItem = ({ settlement, onDelete }) => {
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate(`/update/${encodeURIComponent(settlement.name)}`);
    };

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h5>{settlement.name}</h5>
                </div>
                <div>
                    <button className="button" onClick={handleEditClick}>Edit</button>
                    <button className="button_bad" onClick={() => onDelete(settlement.name)}>Delete</button>
                </div>
            </div>
        </li>
    );
};

export default SettlementListItem;
