import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availabelBalance, purchasedPlayer, setPurchasedPlayer }) => {

    const playersData = use(playersPromise);
    // console.log(playersData);

    return (
        <div className='mx-auto w-11/12 grid grid-cols-3 gap-4'>
            {
                playersData.map(playerData => <PlayerCard
                    purchasedPlayer={purchasedPlayer}
                    setPurchasedPlayer={setPurchasedPlayer}
                    availabelBalance={availabelBalance}
                    setAvailableBalance={setAvailableBalance}
                    playerData={playerData}>
                </PlayerCard>)
            }
        </div>
    );
};

export default AvailablePlayers;