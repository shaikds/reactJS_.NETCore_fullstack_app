import React from 'react';
import { useParams,Link } from 'react-router-dom';
import UpdateForm from './UpdateForm';

const UpdateSettlementScreen = ({ onSettlementChanged }) => {
    const { name } = useParams(); // get settlement name from url parameters

    return (
        <div mainClass="main">

            <UpdateForm name={decodeURIComponent(name)} onSettlementChanged={onSettlementChanged} />
            <Link to="/">Back to Main Screen</Link>

        </div>
    );
};

export default UpdateSettlementScreen;
