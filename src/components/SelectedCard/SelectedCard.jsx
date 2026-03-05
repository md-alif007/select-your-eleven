import React from 'react';
import deleteImg from '../../assets/Vector.png';

const SelectedCard = ({ player ,removePlayer }) => {
    // console.log();

    const handleRemove = () => {
        removePlayer(player)
    }

    return (
        <div className='flex justify-between items-center border border-gray-400 p-3 rounded-2xl mb-1'>
            <div className='flex items-center'>
                <img
                    className='h-12.5 w-12.5 rounded-xl'
                    src={player.cricketer_image} alt="" />
                <div className='ml-2'>
                    <h1>{player.cricketer_name}</h1>
                    <h1>{player.cricketer_role}</h1>
                </div>
            </div>
            <div onClick={handleRemove}>
                <img src={deleteImg} alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;