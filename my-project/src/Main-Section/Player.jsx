import React from 'react';
import { FaUserAlt, FaFlag } from "react-icons/fa";

const Player = ({ player, selectPlayer }) => {
    const { player_id, player_image, player_name, player_country, position, bowling_category, batting_category, price, choose_player_button } = player;

    return (
        <div>
            <main>
                <section className='border-2 w-[424px] h-[528px] rounded-xl'>
                    <img className='w-[376px] h-[250px] p-5' src={player_image} alt="" />
                    <div className='flex gap-5 ml-5'>
                        <FaUserAlt />
                        <p>{player_name}</p>
                    </div>
                    <div className='flex gap-5 ml-5'>
                        <FaFlag />
                        <p>{player_country}</p>
                        <div className='flex justify-between'>
                            <button className='mb-5 ml-20 w-[119px] h-[36px] border-2 rounded-xl bg-[#1313130D]'>{position}</button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h1 className='text-2xl font-bold ml-5'>Rating</h1>
                        <div className='flex justify-between ml-5'>
                            <h1>{batting_category}</h1>
                            <h1 className='mb-5 ml-20 w-[119px] h-[36px] border-2 rounded-xl bg-[#1313130D] mr-2 items-center'>{bowling_category}</h1>
                        </div>
                        <div className='flex justify-between m-auto ml-5'>
                            <p>Price: ${price}</p>
                            <button 
                                onClick={() => selectPlayer(player_id, price)}  
                                className='w-[119px] h-[36px] border-2 rounded-xl bg-[#1313130D] mr-2'>
                                {choose_player_button}
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Player;
