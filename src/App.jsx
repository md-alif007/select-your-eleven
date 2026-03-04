import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailabelPlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const fetchPlayersData = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

const playersPromise = fetchPlayersData();

function App() {

  const [toggle, setToggle] = useState(true);

  const [availabelBalance, setAvailableBalance] = useState(450000);

  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  // console.log(purchasedPlayer)

  return (
    <>
      <Navbar availabelBalance={availabelBalance}></Navbar>

      <div className='mx-auto w-11/12 flex justify-between m-5'>
        <h1 className='font-bold text-2xl'>
          {
            toggle === true ? "Available players" : `Selected Player (${purchasedPlayer.length}/6)`
          }
        </h1>
        <div className='font-bold'>
          <button onClick={() => setToggle(true)}
            className={`py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0 
            ${toggle === true ? "bg-[#E7FE29]" : ""}`}>
            Available
          </button>
          <button onClick={() => setToggle(false)}
            className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0
            ${toggle === false ? "bg-[#E7FE29]" : ""}`}>
            Selected {purchasedPlayer.length}
          </button>
        </div>
      </div>

      {
        toggle === true ?
          <Suspense fallback={<p>loading players data...</p>}>
            <AvailablePlayers
              purchasedPlayer={purchasedPlayer}
              setPurchasedPlayer={setPurchasedPlayer}
              availabelBalance={availabelBalance}
              setAvailableBalance={setAvailableBalance}
              playersPromise={playersPromise}>
            </AvailablePlayers>
          </Suspense> :
          <SelectedPlayers purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer}></SelectedPlayers>
      }

      {/* <SelectedPlayers
        purchasedPlayer={purchasedPlayer}
        setPurchasedPlayer={setPurchasedPlayer}>
      </SelectedPlayers> */}


    </>
  )
}

export default App
