import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SettlementList from './components/SettlementList';

import List from './components/List';
import AddSettlementScreen from './components/AddSettlementScreen';
import TextField from "@mui/material/TextField";
import design from './App.css'
import UpdateSettlementScreen from './components/UpdateSettlementScreen';
function App() {
    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        //convert input text to lower case
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const [refresh, setRefresh] = useState(false);

    // Toggle refresh state to trigger re-render
    const handleSettlementChanged = () => {
        setRefresh(!refresh); 
    };

    // This effect will run every time `refresh` changes
    useEffect(() => {
    }, [refresh]);


    return (
        <Router>
            <div className="main">
                <h1>Welcome To Settlements System</h1>

                <Routes>
                    <Route exact path="/" element={
                        <>
                            <div className="search">
                                <TextField
                                    id="outlined-basic"
                                    onChange={inputHandler}
                                    variant="outlined"
                                    fullWidth
                                    label="Search"
                                    className="text"
                                />
                            </div>
                            <Link className="text" to="/add-settlement">Add Settlement</Link>

                            <List input={inputText} refresh={refresh} />
                            <SettlementList refresh={refresh} />
                        </>
                    } />
                    <Route path="/add-settlement" element={
                        <AddSettlementScreen onSettlementChanged={handleSettlementChanged} />
                    } />
                    <Route path="/update/:name" element={
                        <UpdateSettlementScreen onSettlementChanged={handleSettlementChanged} />
                    } />
                </Routes>

            </div>
        </Router>
    );
}

export default App;
