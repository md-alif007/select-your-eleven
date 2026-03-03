import React, { use } from 'react';

const AvailablePlayers = ({playersPromise}) => {

    const playersData = use(playersPromise);
    console.log(playersPromise);

    return (
        <div>
            
        </div>
    );
};

export default AvailablePlayers;