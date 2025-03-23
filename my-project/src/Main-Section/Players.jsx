// import React, { useEffect, useState } from 'react';
// import Player from './Player';
// import { useNavigate } from 'react-router-dom';
// const Players = ({ selectPlayer, selectedCount }) => {
//     const [players, setPlayers] = useState([]); 
//     const navigate = useNavigate(); 
//     useEffect(() => {
//         fetch('/player.json')
//             .then((res) => res.json())
//             .then((data) => setPlayers(data));
//     }, []);

//     return (
//         <div>
//             <div className='flex justify-between my-5'>
//                 <h1 className='text-2xl'>Available Players</h1>
//                 <div className='flex rounded-xl overflow-hidden border border-[#FFFFFF]'>
//                     <span className='bg-[#E7FE29] text-black px-4 py-2 font-medium'>Available</span>
//                     <span onClick={() => navigate("./SelectedPlayers.jsx")} className='text-[#13131399] px-4 py-2'>Selected ({selectedCount})</span>
//                 </div>
//             </div>
//             <div className=' lg:grid grid-cols-3 gap-20'>
//                 {players.map(player => (
//                     <Player key={player.player_id} player={player} selectPlayer={selectPlayer} />
//                 ))}
//             </div>
         
//         </div>
//     );
// };

// export default Players;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Player from './Player';

const Players = ({ selectPlayer, selectedCount }) => {
    const [players, setPlayers] = useState([]);  
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/player.json')
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);

    return (
        <div>
            <div className='flex justify-between my-5'>
                <h1 className='text-2xl'>Available Players</h1>
                <div className='flex rounded-xl overflow-hidden border border-[#FFFFFF]'>
                    <span className='bg-[#E7FE29] text-black px-4 py-2 font-medium'>Available</span>
                    <span   onClick={() => navigate('/selected-players')}className='text-[#13131399] px-4 py-2'>Selected ({selectedCount})</span>
                </div>
            </div>

           

            <div className='lg:grid grid-cols-3 gap-20'>
                {players.map(player => (
                    // <Player key={player.player_id} player={player} selectPlayer={selectPlayer} />
                    <Player 
    key={player.player_id} 
    player={player} 
    selectPlayer={(id, price) => selectPlayer(id, price, player)} 
/>

                ))}
            </div>
        </div>
    );
};

export default Players;
