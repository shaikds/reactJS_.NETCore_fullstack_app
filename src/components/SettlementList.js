import React, { useState, useEffect } from 'react';
import SettlementListItem from './SettlementListItem';
import settlementService from '../controllers/settlementService';

const SettlementList = ({ refresh }) => {
    const [settlements, setSettlements] = useState([]);
    const [startIndex, setStartIndex] = useState(0); // State for managing paging
    const itemsPerPage = 5; // Number of items per page

    useEffect(() => {
        getSettlements();
    }, [refresh]);

    const getSettlements = async () => {
        try {
            const settlementsData = await settlementService.getAllSettlements();
            setSettlements(settlementsData);
        } catch (error) {
            console.error('Error fetching settlements:', error);
        }
    };

    const handleDelete = async (name) => {
        try {
            await settlementService.removeSettlement(name);
            getSettlements(); // Refresh settlement list
        } catch (error) {
            console.error('Error deleting settlement:', error);
        }
    };

    const handleEdit = () => {
        getSettlements(); // Refresh settlement list after editing
    };

    // show 5 next cities
    const handleNext = () => {
        if (startIndex + itemsPerPage < settlements.length) {
            setStartIndex(startIndex + itemsPerPage);
        }
    }

    // show 5 previous settings
    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - itemsPerPage);
        }
    }

    // Reverse the list
    const handleSortReverse = () => {
        setSettlements([...settlements].reverse());
    }


    return (
        <div className="main">
            <div>
                <button className="button" onClick={handleSortReverse}>Sort/Reverse</button>
            </div>
            <h2 className="my-4">Settlement List</h2>
            <ul className="list-group">
                {settlements.slice(startIndex, startIndex + itemsPerPage).map(settlement => (
                    <SettlementListItem
                        key={settlement.name}
                        settlement={settlement}
                        onDelete={() => handleDelete(settlement.name)}
                        onEdit={handleEdit}
                    />
                ))}
            </ul>
            <div>
                <button className="button" type = "button"n onClick={handlePrev} disabled={startIndex === 0}>Previous</button>
                <button className="button" onClick={handleNext} disabled={startIndex + itemsPerPage >= settlements.length}>Next</button>
            </div>
        </div>
    );
};

export default SettlementList;
