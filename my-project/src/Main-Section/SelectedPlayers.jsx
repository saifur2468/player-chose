import React from 'react';
import { MdDeleteForever } from "react-icons/md";

 
const SelectedPlayers = ({ selectedPlayers, removePlayer,selectedCount }) => {
 
    return (
       
        <div className="p-5">
            <div className='flex  justify-between'>
                <h1 className='text-xl'>Available Players</h1>
                <div className='flex rounded-xl overflow-hidden border border-[#FFFFFF]'>
                    <span   className={'bg-[#E7FE29] text-black px-4 py-2 font-medium '}>Available</span>
                    <span className='text-[#13131399] px-4 py-2'>Selected ({selectedCount})</span>
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-4">Selected Players</h1>
           
            {selectedPlayers.length === 0 ? (
                <p className="text-red-500">No players selected.</p>
                
            ) : (
                <ul>
                    {selectedPlayers.map((player) => (
                        <li key={player.player_id} className="flex items-center gap-5 border p-3 rounded-lg mb-2">
                            <img src={player.player_image} alt={player.player_name} className="w-16 h-16 rounded-full" />
                            <div>
                                <h2 className="text-lg font-semibold">{player.player_name}</h2>
                                <p>{player.position}</p>
                            </div>
                            <button 
                                onClick={() => removePlayer(player.player_id)}
                                className="bg-red-500 text-white px-3 py-1 rounded ml-auto"
                            >
                                <MdDeleteForever />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectedPlayers;

