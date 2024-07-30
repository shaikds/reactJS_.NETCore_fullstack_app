import React, { useState, useEffect } from 'react';
import settlementService from '../controllers/settlementService';
import QwertyCorrector from '../qwertyCorrector';

// Initialize QwertyCorrector instance
const qwertyCorrector = new QwertyCorrector();

function List(props) {
    const [settlements, setSettlements] = useState([]);
    const { input, refresh } = props;

    // Correct the input text using QwertyCorrector
    const correctedText = qwertyCorrector.correctString(input).toLowerCase();
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

    // First, try to filter by the regular english
    const regularTextMatches = settlements.filter((settlement) =>

        settlement.name.toLowerCase().includes(input.toLowerCase())
    );

    // If no matches are found with english, try again with hebrew text
    const filteredData = regularTextMatches.length > 0 && input.length>0
        ? regularTextMatches
        : settlements.filter((settlement) =>
            input !== '' && settlement.name.toLowerCase().includes(correctedText)
        );

    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.name}>{item.name}</li>
            ))}
        </ul>
    );
}

export default List;
