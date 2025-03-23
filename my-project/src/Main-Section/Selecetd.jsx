import React from 'react';

const Selecetd = ({selectedPlayers,goBack}) => {
    return (
        <div>
            <div className="p-4">
            <button 
                className="bg-[#E7FE29] text-black px-4 py-2 font-medium rounded" 
                onClick={goBack}
            >
                Available
            </button>
            <div className="grid grid-cols-1 gap-4 mt-4">
                {selectedPlayers.length > 0 ? (
                    selectedPlayers.map((player, index) => (
                        <div key={index} className="p-4 border rounded-xl flex gap-4">
                            <img src={player.player_image} alt={player.player_name} className="w-16 h-16 rounded-full" />
                            <div>
                                <h2 className="font-bold">{player.player_name}</h2>
                                <p className="text-sm text-gray-600">{player.position}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No players selected yet.</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default Selecetd;