import React, { useState } from 'react';
import userImg from '../../assets/user1.png'
import flagImg from '../../assets/Group.png';

const PlayerCard = ({ playerData, setAvailableBalance, availabelBalance, purchasedPlayer, setPurchasedPlayer }) => {

    const [isSelected, setIsSelected] = useState();

    return (
        <div className="card bg-gray-600 p-5 shadow-sm w-96">
            <figure>
                <img className='w-full h-96 object-cover'
                    src={playerData.cricketer_image}
                    alt="Shoes" />
            </figure>
            <div className="">
                <div className='flex items-center gap-2 mt-5'>
                    <img className='w-6 h-6' src={userImg} alt="" /><h2 className="card-title">{playerData.cricketer_name}</h2>
                </div>
                <div className='flex items-center justify-between border-b mb-1.5 p-2'>
                    <div className='flex items-center gap-2 mt-2'>
                        <img src={flagImg} alt="" />
                        <h4>{playerData.cricketer_country}</h4>
                    </div>
                    <div>
                        <button className='btn'>{playerData.cricketer_role}</button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <span className='font-bold'>{playerData.cricketer_batting_style}</span>
                    <span className='font-bold'>{playerData.cricketer_bowling_style}</span>
                </div>
                <div className="card-actions flex items-center justify-between">
                    <p className='font-bold'>Price: {playerData.cricketer_price} USD</p>
                    <button
                        disabled={isSelected}
                        onClick={() => {
                            const playerPrice = playerData.cricketer_price;
                            if (availabelBalance < playerPrice) {
                                alert("Not enough point");
                                return;
                            }
                            setIsSelected(true);
                            setAvailableBalance(availabelBalance - playerPrice);
                            setPurchasedPlayer([...purchasedPlayer, playerData])
                        }}
                        className="btn"
                    >
                        {isSelected === true ? "Selected" : "Choose player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;