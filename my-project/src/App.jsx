import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Players from './Main-Section/Players.jsx';
import Hero from './Navbar/Hero.jsx';
import Nav from './Navbar/Nav.jsx';  
import Footerone from './Main-Section/Footerone.jsx';
import { ToastContainer, toast } from 'react-toastify';
import SelectedPlayers from './Main-Section/SelectedPlayers.jsx';

function App() {
    const [count, setCount] = useState(0);  
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [selectedCount, setSelectedCount] = useState(0);  

    const handleAddMoney = () => {
        setCount(prev => prev + 500);
    };

    const selectPlayer = (player_id, price, player) => {
        if (selectedPlayers.some(p => p.player_id === player_id)) {
            toast.error("This player has already been selected!");
        } 
        else if (count < price) {
            toast.success("You do not have enough balance to choose this player!");
        } 
        else {
            setSelectedPlayers([...selectedPlayers, player]);
            setCount(prev => prev - price);
            setSelectedCount(prev => prev + 1);  
        }
    };

    const removePlayer = (player_id) => {
        const updatedPlayers = selectedPlayers.filter(player => player.player_id !== player_id);
        setSelectedPlayers(updatedPlayers);
        setSelectedCount(updatedPlayers.length);
    };

    return (
        <Router>  
            <Nav count={count} />
            <Hero handleAddMoney={handleAddMoney} />
            <ToastContainer />

            <Routes>
                <Route path="/" element={
                    <Players 
                        count={count}  
                        selectPlayer={selectPlayer} 
                        selectedCount={selectedCount} 
                    />
                }/>
                <Route path="/selected-players" element={
                    <SelectedPlayers 
                        selectedPlayers={selectedPlayers} 
                        removePlayer={removePlayer} 
                    />
                }/> 
            </Routes>

            <Footerone />
        </Router>
    );
}

export default App;






